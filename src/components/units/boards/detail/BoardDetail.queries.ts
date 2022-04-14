import { gql } from '@apollo/client'

export const FETCH_QT_BOARD = gql`
  query fetchQtBoard($postId: String!) {
    fetchQtBoard(postId: $postId) {
      id
      title
      contents
      name
      commentsCount
      likescount
      createdAt
      updatedAt
      # comments {
      #   id
      #   contents
      #   isPick
      #   createdAt
      #   user {
      #     name
      #   }
      # }
      qtTags {
        tagname
      }
      # user {
      #   qtBoard {
      #     likes {
      #       isLike
      #     }
      #   }
      # }
    }
  }
`

export const DELETE_QT_BOARD = gql`
  mutation deleteQtBoard($postId: String!) {
    deleteQtBoard(postId: $postId)
  }
`

export const DELETE_NON_MEMBERS_QT_BOARD = gql`
  mutation deleteNonMembersQtBoard($password: String!, $postId: String!) {
    deleteNonMembersQtBoard(password: $password, postId: $postId)
  }
`

export const UPDATE_QT_LIKE = gql`
  mutation updateQtLike($postId: String!) {
    updateQtLike(postId: $postId) {
      id
      isLike
      createdAt
    }
  }
`
