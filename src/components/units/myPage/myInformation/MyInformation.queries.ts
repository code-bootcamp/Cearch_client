import { gql } from '@apollo/client'

export const UPDATE_USER_INFO = gql`
  mutation updateUserInfo(
    $updateUserForm: UpdateUserForm!
    $category: [String!]!
  ) {
    updateUserInfo(updateUserForm: $updateUserForm, category: $category) {
      id
    }
  }
`

export const UPDATE_MENTOR_INFO = gql`
  mutation updateMetorInfo($mentorForm: MentorForm!, $category: [String!]!) {
    updateMentorInfo(mentorForm: $mentorForm, category: $category) {
      id
    }
  }
`
