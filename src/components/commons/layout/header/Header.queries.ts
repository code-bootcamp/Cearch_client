import { gql } from '@apollo/client'

export const FETCH_USER = gql`
  query fetchUser {
    fetchUser {
      id
      email
      name
      gender
      phoneNumber
      role
      point
      following
      answerCount
      imageUrl
      createdAt
      updatedAt
      deleteDate
      qtBoard
      comments
      mentor
      likes
      reviews
      interest
      registration
    }
  }
`
export const LOGOUT = gql`
  mutation logout {
    logout
  }
`
