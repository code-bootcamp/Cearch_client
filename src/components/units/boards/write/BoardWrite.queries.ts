import { gql } from '@apollo/client'

export const CREATE_NON_MEMBERS_QT_BOARD = gql`
  mutation createNonMembersQtBoard($nonMembersQtInput: NonMembersQtInput!) {
    createNonMembersQtBoard(nonMembersQtInput: $nonMembersQtInput) {
      id
      title
      contents
      name
      point
      likescount
      createdAt
      updatedAt
      deletedAt
      user
      comments
      likes
      image
      qtTags
    }
  }
`
export const UPDATE_NON_MEMBERS_QT_BOARD = gql`
  mutation updateNonMembersQtBoard(
    $postId: String!
    $nonMembersQtInput: NonMembersQtInput!
  ) {
    updateNonMembersQtBoard(
      postId: $postId
      nonMembersQtInput: $nonMembersQtInput
    ) {
      id
      title
      contents
      name
      point
      likescount
      createdAt
      updatedAt
      deletedAt
      user
      comments
      likes
      image
      qtTags
    }
  }
`

export const CREATE_QT_BOARD = gql`
  mutation createQtBoard($memberQtInput: MembersQtInput!) {
    createQtBoard(memberQtInput: $memberQtInput) {
      id
      title
      contents
      name
      point
      likescount
      createdAt
      updatedAt
      deletedAt
      user
      comments
      likes
      image
      qtTags
    }
  }
`
export const UPDATE_QT_BOARD = gql`
  mutation updateQtBoard($postId: String!, $memberQtInput: MembersQtInput!) {
    updateQtBoard(postId: $postId, memberQtInput: $memberQtInput) {
      id
      title
      contents
      name
      point
      likescount
      createdAt
      updatedAt
      deletedAt
      user
      comments
      likes
      image
      qtTags
    }
  }
`
