import { gql } from '@apollo/client'

export const FETCH_MENTOR = gql`
  query fetchMentor($page: Float!) {
    fetchMentor(page: $page) {
      id
      companyName
      department
      user {
        name
        imageUrl
      }
      work {
        id
        category
      }
    }
  }
`

export const FETCH_LECTURE_PRODUCTS = gql`
  query fetchlectureProducts {
    fetchlectureProducts {
      id
      classTitle
      classDescription
      classRunTime
      classOpen
      rating
      classCategory
      image {
        id
        url
      }
      MentoInfo {
        companyName
        user {
          id
          name
        }
      }
    }
  }
`

export const FETCH_LECTURE_RATING = gql`
  query fetchLectureRating {
    fetchLectureRating {
      id
      classTitle
      classDescription
      classRunTime
      classOpen
      rating
      classCategory
      image {
        id
        url
      }
      MentoInfo {
        companyName
        user {
          id
          name
        }
      }
    }
  }
`

export const FETCH_LIKE_POST = gql`
  query fetchLikePost {
    fetchLikePost {
      id
      title
      contents
      name
      likescount
      createdAt
      user {
        imageUrl
      }
    }
  }
`
