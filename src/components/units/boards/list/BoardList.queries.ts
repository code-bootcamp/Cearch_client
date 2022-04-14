import { gql } from '@apollo/client'

export const FETCH_QT_BOARDS = gql`
  query fetchQtBoards($page: Float!) {
    fetchQtBoards(page: $page) {
      id
      title
      contents
      name
      likescount
      createdAt
      updatedAt
      commentsCount
      likes {
        isLike
        createdAt
      }
      qtTags {
        tagname
      }
    }
  }
`

export const FETCH_ALL_POST_COUNT = gql`
  query fetchAllPostCount {
    fetchAllPostCount
  }
`
export const SEARCH_QT = gql`
  query searchQt($search: String!) {
    searchQt(search: $search) {
      id
      title
      contents
      name
    }
  }
`
