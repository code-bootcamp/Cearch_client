import { useRef, useState } from 'react'
import PaidClassesUI from './PaidClasses.presenter'
import {} from './PaidClasses.queries'

export default function PaidClasses() {
  const paidClasses = [
    {
      image: '',
      category: ['typescript', 'javascript', 'html'],
      title: '[7일 단기 특강] 쌩기초부터 시작하는 타입스크립트 단기 완성반',
      price: 150000,
      date: '2022.03.21',
    },
    {
      image: '',
      category: ['typescript', 'javascript'],
      title: 'java부터 node.js까지 백엔드 개발의 A to Z',
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
