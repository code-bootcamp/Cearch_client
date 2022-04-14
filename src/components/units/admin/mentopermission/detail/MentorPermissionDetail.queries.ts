import { gql } from '@apollo/client'

export const AUTH_MENTOR = gql`
  mutation authMentor($mentoId: String!, $userId: String!) {
    authMentor(mentoId: $mentoId, userId: $userId) {
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
