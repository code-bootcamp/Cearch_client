import { gql } from '@apollo/client'

export const CREATE_NOTICE = gql`
  mutation createNotice($title: String!, $contents: String!) {
    createNotice(title: $title, contents: $contents) {
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

export const UPDATE_NOTICE = gql`
  mutation updateNotice($postId: String!, $title: String!, $contents: String!) {
    updateNotice(postId: $postId, title: $title, contents: $contents) {
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
