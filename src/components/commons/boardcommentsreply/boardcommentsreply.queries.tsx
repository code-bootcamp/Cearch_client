import { gql } from '@apollo/client'

export const FETCH_RE_COMMENTS = gql`
  query fetchReComments($commentId: String!, $page: Float!) {
    fetchReComments(commentId: $commentId, page: $page) {
      id
      contents
      createdAt
      user {
        name
      }
    }
  }
`
export const CREATE_REPLY = gql`
  mutation createReply($contents: String!, $commentId: String!) {
    createReply(contents: $contents, commentId: $commentId) {
      id
      contents
      # isPick
      createdAt
      user {
        name
      }
    }
  }
`
