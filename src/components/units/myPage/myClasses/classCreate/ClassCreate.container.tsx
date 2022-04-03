import { useState } from 'react'
import { Theme, useTheme } from '@mui/material/styles'
import { SelectChangeEvent } from '@mui/material/Select'
import ClassCreateUI from './ClassCreate.presenter'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from '@apollo/client'
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

export default function ClassCreate() {
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

  const onChangeDescription = (event) => {
    setClassDescription(event.target.value)
    console.log(classDescription)
  }

  const onChangeCurriculum = (event) => {
    setClassCurriculum(event.target.value)
  }

  const onChangePrice = (event) => {
    setClassPrice(Number(event.target.value))
  }

  const onChangeMaxUser = (event) => {
    setClassMaxUser(Number(event.target.value))
  }

  const onChangeStartDate = (date, dateString) => {
    setClassStartDate(dateString)
    console.log(dateString)
  }

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
          },
        },
      })
      console.log(createClassResult)
      // router.push(`/class/${createClassResult?.data.createQtBoard?.id}`)
    } catch (error) {
      alert(`${error.message}`)
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
      onChangeDescription={onChangeDescription}
      onChangeCurriculum={onChangeCurriculum}
      onChangePrice={onChangePrice}
      onChangeMaxUser={onChangeMaxUser}
      onChangeStartDate={onChangeStartDate}
      onChangeStartTime={onChangeStartTime}
    />
  )
}
