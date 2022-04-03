import MyPageUI from './MyPage.presenter'
import { FETCH_USER } from './MyPage.queries'
import { useState } from 'react'
import MyQAs from './myQAs/MyQAs.container'
import MyFollowings from './myFollowings/MyFollowings.container'
import MyPoints from './myPoints/MyPoints.container'
import MyClasses from './myClasses/MyClasses.container'
import MyInformation from './myInformation/MyInformation.container'
import { useQuery } from '@apollo/client'
import { IQuery, IUser } from '../../../commons/types/generated/types'

export default function MyPage() {
  const [currentTab, setCurrentTab] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  let userInterest = []

  const selectMenuHandler = (index: number) => {
    setCurrentTab(index)
  }

  const onClickModal = () => {
    setIsModalOpen((prev) => !prev)
    console.log(isModalOpen)
  }

  const { data: userInfoData, refetch: userInfoRefetch } = useQuery<
    Pick<IQuery, 'fetchUser'>,
    IUser
  >(FETCH_USER)
  console.log('userInfoData: ', userInfoData)

  if (userInfoData?.fetchUser?.interest) {
    userInterest = [
      userInfoData?.fetchUser?.interest[0]?.linkedToLectureProductCategory
        ?.categoryname,
      userInfoData?.fetchUser?.interest[1]?.linkedToLectureProductCategory
        ?.categoryname,
    ]
  }
  const menuArr = [
    { name: '나의 질문답변', content: <MyQAs /> },
    { name: '나의 클래스', content: <MyClasses /> },
    { name: '나의 팔로우', content: <MyFollowings /> },
    {
      name: '나의 포인트',
      content: (
        <MyPoints
          userInfoData={userInfoData}
          userInfoRefetch={userInfoRefetch}
        />
      ),
    },
    {
      name: '',
      content: (
        <MyInformation
          userInfoData={userInfoData}
          userInfoRefetch={userInfoRefetch}
          userInterest={userInterest}
        />
      ),
    },
  ]
  return (
    <MyPageUI
      menuArr={menuArr}
      currentTab={currentTab}
      selectMenuHandler={selectMenuHandler}
      isModalOpen={isModalOpen}
      onClickModal={onClickModal}
      userInfoData={userInfoData}
      userInterest={userInterest}
    />
  )
}
