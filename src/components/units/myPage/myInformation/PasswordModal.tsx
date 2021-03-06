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
      '??????????????? ??????, ??????, ????????? 8?????? ?????? ?????????.'
    )
    .required('?????????????????????.'),
  checkPassword: yup
    .string()
    .oneOf([yup.ref('newPassword'), null], '??????????????? ???????????? ????????????')
    .required('??????????????? ???????????? ????????????'),
})

// ????????? ???????????? ?????? ??????????????? ?????????????????? ????????????. ????????? ????????? ???????????? ??? ??? ?????? ???.
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
      alert('???????????? ????????? ?????????????????????.')
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <form onSubmit={handleSubmit(onClickUpdatePassword)}>
      <Wrapper>
        <Contents>
          <TitleLabel>
            <div>???????????? ??????</div>
            <CancelButton>
              <CancelOutlinedIcon onClick={props.toggle} />
            </CancelButton>
          </TitleLabel>
          <Row>
            <InputLabel>?????? ???????????? ??????</InputLabel>
            <Input type="password" />
          </Row>
          <Row>
            <InputLabel>??? ???????????? ??????</InputLabel>
            <Input type="password" {...register('newPassword')} />
            <Error>{formState.errors.newPassword?.message}</Error>
          </Row>
          <Row>
            <InputLabel>??? ???????????? ??????</InputLabel>
            <Input type="password" {...register('checkPassword')} />
            <Error>{formState.errors.checkPassword?.message}</Error>
          </Row>
          <Button>???????????? ????????????</Button>
        </Contents>
      </Wrapper>
    </form>
  )
}
