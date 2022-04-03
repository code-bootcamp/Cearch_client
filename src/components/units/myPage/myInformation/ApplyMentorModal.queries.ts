import { gql } from '@apollo/client'

export const SEND_MENTOR_FORM = gql`
  mutation sendMentorForm($mentorForm: MentorForm!, $category: [String!]!) {
    sendMentorForm(mentorForm: $mentorForm, category: $category) {
      id
    }
  }
`
