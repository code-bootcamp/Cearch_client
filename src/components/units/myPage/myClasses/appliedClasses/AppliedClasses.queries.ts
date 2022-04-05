import { gql } from '@apollo/client'

export const FETCH_LECTURE_REGISTRATIONS = gql`
  query fetchlectureRegistrations {
    fetchlectureRegistrations {
      id
      name
      product {
        classTitle
        classPrice
        classStartDate
        joinproductandproductcategory {
          lectureproductcategory {
            categoryname
          }
        }
      }
    }
  }
`

export const CREATE_LECTURE_PAYMENT = gql`
  mutation createlecturePayment($lectureRegistrationId: String!) {
    createlecturePayment(lectureRegistrationId: $lectureRegistrationId) {
      id
      registrationStatus
    }
  }
`
