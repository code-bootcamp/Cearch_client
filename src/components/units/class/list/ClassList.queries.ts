import { gql } from '@apollo/client'

export const FETCH_LECTURE_PRODUCTS = gql`
  query fetchlectureProducts($page: Float!) {
    fetchlectureProducts(page: $page) {
      id
      classTitle
      classDescription
      classStartDate
      rating
      joinproductandproductcategory {
        lectureproductcategory {
          categoryname
        }
      }
      mentor {
        companyName
        user {
          name
        }
      }
    }
  }
`

export const FETCH_LECTURE_REVIEWS = gql`
  query fetchLectureReviews($lectureId: String!) {
    fetchLectureReviews(lectureId: $lectureId) {
      id
      reviewContents
    }
  }
`

export const FETCH_SELECTED_TAG_LECTURES = gql`
  query fetchSelectedTagLectures(
    $lectureproductcategoryname: String!
    $page: Float!
  ) {
    fetchSelectedTagLectures(
      lectureproductcategoryname: $lectureproductcategoryname
      page: $page
    ) {
      id
      classTitle
      classDescription
      classPrice
      classStartDate
      rating
      reviews {
        id
      }
      joinproductandproductcategory {
        lectureproductcategory {
          categoryname
        }
      }
      mentor {
        id
        user {
          name
        }
      }
    }
  }
`
