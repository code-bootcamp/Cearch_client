import BoardWrite from '../../../src/components/units/boards/write/BoardWrite.container'
import { gql, useQuery } from '@apollo/client'
import { IQuery, IUser } from '../../../src/commons/types/generated/types'

const FETCH_USER = gql`
  query fetchUser {
    fetchUser {
      id
      email
      name
      gender
      phoneNumber
      role
      point
      following
      answerCount
      imageUrl
      createdAt
      updatedAt
      deleteDate
      qtBoard
      comments
      mentor
      likes
      reviews
      interest
      registration
    }
  }
`
export default function BoardWritePage() {
  const { data } = useQuery<Pick<IQuery, 'fetchUser'>, IUser>(FETCH_USER)
  return <BoardWrite data={data} />
}
