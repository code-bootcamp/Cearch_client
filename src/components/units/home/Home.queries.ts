import { gql } from '@apollo/client'

export const FETCH_MOST_ANSWER_MENTOR = gql`
  query fetchMostAnswerMentor {
    fetchMostAnswerMentor {
      id
      companyName
      department
      selfIntro
      user {
        name
        imageUrl
      }
      work {
        category {
          categoryname
        }
      }
      follower
    }
  }
`
export const FETCH_MOST_RECOMMEND_MENTOR = gql`
  query fetchMostRecommendMentor {
    fetchMostRecommendMentor {
      id
      companyName
      department
      selfIntro
      user {
        imageUrl
        name
      }
      work {
        category {
          categoryname
        }
      }
      follower
    }
  }
`

export const FETCH_NEW_CLASSES = gql`
  query fetchNewClasses {
    fetchNewClasses {
      id
      classTitle
      classDescription
      classCurriculum
      classPrice
      classMaxUser
      classStartDate
      classStartTime
      rating
      imageURL
      joinproductandproductcategory {
        id
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
export const FETCH_POPULAR_CLASS = gql`
  query fetchPopularClass {
    fetchPopularClass {
      id
      classTitle
      classDescription
      classCurriculum
      classPrice
      classMaxUser
      classStartDate
      classStartTime
      rating
      imageURL
      joinproductandproductcategory {
        id
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

export const FETCH_QT_BOARDS = gql`
  query fetchQtBoards($page: Float!) {
    fetchQtBoards(page: $page) {
      id
      title
      contents
      name
      likescount
      commentsCount
      createdAt
      # user {
      #   imageUrl
      # }
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
      commentsCount
      createdAt
      # user {
      #   imageUrl
      # }
    }
  }
`

export const FETCH_HOME_SEARCH = gql`
  query fetchHomeSearch($search: String!) {
    fetchHomeSearch(search: $search) {
      id
      name
      companyName
      department
      selfIntro
    }
  }
`

export const FETCH_LECTURE_SEARCH = gql`
  query fetchLectureSearch($search: String!) {
    fetchLectureSearch(search: $search) {
      id
      name
      companyName
      department
      classTitle
      classDescription
      rating
    }
  }
`
