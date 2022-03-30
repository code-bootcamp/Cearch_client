import MyPageUI from './MyPage.presenter'
import { FETCH_USER } from './MyPage.queries'
import { useState } from 'react'
import MyQAs from './myQAs/MyQAs.container'
import MyFollowings from './myFollowings/MyFollowings.container'
import MyPoints from './myPoints/MyPoints.container'
import MyClasses from './myClasses/MyClasses.container'
import MyInformation from './myInformation/MyInformation.container'
import { useQuery } from '@apollo/client'
import { IQuery } from '../../../commons/types/generated/types'

export default function MyPage() {
  const [currentTab, setCurrentTab] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const menuArr = [
    { name: '나의 질문답변', content: <MyQAs /> },
    { name: '나의 클래스', content: <MyClasses /> },
    { name: '나의 팔로우', content: <MyFollowings /> },
    { name: '나의 포인트', content: <MyPoints /> },
    { name: '', content: <MyInformation /> },
  ]

  const selectMenuHandler = (index: number) => {
    setCurrentTab(index)
  }

  const onClickModal = () => {
    setIsModalOpen((prev) => !prev)
    console.log(isModalOpen)
  }

  const { data: userInfoData } = useQuery<Pick<IQuery, 'fetchUser'>>(FETCH_USER)
  console.log('userInfoData: ', userInfoData)

  return (
    <MyPageUI
      menuArr={menuArr}
      currentTab={currentTab}
      selectMenuHandler={selectMenuHandler}
      isModalOpen={isModalOpen}
      onClickModal={onClickModal}
      userInfoData={userInfoData}
    />
  )
}
