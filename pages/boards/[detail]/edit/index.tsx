import { useRouter } from 'next/router'
import BoardWrite from '../../../../src/components/units/boards/write/BoardWrite.container'
import { gql, useQuery } from '@apollo/client'
import {
  IQuery,
  IQueryFetchQtBoardArgs,
} from '../../../../src/commons/types/generated/types'

export const FETCH_QT_BOARD = gql`
  query fetchQtBoard($postId: String!) {
    fetchQtBoard(postId: $postId) {
      id
      title
      contents
      name
      likescount
      createdAt
      updatedAt
      comments {
        id
        contents
        isPick
        createdAt
        user {
          name
        }
      }
      # likes
      # images {
      #   id
      #   url
      # }
      qtTags {
        tagname
      }
    }
  }
`

export default function BoardEditPage() {
  const router = useRouter()
  const { data: qtBoardEditData } = useQuery<
    Pick<IQuery, 'fetchQtBoard'>,
    IQueryFetchQtBoardArgs
  >(FETCH_QT_BOARD, { variables: { postId: String(router.query.detail) } })

  return <BoardWrite isEdit={true} qtBoardEditData={qtBoardEditData} />
}
