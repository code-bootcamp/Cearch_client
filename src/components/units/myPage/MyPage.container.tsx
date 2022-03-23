import MyPageUI from './MyPage.presenter'
import {} from './MyPage.queries'
import { useState } from 'react'
import MyQAs from './myQAs/MyQAs.container'
import MyFollowings from './myFollowings/MyFollowings.container'
import MyPoints from './myPoints/MyPoints.container'
import MyClasses from './myClasses/MyClasses.container'

export default function MyPage() {
  const [currentTab, setCurrentTab] = useState(0)

  const menuArr = [
    { name: '나의질문답변', content: <MyQAs /> },
    { name: '나의클래스', content: <MyClasses /> },
    { name: '팔로우', content: <MyFollowings /> },
    { name: '나의포인트', content: <MyPoints /> },
  ]

  const selectMenuHandler = (index: number) => {
    setCurrentTab(index)
  }

  return (
    <MyPageUI
      menuArr={menuArr}
      currentTab={currentTab}
      selectMenuHandler={selectMenuHandler}
    />
  )
}
