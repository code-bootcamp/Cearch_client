import { gql } from '@apollo/client'

export const FOLLOW_TOGGLE = gql`
  mutation followToggle($mentoId: String!) {
    followToggle(mentoId: $mentoId) {
      follower
      followee
      following
      createdAt
    }
  }
`
