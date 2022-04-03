import { gql } from '@apollo/client'

export const FETCH_USER = gql`
  query fetchUser {
    fetchUser {
      id
      email
      name
      point
      imageUrl
      role
      following
      phoneNumber
      interest {
        linkedToLectureProductCategory {
          categoryname
        }
      }
    }
  }
`
