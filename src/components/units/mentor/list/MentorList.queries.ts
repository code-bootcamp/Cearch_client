import { gql } from '@apollo/client'

export const FETCH_MENTOR = gql`
  query fetchMentor($page: Float!) {
    fetchMentor(page: $page) {
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
