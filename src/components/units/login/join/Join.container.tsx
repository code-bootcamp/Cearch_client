import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import JoinUI from './Join.presenter'
import { useLazyQuery, useMutation, useQuery } from '@apollo/client'
import {
  CREATE_USER,
  PHONE_CHECK_TOKEN,
  SEND_PHONE_NUMBER,
} from './Join.queries'
import { useRouter } from 'next/router'
import { ChangeEvent, useEffect, useState } from 'react'
import {
  IMutation,
  IMutationCreateUserArgs,
  IMutationSendPhoneNumberArgs,
  IQuery,
  IQueryPhoneCheckTokenArgs,
} from '../../../../commons/types/generated/types'
// import { IFormValues } from './Join.types'
import { message, Modal } from 'antd'

export interface IFormValues {
  email?: string
  name?: string
  phoneNumber?: string
  password?: string
  checkPassword?: string
  gender?: string
}

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(/^[가-힣]+$/)
    .required('필수입력입니다.'),
  email: yup
    .string()
    .matches(
      /^([\w\.\_\-])*[a-zA-Z0-9]+([\w\.\_\-])*([a-zA-Z0-9])+([\w\.\_\-])+@([a-zA-Z0-9]+\.)+[a-zA-Z0-9]{2,8}$/,
      '(.-_을 포함)이메일 형식에 올바르지 않습니다'
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

  const [phoneCheckToken] = useLazyQuery<
    Pick<IQuery, 'phoneCheckToken'>,
    IQueryPhoneCheckTokenArgs
  >(PHONE_CHECK_TOKEN)

  const [phoneNumber, setPhoneNumber] = useState('')
  const [inputToken, setInputToken] = useState('')
  const [trueToken, setTrueToken] = useState(false)
  const [isActive, setIsActive] = useState(false)

  /* 
  useEffect(() => {
    if (inputValue.length === 10) {
      setInputValue(inputValue.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3'));
    }
    if (inputValue.length === 13) {
      setInputValue(inputValue.replace(/-/g, '').replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'));
    }
  }, [inputValue]); */

  const { register, formState, handleSubmit } = useForm<IFormValues>({
    mode: 'onChange',
    defaultValues: {},
    resolver: yupResolver(schema),
  })

  const onChangePhoneNumber = (e: ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value)
  }
  const onChangeToken = (e: ChangeEvent<HTMLInputElement>) => {
    setInputToken(e.target.value)
  }

  const onclickSendPhoneNumber = async () => {
    console.log(phoneNumber)

    const checkNumber = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/
    if (checkNumber.test(phoneNumber)) {
      try {
        const result = await sendPhoneNumber({
          variables: {
            phoneNumber,
          },
        })

        Modal.success({
          content: '인증번호가 발송되었습니다.',
        })
      } catch (error) {
        console.log(error.message)
      }
    }
  }

  const onClickTokenCheck = async () => {
    const data = await phoneCheckToken({
      variables: {
        phoneNumber,
        inputToken,
      },
    })

    if (data.data.phoneCheckToken) {
      Modal.success({
        content: '인증이 완료되었습니다.',
      })
      setTrueToken(true)
    } else {
      Modal.error({
        content: '인증번호가 일치하지 않습니다.',
      })
    }
  }

  const onClickCreateUser = async (data) => {
    const { email, name, gender, phoneNumber, password } = data

    if (email && password && name && inputToken && trueToken) {
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

      Modal.success({
        content: '회원가입이 완료되었습니다.',
      })
      router.push('/login/login')
    } catch (error) {
      message.error(error.message)
    }
  }

  return (
    <JoinUI
      onClickCreateUser={onClickCreateUser}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onclickSendPhoneNumber={onclickSendPhoneNumber}
      onChangePhoneNumber={onChangePhoneNumber}
      onChangeToken={onChangeToken}
      onClickTokenCheck={onClickTokenCheck}
      isActive={isActive}
    />
  )
}
