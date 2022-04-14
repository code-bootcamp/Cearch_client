import { gql } from '@apollo/client'

export const IS_CHECK_EMAIL = gql`
  query isCheckEmail($email: String!) {
    isCheckEmail(email: $email)
  }
`

export const SEND_EMAIL_TOKEN = gql`
  mutation sendEmailToken($email: String!) {
    sendEmailToken(email: $email)
  }
`

export const EMAIL_CHECK_TOKEN = gql`
  query emailCheckToken($email: String!, $inputToken: String!) {
    emailCheckToken(email: $email, inputToken: $inputToken)
  }
`
