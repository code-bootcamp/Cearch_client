import styled from '@emotion/styled'
import { breakPoints } from '../../../../commons/styles/media'
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined'

import { gql, useMutation } from '@apollo/client'
import {
  IMutation,
  IMutationUpdatePasswordArgs,
} from '../../../../commons/types/generated/types'
import * as yup from 'yup'
import { useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
const UPDATE_PASSWORD = gql`
  mutation updatePassword($email: String!, $newPassword: String!) {
    updatePassword(email: $email, newPassword: $newPassword) {
      id
      email
    }
  }
`

const Wrapper = styled.div`
  width: 957px;
  padding: 80px 0px 80px 0px;
  background-color: #f2f2f2;
  border: 0.7507px solid #c4c4c4;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;
  @media ${breakPoints.tablet} {
    width: 100%;
    background-color: white;
    padding: 8% 10%;
    box-shadow: none;
  }
  @media ${breakPoints.mobile} {
    width: 100%;
    background-color: white;
    padding: 8% 0%;
    box-shadow: none;
  }
`
const Contents = styled.div`
  display: flex;
  flex-direction: column;
  @media ${breakPoints.mobile} {
    width: 80%;
  }
`

const TitleLabel = styled.div`
  > div {
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    margin-bottom: 70px;
  }
  display: flex;
  justify-content: space-between;
`

const InputLabel = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #333333;
  margin-bottom: 10px;
`

const Input = styled.input`
  width: 524px;
  height: 56px;
  background-color: #ffffff;
  border: 1px solid #9d9d9d;
  border-radius: 10px;
  margin-bottom: 5px;
  @media ${breakPoints.mobile} {
    width: 100%;
    height: 40px;
  }
`

const Row = styled.div`
  height: 120px;
`

const Button = styled.button`
  margin-top: 55px;
  width: 524px;
  height: 67px;
  background-color: #ffa24b;
  border-radius: 10px;
  border: none;
  font-weight: 700;
  font-size: 24px;
  color: #ffffff;
  @media ${breakPoints.mobile} {
    width: 100%;
  }
`

const CancelButton = styled.div`
  :hover {
    cursor: pointer;
  }
`

const Error = styled.div`
  font-size: 14px;
  color: #ffa24b;
  text-align: center;
`

const schema = yup.object().shape({
  newPassword: yup
    .string()
    .matches(
      /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{1,8}$/,
      '비밀번호는 영문, 숫자, 포함한 8자리 이내 입니다.'
    )
    .required('필수입력입니다.'),
  checkPassword: yup
    .string()
    .oneOf([yup.ref('newPassword'), null], '비밀번호가 일치하지 않습니다')
    .required('비밀번호가 일치하지 않습니다'),
})

// 임시로 이메일은 마이 인포메이션 페치유저에서 가져왔음. 수정후 프롭스 내려보낸 것 꼭 지울 것.
export default function PasswordModal(props) {
  const [updatePassword] = useMutation<
    Pick<IMutation, 'updatePassword'>,
    IMutationUpdatePasswordArgs
  >(UPDATE_PASSWORD)

  const { register, formState, handleSubmit } = useForm({
    mode: 'onChange',
    defaultValues: {},
    resolver: yupResolver(schema),
  })

  const onClickUpdatePassword = async (data) => {
    const { newPassword } = data

    try {
      await updatePassword({
        variables: {
          email: props.userInfoData.fetchUser.email,
          newPassword,
        },
      })
      alert('비밀번호 수정이 완료되었습니다.')
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <form onSubmit={handleSubmit(onClickUpdatePassword)}>
      <Wrapper>
        <Contents>
          <TitleLabel>
            <div>비밀번호 변경</div>
            <CancelButton>
              <CancelOutlinedIcon onClick={props.toggle} />
            </CancelButton>
          </TitleLabel>
          <Row>
            <InputLabel>현재 비밀번호 입력</InputLabel>
            <Input type="password" />
          </Row>
          <Row>
            <InputLabel>새 비밀번호 입력</InputLabel>
            <Input type="password" {...register('newPassword')} />
            <Error>{formState.errors.newPassword?.message}</Error>
          </Row>
          <Row>
            <InputLabel>새 비밀번호 확인</InputLabel>
            <Input type="password" {...register('checkPassword')} />
            <Error>{formState.errors.checkPassword?.message}</Error>
          </Row>
          <Button>비밀번호 변경하기</Button>
        </Contents>
      </Wrapper>
    </form>
  )
}
