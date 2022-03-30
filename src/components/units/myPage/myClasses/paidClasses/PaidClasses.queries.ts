import { gql } from '@apollo/client'

export const FETCH_LECTURE_ORDERS = gql`
  query fetchlectureOrders {
    fetchlectureOrders {
      order {
        lecproduct {
          id
          classTitle
          classCategory
          image
          classStartDate
          classOpen
        }
      }
    }
  }
`
