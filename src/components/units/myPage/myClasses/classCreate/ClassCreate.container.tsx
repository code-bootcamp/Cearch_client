import { useRef, useState } from 'react'
import { Theme, useTheme } from '@mui/material/styles'
import { SelectChangeEvent } from '@mui/material/Select'
import ClassCreateUI from './ClassCreate.presenter'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation, useQuery } from '@apollo/client'
import {
  CREATE_LECTURE_PRODUCT,
  UPDATE_LECTURE_PRODUCT,
} from './ClassCreate.queries'
import {
  IMutation,
  IMutationCreateLectureProductArgs,
  IMutationUpdateLectureProductArgs,
} from '../../../../../commons/types/generated/types'
import { useRouter } from 'next/router'
import Editor from '@toast-ui/editor'
import { FETCH_LECTURE_PRODUCT } from '../../../class/detail/ClassDetail.queries'
import { Modal } from 'antd'

// prettier-ignore
const categories = [
  'HTML',  'CSS',  'JAVASCRIPT',  'REACT',  'TYPESCRIPT',  'PYTHON', 'C#', 'PHP', 'NODE.js', 'MYSQL', 'C', 'DOCKER', 'REACT-NATIVE', 'RUBY', 'MONGODB','VUE.js','GRAPHQL','RESTAPI','SERVICE','LIBRARY']

function getStyles(name: string, personName: readonly string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  }
}

const ITEM_HEIGHT = 56
const ITEM_PADDING_TOP = 0
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 524,
    },
  },
}

export default function ClassCreate(props) {
  const { data: editLectureData } = useQuery(FETCH_LECTURE_PRODUCT, {
    variables: { lectureproductId: String(props.selectedId), page: 1 },
  })
  const router = useRouter()
  const [classTitle, setClassTitle] = useState('')
  const [classDescription, setClassDescription] = useState('')
  const [classCurriculum, setClassCurriculum] = useState('')
  const [classPrice, setClassPrice] = useState(0)
  const [classMaxUser, setClassMaxUser] = useState(0)
  const [classStartDate, setClassStartDate] = useState('')
  const [classStartTime, setClassStartTime] = useState('')
  const [category, setCategory] = useState<string[]>([])

  const onChangeTitle = (event) => {
    setClassTitle(event.target.value)
  }

  const onChangePrice = (event) => {
    setClassPrice(Number(event.target.value))
  }

  const onChangeMaxUser = (event) => {
    setClassMaxUser(Number(event.target.value))
  }

  const onChangeStartDate = (date, dateString) => {
    const tempString = String(dateString)
    console.log('원래클릭:', dateString)
    console.log('임시변수저장:', tempString)
    setClassStartDate(tempString)
  }
  console.log('스테이트에저장된거:', classStartDate)

  const onChangeStartTime = (time, timeString) => {
    setClassStartTime(timeString)
    console.log(timeString)
  }

  const theme = useTheme()

  const [createLectureProduct] = useMutation<
    Pick<IMutation, 'createLectureProduct'>,
    IMutationCreateLectureProductArgs
  >(CREATE_LECTURE_PRODUCT)

  const [updateLectureProduct] = useMutation<
    Pick<IMutation, 'updateLectureProduct'>,
    IMutationUpdateLectureProductArgs
  >(UPDATE_LECTURE_PRODUCT)

  const submitClassCreate = async () => {
    try {
      const createClassResult = await createLectureProduct({
        variables: {
          createLectureProductInput: {
            classCategories: category,
            classTitle,
            classDescription,
            classCurriculum,
            classPrice,
            classMaxUser,
            classStartDate,
            classStartTime,
            imageURL: '',
          },
        },
      })
      Modal.success({
        content: '클래스 개설 신청이 정상적으로 접수되었습니다.',
      })
      // router.push(`/class/${createClassResult?.data.createQtBoard?.id}`)
    } catch (error) {
      Modal.error(error.message)
    }
  }

  const handleChange = (event: SelectChangeEvent<typeof category>) => {
    const {
      target: { value },
    } = event
    setCategory(typeof value === 'string' ? value.split(',') : value)
    console.log(category)
  }

  return (
    <ClassCreateUI
      category={category}
      handleChange={handleChange}
      MenuProps={MenuProps}
      categories={categories}
      getStyles={getStyles}
      theme={theme}
      submitClassCreate={submitClassCreate}
      onChangeTitle={onChangeTitle}
      onChangePrice={onChangePrice}
      onChangeMaxUser={onChangeMaxUser}
      onChangeStartDate={onChangeStartDate}
      onChangeStartTime={onChangeStartTime}
      classDescription={classDescription}
      setClassDescription={setClassDescription}
      classCurriculum={classCurriculum}
      setClassCurriculum={setClassCurriculum}
      selectedId={props.selectedId}
      isEdit={props.isEdit}
      editLectureData={editLectureData}
      updateLectureProduct={updateLectureProduct}
    />
  )
}
