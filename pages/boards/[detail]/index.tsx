import BoardDetail from '../../../src/components/units/boards/detail/BoardDetail.container'
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
    }
  }
`
export default function BoardDetailPage() {
  const { data } = useQuery<Pick<IQuery, 'fetchUser'>, IUser>(FETCH_USER)
  return <BoardDetail data={data} />
}
