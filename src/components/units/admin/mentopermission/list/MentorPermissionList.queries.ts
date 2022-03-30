import { gql } from '@apollo/client'

export const FETCH_AUTHOR_MENTOR = gql`
  query fetchAuthorMentor {
    fetchAuthorMentor {
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
