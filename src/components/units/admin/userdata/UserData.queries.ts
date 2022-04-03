import { gql } from '@apollo/client'

export const FETCH_NEW_USER_COUNT = gql`
  query fetchNewUserCount($date: String!) {
    fetchNewUserCount(date: $date)
  }
`

export const FETCH_NEW_POST_COUNT = gql`
  query fetchNewPostCount($date: String!) {
    fetchNewPostCount(date: $date)
  }
`
