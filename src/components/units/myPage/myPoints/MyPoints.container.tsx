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

  // 포인트충전
  const onClickPayment = () => {
    const IMP = window.IMP // 생략 가능
    IMP.init('imp49910675') // Example: imp00000000

    // IMP.request_pay(param, callback) 결제창 호출
    IMP.request_pay(
      {
        // param
        pg: 'html5_inicis',
        pay_method: 'card',
        // merchant_uid: "ORD20180131-0000011",
        name: 'Cearch 포인트 충전',
        amount: deposit,
        buyer_email: 'codecamp@code.camp',
        buyer_name: '홍길동',
        buyer_tel: '999-9999-9999',
        buyer_addr: '서울특별시 강남구 신사동',
        buyer_postcode: '99999',
        // m_redirect_url: 모바일 결제시 돌아갈 주소!!
      },
      (rsp) => {
        // callback
        if (rsp.success) {
          // 결제 성공 시 로직,
          console.log(rsp)

          // 백엔드에 결제관련 데이터 넘겨주기
          // => 즉, 뮤테이션 실행하기!!!
          // ex, createPointTransactionsOfLoading

          // const result = createPointTransactionOfLoading({
          //   variables: { impUid: rsp.imp_uid },
          // });
          // console.log(result);
          alert('포인트 충전이 완료되었습니다.')
          window.location.reload()
        } else {
          // 결제 실패 시 로직,
        }
      }
    )
  }

  return (
    <>
      <MyPointsUI
        pointsMinus={pointsMinus}
        pointsPlus={pointsPlus}
        onChangeDeposit={onChangeDeposit}
        onChangeWithdraw={onChangeWithdraw}
        onClickPayment={onClickPayment}
      />
    </>
  )
}
