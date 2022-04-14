import { useQuery } from '@apollo/client'
import { useState } from 'react'
import CreatedClassesUI from './CreatedClasses.presenter'
import { FETCH_LECTURE_WITH_MENTOR } from './CreatedClasses.queries'

export default function CreatedClasses() {
  const { data: CreatedClassesData } = useQuery(FETCH_LECTURE_WITH_MENTOR)
  console.log('내가 개설한 클래스', CreatedClassesData)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const onClickModal = () => {
    setIsModalOpen((prev) => !prev)
  }

  return (
    <CreatedClassesUI
      CreatedClassesData={CreatedClassesData}
      onClickModal={onClickModal}
      isModalOpen={isModalOpen}
    />
  )
}
