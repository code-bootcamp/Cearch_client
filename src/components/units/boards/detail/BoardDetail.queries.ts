import { gql } from '@apollo/client'

export const FETCH_QT_BOARD = gql`
  query fetchQtBoard($postId: String!) {
    fetchQtBoard(postId: $postId) {
      id
      title
      contents
      name
      point
      likescount
      createdAt
      updatedAt
      deletedAt
      user
      comments
      likes
      images
      qtTags
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
export const SELECT_BEST_COMMENTS = gql`
  mutation selectBestComments($commentId: String!) {
    selectBestComments(commentId: $commentId) {
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
export const UPDATE_QT_LIKE = gql`
  mutation updateQtLike($postId: String!) {
    updateQtLike(postId: $postId) {
      id
      isLike
      qtBoard
      user
      createdAt
      deletedAt
    }
  }
`
