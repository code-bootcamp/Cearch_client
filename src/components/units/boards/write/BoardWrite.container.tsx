import { ChangeEvent, useContext, useEffect, useRef, useState } from 'react'
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
  URL_TO_DB_QT,
} from './BoardWrite.queries'
import { useMutation, useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import {
  IMutation,
  IMutationCreateNonMembersQtBoardArgs,
  IMutationCreateQtBoardArgs,
  IMutationUpdateNonMembersQtBoardArgs,
  IMutationUpdateQtBoardArgs,
  IMutationUrlToDbQtArgs,
} from '../../../../commons/types/generated/types'
import { notification } from 'antd'
import { GlobalContext } from '../../../../../pages/_app'

const schema = yup.object().shape({
  title: yup
    .string()
    .min(2, '제목은 최소 2자 이상 입력해주세요')
    .required('제목은 필수 입력 사항입니다.'),
  writer: yup.string().required('작성자를 입력해 주세요.'),
  password: yup
    .string()
    .min(4, '비밀번호는 최소 4자 이상 입력해야 합니다.')
    .max(15, '비밀번호는 15자를 초과할 수 없습니다.')
    .required('비밀번호는 필수 입력 사항입니다.'),
})
const schema1 = yup.object().shape({
  title: yup
    .string()
    .min(2, '제목은 최소 2자 이상 입력해주세요')
    .required('제목은 필수 입력 사항입니다.'),
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
  const { accessToken } = useContext(GlobalContext)
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

  const [urlToDbQt] = useMutation<
    Pick<IMutation, 'urlToDbQt'>,
    IMutationUrlToDbQtArgs
  >(URL_TO_DB_QT)

  // const onClickUploadImage = async () => {
  //   try {
  //     const result = await urlToDbQt({
  //       variables: {
  //         filePaths:,
  //         qTId:,
  //       },
  //     })
  //     notification.success({
  //       message: '이미지 첨부를 완료했어요!',
  //       top: 80,
  //     })
  //   } catch (error) {
  //     notification.error({ message: `${error.message}`, top: 80 })
  //   }
  // }

  const { register, handleSubmit, formState, setValue } = useForm({
    resolver: accessToken ? yupResolver(schema1) : yupResolver(schema),
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
      notification.success({
        message: '게시글 작성을 완료했어요!',
        top: 80,
      })
      router.push(`/boards/${result?.data?.createQtBoard?.id}`)
    } catch (error) {
      notification.error({ message: `${error.message}`, top: 80 })
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
      notification.success({
        message: '게시글 수정을 완료했어요!',
        top: 80,
      })
      router.push(`/boards/${result?.data?.updateQtBoard?.id}`)
    } catch (error) {
      notification.error({ message: `${error.message}`, top: 80 })
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
      notification.success({
        message: '게시글 작성을 완료했어요!',
        top: 80,
      })
      router.push(`/boards/${result?.data?.createNonMembersQtBoard?.id}`)
    } catch (error) {
      notification.error({ message: `${error.message}`, top: 80 })
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
      notification.success({
        message: '게시글 수정을 완료했어요!',
        top: 80,
      })
      router.push(`/boards/${result?.data?.updateNonMembersQtBoard?.id}`)
    } catch (error) {
      notification.error({ message: `${error.message}`, top: 80 })
    }
  }

  const nonMemberWrite = (input) => {
    if (accessToken && props.isEdit) {
      updateBoard(input)
      return
    }
    if (accessToken) {
      submitBoard(input)
      return
    }
    if (!accessToken && props.isEdit) {
      updateBoardNonMember(input)
      return
    }

    submitBoardNonMember(input)
  }
  const onClickToList = () => {
    if (!props.isEdit) router.push('/boards')
    else router.push(`/boards/${String(router.query.detail)}`)
  }

  useEffect(() => {
    setValue('title', props.qtBoardEditData?.fetchQtBoard.title)
    setValue('writer', props.qtBoardEditData?.fetchQtBoard.name)
  }, [props.qtBoardEditData])
  return (
    <BoardWriteUI
      accessToken={accessToken}
      qtBoardEditData={props.qtBoardEditData}
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
      nonMemberWrite={nonMemberWrite}
    />
  )
}
