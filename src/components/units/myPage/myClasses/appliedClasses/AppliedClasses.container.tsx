import { useMutation, useQuery } from '@apollo/client'
import { Modal } from 'antd'
import { useEffect, useState } from 'react'
import {
  IQuery,
  IQueryFetchlectureRegistrationsArgs,
} from '../../../../../commons/types/generated/types'
import AppliedClassesUI from './AppliedClasses.presenter'
import {
  CREATE_LECTURE_PAYMENT,
  FETCH_LECTURE_REGISTRATIONS,
} from './AppliedClasses.queries'

export default function AppliedClasses(props) {
  const { data } = useQuery(FETCH_LECTURE_REGISTRATIONS)
  console.log('수강신청한클래스:', data)

  const [createlecturePayment] = useMutation(CREATE_LECTURE_PAYMENT)

  const [lectureId, setLectureId] = useState('')

  const onClickPayment = async () => {
    try {
      const PaymentResult = await createlecturePayment({
        variables: {
          lectureRegistrationId: lectureId,
        },
      })
      Modal.success({ content: '강의 결제를 성공하였습니다.' })
      props.userInfoRefetch()
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <AppliedClassesUI
      data={data}
      setLectureId={setLectureId}
      onClickPayment={onClickPayment}
    />
  )
}
