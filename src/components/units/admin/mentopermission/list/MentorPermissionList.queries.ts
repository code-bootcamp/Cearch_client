import { gql } from '@apollo/client'

export const FETCH_AUTHOR_MENTOR = gql`
  query fetchAuthorMentor {
    fetchAuthorMentor {
      id
      companyName
      department
      mentoStatus
      selfIntro
      # certificate {
      #   id
      #   url
      # }
      # work {
      #   category {
      #     categoryname
      #   }
      # }
      # user {
      #   name
      #   email
      #   imageUrl
      # }
      # onlineTime
    }
  }
`
