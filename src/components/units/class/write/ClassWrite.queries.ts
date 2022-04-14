import { gql } from '@apollo/client'

export const CREATE_LECTURE_REGISTRATION = gql`
  mutation createLectureRegistration(
    $createLectureRegistrationInput: CreateLectureRegistrationInput!
    $lectureproductId: String!
  ) {
    createLectureRegistration(
      createLectureRegistrationInput: $createLectureRegistrationInput
      lectureproductId: $lectureproductId
    ) {
      id
      name
      # phoneNumber
      # job
      # selfIntroduction
      # preQuestion
      # age
    }
  }
`

export const FETCH_LECTURE_PRODUCT = gql`
  query fetchLectureProduct($lectureproductId: String!, $page: Float!) {
    fetchLectureProduct(lectureproductId: $lectureproductId, page: $page) {
      id
      classTitle
      classPrice
      classMaxUser
      classStartDate
    }
  }
`

export const FETCH_USER = gql`
  query fetchUser {
    fetchUser {
      id
      name
      phoneNumber
    }
  }
`
