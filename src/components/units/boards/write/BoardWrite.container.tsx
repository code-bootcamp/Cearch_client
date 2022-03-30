import { ChangeEvent, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import BoardWriteUI from './BoardWrite.presenter'
import { Theme, useTheme } from '@mui/material/styles'
import { SelectChangeEvent } from '@mui/material/Select'
import {
  CREATE_NON_MEMBERS_QT_BOARD,
  UPDATE_NON_MEMBERS_QT_BOARD,
  CREATE_QT_BOARD,
  UPDATE_QT_BOARD,
} from './BoardWrite.queries'
import { useMutation } from '@apollo/client'
import { useRouter } from 'next/router'
import {
  IMutation,
  IMutationCreateNonMembersQtBoardArgs,
  IMutationCreateQtBoardArgs,
  IMutationUpdateNonMembersQtBoardArgs,
  IMutationUpdateQtBoardArgs,
} from '../../../../commons/types/generated/types'
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

export default function BoardWrite(props) {
  const router = useRouter()
  const [createQtBoard] = useMutation<
    Pick<IMutation, 'createQtBoard'>,
    IMutationCreateQtBoardArgs
  >(CREATE_QT_BOARD)

  const [updateQtBoard] = useMutation<
    Pick<IMutation, 'updateQtBoard'>,
    IMutationUpdateQtBoardArgs
  >(UPDATE_QT_BOARD)

  const [createNonMembersQtBoard] = useMutation<
    Pick<IMutation, 'createNonMembersQtBoard'>,
    IMutationCreateNonMembersQtBoardArgs
  >(CREATE_NON_MEMBERS_QT_BOARD)

  const [updateNonMembersQtBoard] = useMutation<
    Pick<IMutation, 'updateNonMembersQtBoard'>,
    IMutationUpdateNonMembersQtBoardArgs
  >(UPDATE_NON_MEMBERS_QT_BOARD)

  const { register, handleSubmit, formState, setValue } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  })
  const [contents, setContents] = useState('')
  const [category, setCategory] = useState<string[]>([])
  const buttonRef = useRef<HTMLInputElement>(null)

  const theme = useTheme()

  const handleChange = (event: SelectChangeEvent<typeof category>) => {
    const {
      target: { value },
    } = event
    setCategory(typeof value === 'string' ? value.split(',') : value)
    console.log(category)
  }
  const submitBoard = async (input) => {
    try {
      const result = await createQtBoard({
        variables: {
          memberQtInput: {
            title: input.title,
            contents,
            qtTags: category,
          },
        },
      })
      alert('게시글 작성을 완료했습니다.')
      router.push(`/boards/${result?.data?.createQtBoard?.id}`)
    } catch (error) {
      alert(`${error.message}`)
    }
  }
  const updateBoard = async (input) => {
    try {
      const result = await updateQtBoard({
        variables: {
          postId: String(router.query.detail),
          memberQtInput: {
            title: input.title,
            contents,
            qtTags: category,
          },
        },
      })
      alert('게시글 작성을 완료했습니다.')
      router.push(`/boards/${result?.data?.updateQtBoard?.id}`)
    } catch (error) {
      alert(`${error.message}`)
    }
  }
  const submitBoardNonMember = async (input) => {
    try {
      const result = await createNonMembersQtBoard({
        variables: {
          nonMembersQtInput: {
            title: input.title,
            contents,
            qtTags: category,
            name: input.writer,
            password: input.password,
          },
        },
      })
      alert('게시글 작성을 완료했습니다.')
      router.push(`/boards/${result?.data?.createNonMembersQtBoard?.id}`)
    } catch (error) {
      alert(`${error.message}`)
    }
  }
  const onClickSubmit = () => {
    buttonRef.current?.click()
  }

  const updateBoardNonMember = async (input) => {
    try {
      const result = await updateNonMembersQtBoard({
        variables: {
          postId: String(router.query.detail),
          nonMembersQtInput: {
            title: input.title,
            contents,
            qtTags: category,
            name: input.writer,
            password: input.password,
          },
        },
      })
      alert('게시글 수정을 완료했습니다.')
      router.push(`/boards/${result?.data?.updateNonMembersQtBoard?.id}`)
    } catch (error) {
      alert(`${error.message}`)
    }
  }

  const onClickToList = () => {
    if (!props.isEdit) router.push('/boards')
    else router.push('/boards/[datail]')
  }

  return (
    <BoardWriteUI
      data={props.data}
      isEdit={props.isEdit}
      theme={theme}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      contents={contents}
      setContents={setContents}
      category={category}
      handleChange={handleChange}
      MenuProps={MenuProps}
      categories={categories}
      getStyles={getStyles}
      submitBoard={submitBoard}
      updateBoard={updateBoard}
      submitBoardNonMember={submitBoardNonMember}
      updateBoardNonMember={updateBoardNonMember}
      onClickToList={onClickToList}
      buttonRef={buttonRef}
      onClickSubmit={onClickSubmit}
    />
  )
}
