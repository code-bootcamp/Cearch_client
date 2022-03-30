import { gql } from '@apollo/client'

export const FETCH_MY_PLUS_WALLET = gql`
  query fetchMyPlusWallet {
    fetchMyPlusWallet {
      division
      description
      point
      createdAt
    }
  }
`

export const FETCH_MY_MINUS_WALLET = gql`
  query fetchMyMinusWallet {
    fetchMyMinusWallet {
      division
      description
      point
      createdAt
    }
  }
`
