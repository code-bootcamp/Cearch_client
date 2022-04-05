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

export const FETCH_MENTOR_USER = gql`
  query fetchMentorUser {
    fetchMentorUser {
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
      mentor{
      companyName
      department
      onlineTime
      work{
        category{
          categoryname
        }
      }
    }
    }
  }
`