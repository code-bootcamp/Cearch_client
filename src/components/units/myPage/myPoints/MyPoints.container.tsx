import { useMutation, useQuery } from '@apollo/client'

import { SelectChangeEvent } from '@mui/material'
import { Modal } from 'antd'
import { useState } from 'react'
import {
  IMutation,
  IMutationChargePointArgs,
  IQuery,
} from '../../../../commons/types/generated/types'
import MyPointsUI from './MyPoints.presenter'
import {
  FETCH_MY_MINUS_WALLET,
  FETCH_MY_PLUS_WALLET,
  CHARGE_POINT,
} from './MyPoints.queries'
export default function MyPoints(props) {
  const [deposit, setDeposit] = useState<number>(0)
  const [withdraw, setWithdraw] = useState<number>(0)
  const [isModalVisible, setIsModalVisible] = useState(false)

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  const onChangeDeposit = (event: SelectChangeEvent) => {
    setDeposit(Number(event.target.value))
  }

  const onChangeWithdraw = (event: SelectChangeEvent) => {
    setWithdraw(Number(event.target.value))
  }

  const { data: PointMinusData } = useQuery<Pick<IQuery, 'fetchMyMinusWallet'>>(
    FETCH_MY_MINUS_WALLET
  )
  console.log('PointMinusData: ', PointMinusData)

  const { data: PointPlusData, refetch: plusWalletRefetch } =
    useQuery<Pick<IQuery, 'fetchMyPlusWallet'>>(FETCH_MY_PLUS_WALLET)
  console.log('PointPlusData: ', PointPlusData)

  const [chargePoint] = useMutation<
    Pick<IMutation, 'chargePoint'>,
    IMutationChargePointArgs
  >(CHARGE_POINT)

  // 포인트충전
  const onClickPayment = () => {
    const IMP = window.IMP // 생략 가능
    IMP.init('imp13681190') // Example: imp00000000

    // IMP.request_pay(param, callback) 결제창 호출
    IMP.request_pay(
      {
        // param
        pg: 'html5_inicis',
        pay_method: 'card',
        // merchant_uid: "ORD20180131-0000011",
        name: 'CEARCH 포인트 충전',
        amount: deposit,
        buyer_email: props.userInfoData?.fetchUser.email,
        buyer_name: props.userInfoData?.fetchUser.name,
        buyer_tel: props.userInfoData?.fetchUser.phoneNumber,
        buyer_addr: '서울특별시 강남구 신사동',
        buyer_postcode: '99999',
        m_redirect_url: 'http://localhost:3001/mypage',
      },
      async (rsp) => {
        // callback
        if (rsp.success) {
          // 결제 성공
          const result = await chargePoint({
            variables: {
              impUid: rsp.imp_uid,
              myamount: rsp.paid_amount,
            },
          })
          Modal.success({
            content: '포인트를 성공적으로 충전했어요!',
          })
          console.log(result)
          props.userInfoRefetch()
          plusWalletRefetch()
        } else {
          Modal.error({
            content: '포인트 충전에 실패했습니다.',
          })
        }
      }
    )
  }

  return (
    <>
      <MyPointsUI
        PointMinusData={PointMinusData}
        PointPlusData={PointPlusData}
        onChangeDeposit={onChangeDeposit}
        onChangeWithdraw={onChangeWithdraw}
        onClickPayment={onClickPayment}
        showModal={showModal}
        handleCancel={handleCancel}
        isModalVisible={isModalVisible}
      />
    </>
  )
}
