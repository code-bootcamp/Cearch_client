import { gql } from '@apollo/client'

export const FETCH_NOTICES = gql`
  query fetchNotices($page: Float!) {
    fetchNotices(page: $page) {
      id
      title
      contents
      isNotice
      createdAt
      updatedAt
    }
  }
`
export const FETCH_ALL_NOTICE_COUNT = gql`
  query fetchAllNoticeCount {
    fetchAllNoticeCount
  }
`
