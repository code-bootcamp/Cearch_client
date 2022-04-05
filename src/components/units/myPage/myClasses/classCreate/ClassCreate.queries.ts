import { gql } from '@apollo/client'

export const CREATE_LECTURE_PRODUCT = gql`
  mutation createLectureProduct(
    $createLectureProductInput: CreateLectureProductInput!
  ) {
    createLectureProduct(
      createLectureProductInput: $createLectureProductInput
    ) {
      id
    }
  }
`
export const UPDATE_LECTURE_PRODUCT = gql`
  mutation updateLectureProduct(
    $lectureproductId: String!
    $updateLectrueProductInput: UpdateLectureProductInput!
  ) {
    updateLectureProduct(
      lectureproductId: $lectureproductId
      updateLectrueProductInput: $UpdateLectureProductInput
    ) {
      id
    }
  }
`

// updateLectureProduct(
// lectureproductId: String!
// updateLectrueProductInput: UpdateLectureProductInput!
// ): LectureProduct!
