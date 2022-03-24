import { useState } from 'react'
import MyPointsUI from './MyPoints.presenter'
import {} from './MyPoints.queries'

export default function MyPoints() {
  const [deposit, setDeposit] = useState(0)
  const [withdraw, setWithdraw] = useState(0)

  const onChangeDeposit = (event: SelectChangeEvent) => {
    setDeposit(event.target.value)
  }

  const onChangeWithdraw = (event: SelectChangeEvent) => {
    setWithdraw(event.target.value)
  }

  // prettier-ignore
  const pointsMinus = [
    {date: '2022-03-23', division:'클래스 수강신청', detail:'초보자도 할 수 있는 html/css/javascript 완전정복 패키지' , price:150000 },
    {date: '2022-03-23', division:'출금', detail:'포인트 출금' , price:150000 },
    {date: '2022-03-23', division:'출금', detail:'포인트 출금' , price:150000 },
    {date: '2022-03-23', division:'클래스 수강신청', detail:'떠먹여주는 리액트 기초부터 실무까지' , price:150000 },
    {date: '2022-03-23', division:'클래스 수강신청', detail:'타입스크립트 단기 마스터 특강' , price:60000 },
    {date: '2022-03-23', division:'출금', detail:'포인트 출금' , price:150000 },
    {date: '2022-03-23', division:'출금', detail:'포인트 출금' , price:150000 },
    {date: '2022-03-23', division:'출금', detail:'포인트 출금' , price:150000 },
    {date: '2022-03-23', division:'클래스 수강신청', detail:'떠먹여주는 리액트 기초부터 실무까지' , price:150000 },
    {date: '2022-03-23', division:'클래스 수강신청', detail:'타입스크립트 단기 마스터 특강' , price:60000 }
  ]

  // prettier-ignore
  const pointsPlus = [
    {date: '2022-03-23', division:'입금', detail:'초보자도 할 수 있는 html/css/javascript 완전정복 패키지' , price:150000 },
    {date: '2022-03-23', division:'충전', detail:'포인트 충전' , price:150000 },
    {date: '2022-03-23', division:'입금', detail:'떠먹여주는 리액트 기초부터 실무까지' , price:150000 },
    {date: '2022-03-23', division:'입금', detail:'타입스크립트 단기 마스터 특강' , price:60000 },
    {date: '2022-03-23', division:'획득', detail:'답변 채택' , price:150000 },
    {date: '2022-03-23', division:'획득', detail:'답변 채택' , price:150000 },
    {date: '2022-03-23', division:'출금', detail:'답변 채택' , price:150000 },
    {date: '2022-03-23', division:'입금', detail:'떠먹여주는 리액트 기초부터 실무까지' , price:150000 },
    {date: '2022-03-23', division:'입금', detail:'타입스크립트 단기 마스터 특강' , price:60000 }
  ]

  return (
    <MyPointsUI
      pointsMinus={pointsMinus}
      pointsPlus={pointsPlus}
      onChangeDeposit={onChangeDeposit}
      onChangeWithdraw={onChangeWithdraw}
    />
  )
}
