import { gql } from '@apollo/client'

export const CREATE_COMMENTS = gql`
  mutation createComments($contents: String!, $postId: String!) {
    createComments(contents: $contents, postId: $postId) {
      id
      contents
      isPick
      depth
      parent
      group
      createdAt
      updatedAt
      deletedAt
      qtBoard
      user
    }
  }
`

export const UPDATE_COMMENTS = gql`
  mutation updateComments($contents: String!, $commentId: String!) {
    updateComments(contents: $contents, commentId: $commentId) {
      id
      contents
      isPick
      depth
      parent
      group
      createdAt
      updatedAt
      deletedAt
      qtBoard
      user
    }
  }
`

export const DELETE_COMMENTS = gql`
  mutation deleteComments($commentId: String!) {
    deleteComments(commentId: $commentId)
  }
`
