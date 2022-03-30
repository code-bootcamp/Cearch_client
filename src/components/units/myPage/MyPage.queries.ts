import { gql } from '@apollo/client'

export const FETCH_USER = gql`
  query fetchUser {
    fetchUser {
      SearchInModal
      name
      role
      point
      imageUrl
      interest
    }
  }
`
