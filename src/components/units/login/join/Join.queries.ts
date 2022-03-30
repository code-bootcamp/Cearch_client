import { gql } from '@apollo/client'

export const CREATE_USER = gql`
  mutation createUser($userForm: UserForm!) {
    createUser(userForm: $userForm) {
      id
      email
      name
      gender
      phoneNumber
    }
  }
`

export const SEND_PHONE_NUMBER = gql`
  mutation sendPhoneNumber($phoneNumber: String!) {
    sendPhoneNumber(phoneNumber: $phoneNumber)
  }
`

export const PHONE_CHECK_TOKEN = gql`
  query phoneCheckToken($phoneNumber: String!, $inputToken: String!) {
    phoneCheckToken(phoneNumber: $phoneNumber, inputToken: $inputToken)
  }
`
