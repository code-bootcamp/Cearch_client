import NoteListUI from './NoteList.presenter'
import { useRouter } from 'next/router'
import { useQuery } from '@apollo/client'
import { FETCH_NOTICES } from './NoteList.queries'
import { IQuery } from '../../../../../commons/types/generated/types'

export default function NoteList(props) {
  const router = useRouter()
  const { data } = useQuery<Pick<IQuery, 'fetchNotices'>>(FETCH_NOTICES)
  const onClickMoveToNoteWrite = () => {
    router.push('/admin/note/new')
  }
  return (
    <NoteListUI
      onClickMoveToNoteWrite={onClickMoveToNoteWrite}
      onClickNoteWrite={props.onClickNoteWrite}
      onClickNoteDetail={props.onClickNoteDetail}
    />
  )
}
