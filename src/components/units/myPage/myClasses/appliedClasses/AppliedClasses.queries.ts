import { gql } from '@apollo/client'

export const FETCH_LECTURE_REGISTRATIONS = gql`
  query fetchlectureRegistrations($search: String!) {
    fetchlectureRegistrations(search: $search) {
      lecproduct {
        id
        image {
          url
        }
        classCategory
        classTitle
        classPrice
        classStartDate
      }
    }
  }
`
