import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import JoinUI from './Join.presenter'
import * as yup from 'yup'
import { useMutation, useQuery } from '@apollo/client'
import {
  CREATE_USER,
  PHONE_CHECK_TOKEN,
  SEND_PHONE_NUMBER,
} from './Join.queries'
import { useRouter } from 'next/router'
import { useState } from 'react'
import {
  IMutation,
  IMutationCreateUserArgs,
  IMutationSendPhoneNumberArgs,
  IQuery,
  IQueryPhoneCheckTokenArgs,
} from '../../../../commons/types/generated/types'
import { IFormValues } from './Join.types'

const schema = yup.object().shape({
  name: yup.string().max(5).required('필수입력입니다.'),
  email: yup
    .string()
    .matches(
      /^\w[0-9a-zA-Z]+@\w[a-zA-Z]+\.[a-zA-Z]{2,3}$/,
      '이메일 형식에 올바르지 않습니다'
    )
    .required('필수입력입니다.'),
  phoneNumber: yup
    .string()
    .matches(
      /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/,
      '핸드폰 형식에 올바르지 않습니다'
    )
    .required('필수입력입니다.'),
  password: yup
    .string()
    .matches(
      /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{1,8}$/,
      '비밀번호는 영문, 숫자, 포함한 8자리 이내 입니다.'
    )
    .required('필수입력입니다.'),
  checkPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], '비밀번호가 일치하지 않습니다')
    .required('비밀번호가 일치하지 않습니다'),
  gender: yup.string().required('성별을 선택하지 않았습니다'),
})

export default function Join() {
  const router = useRouter()

  const [createUser] = useMutation<
    Pick<IMutation, 'createUser'>,
    IMutationCreateUserArgs
  >(CREATE_USER)
  const [sendPhoneNumber] = useMutation<
    Pick<IMutation, 'sendPhoneNumber'>,
    IMutationSendPhoneNumberArgs
  >(SEND_PHONE_NUMBER)

  const [phoneNumber, setPhoneNumber] = useState('')
  const [inputToken, setInputToken] = useState('')
  const [isActive, setIsActive] = useState(false)

  const { data: phoneCheckToken } = useQuery<
    Pick<IQuery, 'phoneCheckToken'>,
    IQueryPhoneCheckTokenArgs
  >(PHONE_CHECK_TOKEN, {
    variables: {
      phoneNumber,
      inputToken,
    },
  })

  const autoHyphen = (target) => {
    target.value = target.value
      .replace(/[^0-9]/, '')
      .replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`)
  }

  const { register, formState, handleSubmit } = useForm<IFormValues>({
    mode: 'onChange',
    defaultValues: {},
    resolver: yupResolver(schema),
  })

  const onClickCreateUser = async (data) => {
    const { email, name, gender, phoneNumber, password } = data

    if (email && password && name && phoneCheckToken) {
      setIsActive(true)
    }

    try {
      await createUser({
        variables: {
          userForm: {
            email,
            name,
            gender,
            phoneNumber,
            password,
          },
        },
      })

      router.push('/login/login')
    } catch (error) {
      console.log(error.message)
    }
  }

  const onclickSendPhoneNumber = async () => {
    try {
      await sendPhoneNumber({
        variables: {
          phoneNumber,
        },
      })
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <JoinUI
      autoHyphen={autoHyphen}
      onClickCreateUser={onClickCreateUser}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      setPhoneNumber={setPhoneNumber}
      onclickSendPhoneNumber={onclickSendPhoneNumber}
      setInputToken={setInputToken}
      isActive={isActive}
    />
  )
}
