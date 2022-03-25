import { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import BoardWriteUI from './BoardWrite.presenter'

const schema = yup.object().shape({
  title: yup
    .string()
    .min(2, '제목은 최소 2자 이상 입력해주세요')
    .required('이메일은 필수 입력 사항입니다.'),
  // writer: yup.string().required('작성자를 입력해 주세요.'),
  // writer는 작성자 입력 input 생기면 다시 등록할 예정
  password: yup
    .string()
    .min(4, '비밀번호는 최소 4자 이상 입력해야 합니다.')
    .max(15, '비밀번호는 15자를 초과할 수 없습니다.')
    .required('비밀번호는 필수 입력 사항입니다.'),
})

export default function BoardWrite() {
  const { register, handleSubmit, formState, setValue } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  })
  const [contents, setContents] = useState('')

  const onClickSubmitBoard = () => {
    if (typeof window !== 'undefined') alert(contents)
  }

  return (
    <BoardWriteUI
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      contents={contents}
      setContents={setContents}
      onClickSubmitBoard={onClickSubmitBoard}
    />
  )
}
