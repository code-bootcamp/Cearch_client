import MyInformationUI from './MyInformation.presenter'
import { UPDATE_MENTOR_INFO, UPDATE_USER_INFO } from './MyInformation.queries'
import { ChangeEvent, useRef, useState } from 'react'
import { Theme, useTheme } from '@mui/material/styles'
import { SelectChangeEvent } from '@mui/material/Select'
import { useMutation } from '@apollo/client'
import {
  IMutation,
  IMutationUpdateMentorInfoArgs,
  IMutationUpdateUserInfoArgs,
} from '../../../../commons/types/generated/types'
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
      width: 1,
    },
  },
}

export default function MyInformation(props) {
  const fileRef = useRef<HTMLInputElement>(null)

  const theme = useTheme()
  const [file1, setFile1] = useState<File>()
  const [imageUrl, setImageUrl] = useState('')
  const [isClicked, setIsClicked] = useState(false)
  const [isApplyBtnClicked, setIsApplyBtnClicked] = useState(false)
  const [category, setCategory] = useState<string[]>([])
  const [department, setDepartment] = useState<string[]>([])
  const [gender, setGender] = useState('M')
  const [newName, setNewName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [departmentName, setDepartmentName] = useState('')
  const [timeRange, setTimeRange] = useState<string[]>([])
  const [selfIntro, setSelfIntro] = useState('')

  const [updateUserInfo] = useMutation<
    Pick<IMutation, 'updateUserInfo'>,
    IMutationUpdateUserInfoArgs
  >(UPDATE_USER_INFO)

  const [updateMentorInfo] = useMutation<
    Pick<IMutation, 'updateMentorInfo'>,
    IMutationUpdateMentorInfoArgs
  >(UPDATE_MENTOR_INFO)

  const onClickImage = () => {
    fileRef.current?.click()
  }

  const onChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    console.log(file)
    if (!file) {
      alert('파일이 없습니다!')
      return
    }

    const fileReader = new FileReader()
    fileReader.readAsDataURL(file)
    fileReader.onload = (data) => {
      if (typeof data.target?.result === 'string') {
        console.log(data.target?.result)
        setImageUrl(data.target?.result)
        setFile1(file)
      }
    }
  }

  const handleChange = (event: SelectChangeEvent<typeof category>) => {
    const {
      target: { value },
    } = event
    setCategory(typeof value === 'string' ? value.split(',') : value)
    console.log('설정중인 관심분야: ', category)
  }

  const handleChangeDepartment = (
    event: SelectChangeEvent<typeof category>
  ) => {
    const {
      target: { value },
    } = event
    setDepartment(typeof value === 'string' ? value.split(',') : value)
  }

  const toggle = () => {
    setIsClicked((prev) => !prev)
  }

  const mentorApplyToggle = () => {
    setIsApplyBtnClicked((prev) => !prev)
  }

  const onChangeNewName = (event) => {
    setNewName(event.target.value)
  }

  const onChangeGender = (event) => {
    setGender(event.target.value)
  }

  const onChangePhone = (event) => {
    setPhoneNumber(event.target.value)
  }

  const onChangeCompany = (event) => {
    setCompanyName(event.target.value)
  }
  const onChangeDepartmentName = (event) => {
    setDepartmentName(event.target.value)
  }

  const onChangeSelfIntro = (event) => {
    setSelfIntro(event.target.value)
  }

  const onChangeTimeRange = (time: any, timeRange: string[]) => {
    setTimeRange(timeRange)
  }

  const submitUpdateMentee = async () => {
    try {
      const updateMenteeResult = await updateUserInfo({
        variables: {
          updateUserForm: {
            name: newName,
            gender,
            phoneNumber,
          },
          category,
        },
      })
      Modal.success({ content: '회원정보를 수정했습니다.' })
      console.log('멘티수정정보', updateMenteeResult)
      props.userInfoRefetch()
    } catch (error) {
      Modal.error(error.message)
    }
  }

  const submitUpdateMentor = async () => {
    try {
      const updateMenteeResult = await updateUserInfo({
        variables: {
          updateUserForm: {
            name: newName,
            gender,
            phoneNumber,
          },
          category,
        },
      })
      const updateMentorResult = await updateMentorInfo({
        variables: {
          mentorForm: {
            companyName,
            department: departmentName,
            selfIntro,
            onlineTime: String(timeRange),
          },
          category: department,
        },
      })
      Modal.success({ content: '회원정보를 수정했습니다.' })
      props.userInfoRefetch()
      console.log('멘토수정정보', updateMenteeResult, updateMentorResult)
    } catch (error) {
      Modal.error(error.message)
    }
  }

  console.log('기존관심분야: ', props.userInterest)

  return (
    <>
      <MyInformationUI
        category={category}
        department={department}
        handleChange={handleChange}
        handleChangeDepartment={handleChangeDepartment}
        MenuProps={MenuProps}
        categories={categories}
        getStyles={getStyles}
        theme={theme}
        isClicked={isClicked}
        isApplyBtnClicked={isApplyBtnClicked}
        onChangeFile={onChangeFile}
        setIsClicked={setIsClicked}
        setIsApplyBtnClicked={setIsApplyBtnClicked}
        toggle={toggle}
        mentorApplyToggle={mentorApplyToggle}
        userInfoData={props.userInfoData}
        onChangeGender={onChangeGender}
        onChangeNewName={onChangeNewName}
        submitUpdateMentee={submitUpdateMentee}
        userInterest={props.userInterest}
        onChangePhone={onChangePhone}
        onChangeCompany={onChangeCompany}
        onChangeDepartmentName={onChangeDepartmentName}
        onChangeTimeRange={onChangeTimeRange}
        onChangeSelfIntro={onChangeSelfIntro}
        submitUpdateMentor={submitUpdateMentor}
        onClickImage={onClickImage}
        fileRef={fileRef}
      />
    </>
  )
}
