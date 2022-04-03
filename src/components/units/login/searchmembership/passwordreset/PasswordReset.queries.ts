import { gql } from '@apollo/client'

export const UPDATE_PASSWORD = gql`
  mutation updatePassword($email: String!, $newPassword: String!) {
    updatePassword(email: $email, newPassword: $newPassword) {
      id
    }
  }
`
