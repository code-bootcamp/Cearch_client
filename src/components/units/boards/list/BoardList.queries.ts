import { gql } from '@apollo/client'

export const FETCH_QT_BOARDS = gql`
  query fetchQtBoards($page: Float!) {
    fetchQtBoards(page: $page) {
      _id
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
      image
      qtTags
    }
  }
`
