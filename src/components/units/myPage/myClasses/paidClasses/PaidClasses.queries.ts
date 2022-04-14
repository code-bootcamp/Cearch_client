import { gql } from '@apollo/client'

// export const FETCH_LECTURE_ORDERS = gql`
//   query fetchlectureOrders {
//     id
//     registration {
//       product {
//         classTitle
//         classprice
//         classStartDate
//         image {
//           string
//         }
//         joinproductandproductcategory {
//           lectureproductcategory {
//             categoryname
//           }
//         }
//       }
//     }
//   }
// `
// export const FETCH_LECTURE_ORDERS = gql`
//   query fetchlectureOrders {
//     fetchlectureOrders {
//       id
//     }
//   }
// `

export const FETCH_LECTURE_WITH_MENTEE = gql`
  query fetchLectureWithMentee {
    fetchLectureWithMentee {
      id
      classTitle
      classStartDate
      classPrice
      joinproductandproductcategory {
        lectureproductcategory {
          categoryname
        }
      }
    }
  }
`
