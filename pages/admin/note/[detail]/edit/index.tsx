import NoteWrite from '../../../../../src/components/units/admin/note/write/NoteWrite.container'
import { gql, useQuery } from '@apollo/client'
import {
  IQuery,
  IQueryFetchNoticeArgs,
} from '../../../../../src/commons/types/generated/types'
import { useRouter } from 'next/router'

export const FETCH_NOTICE = gql`
  query fetchNotice($postId: String!) {
    fetchNotice(postId: $postId) {
      id
      title
      contents
      createdAt
      updatedAt
    }
  }
`
export default function NoteEditPage() {
  const router = useRouter()
  const { data: noticeData } = useQuery<
    Pick<IQuery, 'fetchNotice'>,
    IQueryFetchNoticeArgs
  >(FETCH_NOTICE, {
    variables: { postId: String(router.query.detail) },
  })
  return <NoteWrite isEdit={true} noticeData={noticeData} />
}
