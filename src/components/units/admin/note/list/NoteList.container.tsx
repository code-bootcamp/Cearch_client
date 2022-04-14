import NoteListUI from './NoteList.presenter'
import { useRouter } from 'next/router'
import { useQuery } from '@apollo/client'
import { FETCH_NOTICES, FETCH_ALL_NOTICE_COUNT } from './NoteList.queries'
import { IQuery } from '../../../../../commons/types/generated/types'
import { MouseEvent } from 'react'

export default function NoteList(props) {
  const router = useRouter()
  const { data, refetch } = useQuery<Pick<IQuery, 'fetchNotices'>>(
    FETCH_NOTICES,
    {
      variables: { page: 1 },
    }
  )
  console.log(data?.fetchNotices)

  const { data: noticeCount } = useQuery(FETCH_ALL_NOTICE_COUNT)
  const onClickMoveToNoteWrite = () => {
    router.push('/admin/note/new')
  }
  const onClickNoticeDetail = (e: MouseEvent<HTMLDivElement>) => {
    router.push(`/admin/note/${e.currentTarget.id}`)
  }

  return (
    <NoteListUI
      data={data}
      refetch={refetch}
      noticeCount={noticeCount}
      onClickMoveToNoteWrite={onClickMoveToNoteWrite}
      onClickNoteWrite={props.onClickNoteWrite}
      onClickNoticeDetail={onClickNoticeDetail}
    />
  )
}
