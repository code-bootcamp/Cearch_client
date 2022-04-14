import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import MyFollowingsUI from './MyFollowings.presenter'
import { FETCH_MY_FOLLOWER } from './MyFollowings.queries'

export default function MyFollowings() {
  const { data: mentorList } = useQuery(FETCH_MY_FOLLOWER)
  console.log(mentorList)

  return <MyFollowingsUI mentorList={mentorList} />
}
