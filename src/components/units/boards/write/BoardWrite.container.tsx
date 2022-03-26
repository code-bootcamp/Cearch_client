import { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import BoardWriteUI from './BoardWrite.presenter'
import { Theme, useTheme } from '@mui/material/styles'
import { SelectChangeEvent } from '@mui/material/Select'

const schema = yup.object().shape({
  title: yup
    .string()
    .min(2, '제목은 최소 2자 이상 입력해주세요')
    .required('이메일은 필수 입력 사항입니다.'),
  writer: yup.string().required('작성자를 입력해 주세요.'),
  password: yup
    .string()
    .min(4, '비밀번호는 최소 4자 이상 입력해야 합니다.')
    .max(15, '비밀번호는 15자를 초과할 수 없습니다.')
    .required('비밀번호는 필수 입력 사항입니다.'),
})
const categories = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'react',
  'react-native',
  'Python',
  'C',
  'C#',
  'PHP',
  'Node.js',
  'mySQL',
  'Docker',
  'Library',
  'dJango',
  'Ruby',
  'Android',
  'IOS',
  'mongoDB',
  'Oracle',
  'AWS',
  'GCP',
  'Azure',
  'vue.js',
  'GraphQL',
  'RestAPI',
]
function getStyles(name: string, personName: readonly string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  }
}
const ITEM_HEIGHT = 56
const ITEM_PADDING_TOP = 0
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 524,
    },
  },
}

export default function BoardWrite() {
  const { register, handleSubmit, formState, setValue } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  })
  const [contents, setContents] = useState('')
  const [category, setCategory] = useState<string[]>([])

  const theme = useTheme()
  const onClickSubmitBoard = () => {
    if (typeof window !== 'undefined') alert(contents)
  }

  const handleChange = (event: SelectChangeEvent<typeof category>) => {
    const {
      target: { value },
    } = event
    setCategory(typeof value === 'string' ? value.split(',') : value)
    console.log(category)
  }

  return (
    <BoardWriteUI
      theme={theme}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      contents={contents}
      setContents={setContents}
      onClickSubmitBoard={onClickSubmitBoard}
      category={category}
      handleChange={handleChange}
      MenuProps={MenuProps}
      categories={categories}
      getStyles={getStyles}
    />
  )
}
