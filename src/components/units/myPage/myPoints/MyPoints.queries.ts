import { gql } from '@apollo/client'

export const FETCH_MY_PLUS_WALLET = gql`
  query fetchMyPlusWallet {
    fetchMyPlusWallet {
      id
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
      id
      division
      description
      point
      createdAt
    }
  }
`

export const CHARGE_POINT = gql`
  mutation chargePoint($impUid: String!, $myamount: Float!) {
    chargePoint(impUid: $impUid, myamount: $myamount) {
      status
    }
  }
`
