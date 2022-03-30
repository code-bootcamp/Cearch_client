import { useState } from 'react'
import MyAllQA from './myAllQA/myAllQA'
import MyAnswers from './myAnswers/MyAnswers'
import MyQAsUI from './MyQAs.presenter'
import MyQuestions from './myQuestions/MyQuestions'

export default function MyQAs() {
  const [currentTab, setCurrentTab] = useState(0)

  const menuArr = [
    { name: 'ALL', content: <MyAllQA /> },
    { name: '질문', content: <MyQuestions /> },
    { name: '답변', content: <MyAnswers /> },
  ]

  const selectMenuHandler = (index: number) => {
    setCurrentTab(index)
  }

  return (
    <MyQAsUI
      menuArr={menuArr}
      currentTab={currentTab}
      selectMenuHandler={selectMenuHandler}
    />
  )
}
