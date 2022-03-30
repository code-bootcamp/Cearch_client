import { useMutation, useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import {
  IMutation,
  IMutationDeleteNoticeArgs,
  IQuery,
  IQueryFetchNoticeArgs,
} from '../../../../../commons/types/generated/types'
import NoteDetailUI from './NoteDetail.presenter'
import { FETCH_NOTICE, DELETE_NOTICE } from './NoteDetail.queries'

export default function NoteDetail(props) {
  const router = useRouter()
  const { data } = useQuery<Pick<IQuery, 'fetchNotice'>, IQueryFetchNoticeArgs>(
    FETCH_NOTICE
  )
  const [deleteNotice] = useMutation<
    Pick<IMutation, 'deleteNotice'>,
    IMutationDeleteNoticeArgs
  >(DELETE_NOTICE)

  const deleteNote = async () => {
    try {
      const result = await deleteNotice({
        variables: {
          postId: String(router.query.detail),
        },
      })
      alert('삭제 완료')
    } catch (error) {
      alert(`${error.message}`)
    }
  }
  return <NoteDetailUI onClickNoteList={props.onClickNoteList} />
}
