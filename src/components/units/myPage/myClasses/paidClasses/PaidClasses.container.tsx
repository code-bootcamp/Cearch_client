import { useQuery } from '@apollo/client'
import { useRef, useState } from 'react'
import {
  IQuery,
  IQueryFetchlectureOrderArgs,
} from '../../../../../commons/types/generated/types'
import PaidClassesUI from './PaidClasses.presenter'
import { FETCH_LECTURE_ORDERS } from './PaidClasses.queries'

export default function PaidClasses() {
  const { data: PaidClassesData } = useQuery<
    Pick<IQuery, 'fetchlectureOrders'>,
    IQueryFetchlectureOrderArgs
  >(FETCH_LECTURE_ORDERS)
  console.log(PaidClassesData)

  const inProgressClasses = PaidClassesData?.fetchlectureOrders.filter(
    (el) => el.order.lecproduct.classOpen === false
  )
  const closedsClasses = PaidClassesData?.fetchlectureOrders.filter(
    (el) => el.order.lecproduct.classOpen === true
  )

  const paidClasses = [
    {
      image: '',
      category: ['typescript', 'javascript', 'html'],
      title: '[7일 단기 특강] 쌩기초부터 시작하는 타입스크립트 단기 완성반',
      price: 150000,
      date: '2022.03.21',
      id: '0f822e0d-54ca-4234-8dc9-42618401ced1',
    },
    {
      image: '',
      category: ['typescript', 'javascript'],
      title: 'java부터 node.js까지 백엔드 개발의 A to Z',
      price: 150000,
      date: '2022.03.21',
      id: '0f822e0d-54ca-4234-8dc9-42618401ced1',
    },
    {
      image: '',
      category: ['typescript', 'javascript'],
      title: '[7일 단기 특강] 쌩기초부터 시작하는 타입스크립트 단기 완성반',
      price: 150000,
      date: '2022.03.21',
    },
    {
      image: '',
      category: ['typescript', 'javascript'],
      title: '[7일 단기 특강] 쌩기초부터 시작하는 타입스크립트 단기 완성반',
      price: 150000,
      date: '2022.03.21',
    },
    {
      image: '',
      category: ['typescript', 'javascript'],
      title: '[7일 단기 특강] 쌩기초부터 시작하는 타입스크립트 단기 완성반',
      price: 150000,
      date: '2022.03.21',
    },
  ]

  return <PaidClassesUI paidClasses={paidClasses} />
}
