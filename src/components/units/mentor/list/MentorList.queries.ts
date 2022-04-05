import { gql } from '@apollo/client'

export const FETCH_MENTOR = gql`
  query fetchMentor($page: Float!) {
    fetchMentor(page: $page) {
      id
      companyName
      department
      selfIntro
      # work {
      #   category {
      #     categoryname
      #   }
      # }
      # user {
      #   name
      #   imageUrl
      # }
      onlineTime
    }
  }
`
export const FETCH_MENTOR_USER = gql`
  query fetchMentorUser {
    fetchMentorUser {
      id
      name
      email
      role
      # imageUrl
      # mentor {
      #   onlineTime
      #   companyName
      #   department
      #   selfIntro
      # }
    }
  }
`
export const FETCH_SELECTED_TAG_MENTOR = gql`
  query fetchSelectedTagMentor($page: Float!, $categoryName: String!) {
    fetchSelectedTagMentor(page: $page, categoryName: $categoryName) {
      id
      companyName
      department
      mentoStatus
      selfIntro
      certificate
      work
      user
      onlineTime
      lecture
    }
  }
`
export const FETCH_ALL_MENTOR_COUNT = gql`
  query fetchAllMentorCount {
    fetchAllMentorCount
  }
`
