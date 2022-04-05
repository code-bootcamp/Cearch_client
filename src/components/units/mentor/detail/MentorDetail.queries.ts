import { gql } from '@apollo/client'

export const FOLLOW_TOGGLE = gql`
  mutation followToggle($mentoId: String!) {
    followToggle(mentoId: $mentoId) {
      follower {
        id
        name
      }
      followee {
        id
        user {
          id
          name
        }
      }
      following
      createdAt
    }
  }
`
export const FETCH_MENTOR = gql`
  query fetchMentor($page: Float!) {
    fetchMentor(page: $page) {
      id
      companyName
      department
      selfIntro
      onlineTime
      # certificate
      # work {
      #   id
      #   category
      # }
      user {
        name
        imageUrl
        email
      }
      onlineTime
      # lecture {
      #   classTitle
      # }
    }
  }
`
