import { useRef, useState } from 'react'
import PaidClassesUI from './PaidClasses.presenter'
import {} from './PaidClasses.queries'

export default function PaidClasses() {
  const paidClasses = [
    {
      image: '',
      category: '카테고리',
      title: '클래스제목',
      date: '2022.03.21',
    },
    {
      image: '',
      category: '카테고리',
      title: '클래스제목',
      date: '2022.03.21',
    },
    {
      image: '',
      category: '카테고리',
      title: '클래스제목',
      date: '2022.03.21',
    },
    {
      image: '',
      category: '카테고리',
      title: '클래스제목',
      date: '2022.03.21',
    },
    {
      image: '',
      category: '카테고리',
      title: '클래스제목',
      date: '2022.03.21',
    },
  ]

  return <PaidClassesUI paidClasses={paidClasses} />
}
