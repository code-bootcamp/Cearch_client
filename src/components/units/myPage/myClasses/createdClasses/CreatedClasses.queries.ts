import { gql } from '@apollo/client'

export const FETCH_LECTURE_WITH_MENTEE = gql`
  query fetchLectureWithMentee {
    fetchLectureWithMentee {
      id
      classTitle
      classMaxUser
      classAppliedUser
    }
  }
`
