import { gql } from '@apollo/client'

export const FETCH_NOTICES = gql`
  query fetchNotices {
    fetchNotices {
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
