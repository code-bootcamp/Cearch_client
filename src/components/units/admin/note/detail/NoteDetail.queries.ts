import { gql } from '@apollo/client'

export const FETCH_NOTICE = gql`
  query fetchNotice($postId: String!) {
    fetchNotice(postId: $postId) {
      id
      title
      contents
      isNotice
      createdAt
      updatedAt
      deletedAt
    }
  }
`

export const DELETE_NOTICE = gql`
  mutation deleteNotice($postId: String!) {
    deleteNotice(postId: $postId)
  }
`
