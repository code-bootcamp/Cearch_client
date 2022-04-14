import { gql } from '@apollo/client'

export const FETCH_COMMENTS = gql`
  query fetchComments($postId: String!, $page: Float!) {
    fetchComments(postId: $postId, page: $page) {
      id
      contents
      isPick
      createdAt
      user {
        id
        name
        role
      }
    }
  }
`

export const CREATE_COMMENTS = gql`
  mutation createComments($contents: String!, $postId: String!) {
    createComments(contents: $contents, postId: $postId) {
      id
      contents
      isPick
      createdAt
      user {
        name
      }
    }
  }
`

export const UPDATE_COMMENTS = gql`
  mutation updateComments($contents: String!, $commentId: String!) {
    updateComments(contents: $contents, commentId: $commentId) {
      id
      contents
      isPick
      createdAt
      user {
        name
      }
    }
  }
`

export const DELETE_COMMENTS = gql`
  mutation deleteComments($commentId: String!) {
    deleteComments(commentId: $commentId)
  }
`
export const SELECT_BEST_COMMENTS = gql`
  mutation selectBestComments($commentId: String!) {
    selectBestComments(commentId: $commentId) {
      id
      contents
      isPick
      createdAt
      qtBoard {
        id
      }
      user {
        id
        name
      }
    }
  }
`
