import { useRouter } from 'next/router'
import LoginUI from './Login.presenter'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { IFormValues } from './Login.types'
import { useMutation, useQuery } from '@apollo/client'
import { FETCH_USER, LOGIN } from './Login.queries'
import { GlobalContext } from '../../../../../pages/_app'
import { useContext } from 'react'
import { message, Modal } from 'antd'

const schema = yup.object().shape({
  email: yup.string().required('필수입력입니다.'),
  password: yup.string().required('필수입력입니다.'),
})

export default function Login() {
  const { setAccessToken } = useContext(GlobalContext)

  const router = useRouter()

  const [login] = useMutation(LOGIN)
  const { data: userData } = useQuery(FETCH_USER)

  const { register, formState, handleSubmit } = useForm<IFormValues>({
    mode: 'onChange',
    defaultValues: {},
    resolver: yupResolver(schema),
  })

  const onClickLogin = async (data) => {
    const { email, password } = data

    if (email !== '' && password !== '') {
      try {
        const result = await login({
          variables: {
            email,
            password,
          },
        })

        const accessToken = result.data?.login || ''
        if (setAccessToken) setAccessToken(accessToken)

        message.success(`${userData?.fetchUser.name}님 환영합니다`)

        router.push('/')
      } catch (error) {
        Modal.error({ content: error.message })
      }
    }
  }

  const onClickJoin = () => {
    router.push('/login/join')
  }
  const onClickSearchMembership = () => {
    router.push('/login/searchmembership/userconfirm')
  }

  return (
    <LoginUI
      onClickJoin={onClickJoin}
      onClickSearchMembership={onClickSearchMembership}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onClickLogin={onClickLogin}
    />
  )
}
