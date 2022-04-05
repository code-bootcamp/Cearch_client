import { gql } from '@apollo/client'

export const FETCH_LECTURE_PRODUCT = gql`
  query fetchLectureProduct($lectureproductId: String!, $page: Float!) {
    fetchLectureProduct(lectureproductId: $lectureproductId, page: $page) {
      id
      classTitle
      classDescription
      classCurriculum
      classPrice
      classMaxUser
      appliedUser
      classStartDate
      classStartTime
      rating
      createdAt
      imageURL
      reviews {
        id
        reviewContents
        starRating
        createdAt
        user {
          name
          imageUrl
        }
      }
      joinproductandproductcategory {
        lectureproductcategory {
          categoryname
        }
      }
      mentor {
        companyName
        department
        user {
          name
          imageUrl
        }
        work {
          id
          category {
            categoryname
          }
        }
      }
    }
  }
`

/* export const FETCH_LECTURE_REVIEWS = gql`
  query fetchLectureReviews($lectureId: String!) {
    fetchLectureReviews(lectureId: $lectureId) {
      id
      reviewContents
      starRating
      createdAt
      user {
        name
      }
    }
  }
` */
