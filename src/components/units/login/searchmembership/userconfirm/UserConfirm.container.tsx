import { useLazyQuery, useMutation, useQuery } from '@apollo/client'
import { message, Modal } from 'antd'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import PasswordReset from '../passwordreset/PasswordReset.container'
import UserConfirmUI from './UserConfirm.presenter'
import {
  EMAIL_CHECK_TOKEN,
  IS_CHECK_EMAIL,
  SEND_EMAIL_TOKEN,
} from './UserConfirm.queries'

export default function UserConfirm() {
  const router = useRouter()

  const [checkEmail, setCheckEmail] = useState(false)
  const [errorEmail, setErrorEmail] = useState('')
  const [inputToken, setInputToken] = useState('')
  const [email, setEmail] = useState('')
  const [isActive, setIsActive] = useState(false)

  const [sendEmailToken] = useMutation(SEND_EMAIL_TOKEN)
  const [emailCheckToken] = useLazyQuery(EMAIL_CHECK_TOKEN)
  const [isCheckEmail] = useLazyQuery(IS_CHECK_EMAIL)

  const [changePage, setChangePage] = useState(false)

  const onChangeEmail = (e) => {
    setEmail(e.target.value)
  }
  const onChangeEmailToken = (e) => {
    setInputToken(e.target.value)
  }

  const onClickSendEmail = async () => {
    const checkEmail =
      /^([\w\.\_\-])*[a-zA-Z0-9]+([\w\.\_\-])*([a-zA-Z0-9])+([\w\.\_\-])+@([a-zA-Z0-9]+\.)+[a-zA-Z0-9]{2,8}$/
    if (checkEmail.test(email)) {
      try {
        await sendEmailToken({
          variables: {
            email,
          },
        })
        Modal.success({ content: '이메일이 발송되었습니다.' })
      } catch (error) {
        Modal.error(error.message)
      }
    } else {
      setErrorEmail('(.-_을 포함) 이메일 형식에 올바르지 않습니다')
    }
  }

  const onClickEmailCheck = async () => {
    const data = await emailCheckToken({
      variables: {
        email,
        inputToken,
      },
    })

    if (data.data.emailCheckToken === true) {
      Modal.success({ content: '인증이 완료되었습니다.' })
      setCheckEmail(true)
    } else {
      Modal.error({ content: '인증번호가 일치하지 않습니다.' })
    }
  }

  useEffect(() => {
    if (email && inputToken && checkEmail) {
      setIsActive(true)
    }
  }, [checkEmail])

  const onClickNextButton = async () => {
    if (email && inputToken && checkEmail) {
      const data = await isCheckEmail({
        variables: {
          email,
        },
      })

      if (data.data.isCheckEmail) {
        // router.push('/login/searchmembership/passwordreset')
        setChangePage(true)
      } else {
        router.push('/login/searchmembership/userconfirm/errorUser')
      }
    }
  }

  return (
    <>
      {!changePage ? (
        <UserConfirmUI
          onClickNextButton={onClickNextButton}
          onChangeEmail={onChangeEmail}
          errorEmail={errorEmail}
          onClickSendEmail={onClickSendEmail}
          onChangeEmailToken={onChangeEmailToken}
          isActive={isActive}
          onClickEmailCheck={onClickEmailCheck}
        />
      ) : (
        <PasswordReset email={email} />
      )}
    </>
  )
}
