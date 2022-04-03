import { gql } from '@apollo/client'

export const FETCH_LECTURE_WITH_MENTOR = gql`
  query fetchLectureWithMentor {
    fetchLectureWithMentor {
      id
      classTitle
      classStartDate
      classStartTime
      classMaxUser
      # registration {
      #   name
      #   age
      #   job
      #   selfIntroduction
      #   preQuestion
      # }
    }
  }
`
