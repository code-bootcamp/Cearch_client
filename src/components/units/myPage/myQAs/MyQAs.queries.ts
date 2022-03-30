import { gql } from '@apollo/client'

export const FETCH_MY_QT = gql`
  query fetchMyQt($page: Float!) {
    fetchMyQt(page: $page) {
      id
      title
      createdAt
    }
  }
`

export const FETCH_MY_COMMENTS = gql`
  query fetchMyComments($page: Float!) {
    fetchMyComments(page: $page) {
      qtBoard {
        id
        title
        createdAt
      }
    }
  }
`
