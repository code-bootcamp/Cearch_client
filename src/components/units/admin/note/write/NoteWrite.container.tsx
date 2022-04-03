import { useMutation } from '@apollo/client'
import { useRouter } from 'next/router'
import { ChangeEvent, useEffect, useState } from 'react'
import {
  IMutation,
  IMutationCreateNoticeArgs,
  IMutationUpdateNoticeArgs,
} from '../../../../../commons/types/generated/types'
import NoteWriteUI from './NoteWrite.presenter'
import { CREATE_NOTICE, UPDATE_NOTICE } from './NoteWrite.queries'
import { IVariables } from '../detail/NoteDetail.types'

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
    router.push(`/admin/note/${result?.data?.createNotice?.id}`)
  }

  const editNotice = async () => {
    try {
      const variables: IVariables = {}
      if (title) variables.title = title
      if (contents) variables.contents = contents

      await updateNotice({
        variables: {
          postId: String(router.query.detail),
          title,
          contents,
        },
      })
      // console.log(result);
      alert('수정 완료')
      router
        .push(`/admin/note/${router.query.detail}`)
        .then(() => location.reload())
    } catch (error) {
      alert(`${error.message}`)
    }
  }

  const onChangeNoticeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }
  useEffect(() => {
    if (props.noticeData?.fetchNotice.title) {
      setTitle(props.noticeData?.fetchNotice.title)
    }
  }, [props.noticeData])

  return (
    <NoteWriteUI
      isEdit={props.isEdit}
      noticeData={props.noticeData}
      onClickNoteList={props.onClickNoteList}
      editNotice={editNotice}
      submitNotice={submitNotice}
      onChangeNoticeTitle={onChangeNoticeTitle}
      contents={contents}
      setContents={setContents}
    />
  )
}
