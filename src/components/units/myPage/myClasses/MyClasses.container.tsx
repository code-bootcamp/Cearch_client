import AppliedClasses from './appliedClasses/AppliedClasses.container'
import CreatedClasses from './createdClasses/CreatedClasses.container'
import MyClassesUI from './MyClasses.presenter'
import {} from './MyClasses.queries'
import PaidClasses from './paidClasses/PaidClasses.container'
import styled from '@emotion/styled' // 이따 뺄것
import { useState } from 'react'

const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const TabMenu = styled.div`
  display: flex;
  flex-direction: row;
`
const Menu = styled.div`
  border: 1px solid black;
`
const Contents = styled.div`
  width: 100%;
  border-top: 1px solid black;
`

export default function MyClasses() {
  const [currentTab, setCurrentTab] = useState(0)

  const menuArr = [
    { name: '수강신청한 클래스', content: <AppliedClasses /> },
    { name: '수강중인 클래스', content: <PaidClasses /> },
    { name: '내가 개설한 클래스', content: <CreatedClasses /> },
  ]

  const selectMenuHandler = (index: number) => {
    setCurrentTab(index)
  }

  return (
    <>
      <BodyWrapper>
        <TabMenu>
          {menuArr.map((el, index) => {
            return (
              <Menu key={index} onClick={() => selectMenuHandler(index)}>
                {el.name}
              </Menu>
            )
          })}
        </TabMenu>
        <Contents>{menuArr[currentTab].content}</Contents>
      </BodyWrapper>
      <MyClassesUI />
    </>
  )
}
