import { useMutation } from '@apollo/client'
import { useRouter } from 'next/router'
import { ChangeEvent, useState } from 'react'
import {
  IMutation,
  IMutationCreateNoticeArgs,
  IMutationUpdateNoticeArgs,
} from '../../../../../commons/types/generated/types'
import NoteWriteUI from './NoteWrite.presenter'
import { CREATE_NOTICE, UPDATE_NOTICE } from './NoteWrite.queries'

export default function NoteWrite(props) {
  const router = useRouter()
  const [createNotice] = useMutation<
    Pick<IMutation, 'createNotice'>,
    IMutationCreateNoticeArgs
  >(CREATE_NOTICE)
  const [updateNotice] = useMutation<
    Pick<IMutation, 'updateNotice'>,
    IMutationUpdateNoticeArgs
  >(UPDATE_NOTICE)
  const [title, setTitle] = useState('')
  const [contents, setContents] = useState('')

  const submitNotice = async () => {
    const result = await createNotice({
      variables: {
        title,
        contents,
      },
    })
    // console.log(result);
    router.push(`/admin/${result?.data?.createNotice?.id}`)
  }
  const editNotice = async () => {
    const result = await updateNotice({
      variables: {
        postId: String(router.query.detail),
        title,
        contents,
      },
    })
    // console.log(result);
    router.push(`/admin/${result?.data?.updateNotice?.id}`)
  }

  const onChangeNoticeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }

  return (
    <NoteWriteUI
      onClickNoteList={props.onClickNoteList}
      submitNotice={submitNotice}
      onChangeNoticeTitle={onChangeNoticeTitle}
      contents={contents}
      setContents={setContents}
    />
  )
}
