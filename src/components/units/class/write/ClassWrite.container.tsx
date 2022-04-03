import { useMutation, useQuery } from '@apollo/client'
import { Modal } from 'antd'
import { useRouter } from 'next/router'
import { ChangeEvent, useContext, useState } from 'react'
import { GlobalContext } from '../../../../../pages/_app'
import ClassWriteUI from './ClassWrite.presenter'
import {
  CREATE_LECTURE_REGISTRATION,
  FETCH_LECTURE_PRODUCT,
  FETCH_USER,
} from './ClassWrite.queries'

export default function ClassWrite() {
  const router = useRouter()
  const [createLectureRegistration] = useMutation(CREATE_LECTURE_REGISTRATION)
  const { data: ProductData } = useQuery(FETCH_LECTURE_PRODUCT, {
    variables: {
      lectureproductId: router.query.detail,
      page: 1,
    },
  })
  const { data: UserData } = useQuery(FETCH_USER)

  const [name, setName] = useState(`${UserData?.fetchUser?.name}`)
  const [nameError, setNameError] = useState('')
  const [phoneNumber, setPhoneNumber] = useState(
    `${UserData?.fetchUser?.phoneNumber}`
  )
  const [phoneNumberError, setPhoneNumberError] = useState('')
  const [job, setJob] = useState('')
  const [jobError, setJobError] = useState('')
  const [selfIntroduction, setSelfIntroduction] = useState('')
  const [selfIntroductionError, setSelfIntroductionError] = useState('')
  const [preQuestion, setPreQuestion] = useState('')
  const [preQuestionError, setPreQuestionError] = useState('')
  const [age, setAge] = useState(0)
  const [ageError, setAgeError] = useState('')

  const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
    if (event.target.value.length >= 4) {
      setNameError('')
    }
  }
  const onChangePhoneNumber = (event: ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(event.target.value)
    if (phoneNumber.includes('-') && event.target.value.length >= 10) {
      setPhoneNumberError('')
    }
  }
  const onChangeJob = (event: ChangeEvent<HTMLInputElement>) => {
    setJob(event.target.value)
    if (event.target.value !== '') {
      setJobError('')
    }
  }
  const onChangeSelfIntroduction = (event: ChangeEvent<HTMLInputElement>) => {
    setSelfIntroduction(event.target.value)
    if (event.target.value !== '') {
      setSelfIntroductionError('')
    }
  }
  const onChangePreQuestion = (event: ChangeEvent<HTMLInputElement>) => {
    setPreQuestion(event.target.value)
    if (event.target.value !== '') {
      setPreQuestionError('')
    }
  }
  const onChangeAge = (event: ChangeEvent<HTMLInputElement>) => {
    setAge(Number(event.target.value))
    if (event.target.value !== '') {
      setAgeError('')
    }
  }

  const onClickSubmitRegister = async () => {
    const redLine = '1px solid red'
    if (!name) {
      setNameError(redLine)
    }
    if (!phoneNumber) {
      setPhoneNumberError(redLine)
    }
    if (job === '') {
      setJobError(redLine)
    }
    if (preQuestion === '') {
      setPreQuestionError(redLine)
    }
    if (!phoneNumber) {
      setPhoneNumberError(redLine)
    }
    if (age === 0) {
      setAgeError(redLine)
    }

    try {
      await createLectureRegistration({
        variables: {
          lectureproductId: String(router.query.detail),
          createLectureRegistrationInput: {
            name,
            phoneNumber,
            job,
            selfIntroduction,
            preQuestion,
            age,
          },
        },
      })

      Modal.success({
        content: `${ProductData?.fetchLectureProduct?.classTitle}의 클래스 신청이 완료 되었습니다.`,
      })

      router.push(`/class/${router.query.detail}`)
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <ClassWriteUI
      ProductData={ProductData}
      UserData={UserData}
      onChangeName={onChangeName}
      nameError={nameError}
      onChangePhoneNumber={onChangePhoneNumber}
      phoneNumberError={phoneNumberError}
      onChangeAge={onChangeAge}
      ageError={ageError}
      onChangeJob={onChangeJob}
      jobError={jobError}
      onChangeSelfIntroduction={onChangeSelfIntroduction}
      selfIntroductionError={selfIntroductionError}
      onChangePreQuestion={onChangePreQuestion}
      preQuestionError={preQuestionError}
      onClickSubmitRegister={onClickSubmitRegister}
    />
  )
}
