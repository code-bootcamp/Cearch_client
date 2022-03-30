import AppliedClasses from './appliedClasses/AppliedClasses.container'
import CreatedClasses from './createdClasses/CreatedClasses.container'
import MyClassesUI from './MyClasses.presenter'
import PaidClasses from './paidClasses/PaidClasses.container'

import { useState } from 'react'

export default function MyClasses() {
  const [currentTab, setCurrentTab] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const menuArr = [
    { name: '수강신청한 클래스', content: <AppliedClasses /> },
    { name: '수강중인 클래스', content: <PaidClasses /> },
    { name: '내가 개설한 클래스', content: <CreatedClasses /> },
  ]

  const selectMenuHandler = (index: number) => {
    setCurrentTab(index)
  }

  const onClickModal = () => {
    setIsModalOpen((prev) => !prev)
    console.log(isModalOpen)
  }

  return (
    <MyClassesUI
      menuArr={menuArr}
      currentTab={currentTab}
      selectMenuHandler={selectMenuHandler}
      onClickModal={onClickModal}
      isModalOpen={isModalOpen}
    />
  )
}
