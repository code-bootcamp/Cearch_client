import { gql } from '@apollo/client'

export const FETCH_MY_FOLLOWER = gql`
  query fetchMyFollower {
    fetchMyFollower {
      followee {
        companyName
        department
        selfIntro
        user {
          name
          imageUrl
        }
      }
    }
  }
`
