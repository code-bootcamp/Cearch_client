import { useRouter } from 'next/router'
import LoginUI from './Login.presenter'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { IFormValues } from './Login.types'
import { useMutation } from '@apollo/client'
import { LOGIN } from './Login.queries'
import { GlobalContext } from '../../../../../pages/_app'
import { useContext } from 'react'

const schema = yup.object().shape({
  email: yup.string().required('필수입력입니다.'),
  password: yup.string().required('필수입력입니다.'),
})

export default function Login() {
  const router = useRouter()

  const [login] = useMutation(LOGIN)
  const { setAccessToken } = useContext(GlobalContext)

  const { register, formState, handleSubmit } = useForm<IFormValues>({
    mode: 'onChange',
    defaultValues: {},
    resolver: yupResolver(schema),
  })

  const onClickLogin = async (data) => {
    const { email, password } = data

    if (email && password) {
      try {
        const result = await login({
          variables: {
            email,
            password,
          },
        })

        const accessToken = result.data?.login.accessToken || ''
        if (setAccessToken) setAccessToken(accessToken)
      } catch (error) {
        console.log(error.message)
      }
    } else {
      console.log('이메일과 비밀번호를 올바르게 입력해주세요')
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
