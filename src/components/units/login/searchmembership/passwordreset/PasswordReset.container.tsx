import PasswordResetUI from './PasswordReset.presenter'
import { UPDATE_PASSWORD } from './PasswordReset.queries'
import { useMutation } from '@apollo/client'
import { Modal } from 'antd'
import { useRouter } from 'next/router'
import { useState } from 'react'

export default function PasswordReset(props) {
  const router = useRouter()

  const [updatePassword] = useMutation(UPDATE_PASSWORD)

  const [newPassword, setNewPassword] = useState('')
  const [errorNewPassword, setErrorNewPassword] = useState('')
  const [checkNewPassword, setCheckNewPassword] = useState('')
  const [errorCheckNewPassword, setErrorCheckNewPassword] = useState('')

  const onChangeNewPassword = (e) => {
    setNewPassword(e.target.value)
    const checkPassword = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{1,8}$/
    if (checkPassword.test(e.target.value)) {
      setErrorNewPassword('')
    } else {
      setErrorNewPassword('비밀번호는 영문, 숫자, 포함한 8자리 이내 입니다.')
    }
  }
  const onChangeCheckNewPassword = (e) => {
    setCheckNewPassword(e.target.value)
    if (e.target.value !== newPassword) {
      setErrorCheckNewPassword('비밀번호가 일치하지 않습니다')
    } else {
      setErrorCheckNewPassword('')
    }
  }

  const onClickUpdatePassword = async () => {
    if (newPassword && checkNewPassword) {
      try {
        const result = await updatePassword({
          variables: {
            email: props.email,
            newPassword,
          },
        })
        console.log(result)
        router.push('/login/login')
        Modal.success({ content: '비밀번호 변경이 완료되었습니다.' })
      } catch (error) {
        Modal.error({ content: error.message })
      }
    }
  }

  return (
    <PasswordResetUI
      errorNewPassword={errorNewPassword}
      onChangeNewPassword={onChangeNewPassword}
      errorCheckNewPassword={errorCheckNewPassword}
      onChangeCheckNewPassword={onChangeCheckNewPassword}
      onClickUpdatePassword={onClickUpdatePassword}
    />
  )
}
