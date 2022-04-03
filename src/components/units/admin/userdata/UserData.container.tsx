import { useLazyQuery, useQuery } from '@apollo/client'
import { useEffect } from 'react'
import { getRecentDate } from '../../../../commons/libraries/getRecentDate'
import UserDataUI from './UserData.presenter'
import { FETCH_NEW_POST_COUNT, FETCH_NEW_USER_COUNT } from './UserData.queries'

const getDate = [
  getRecentDate('어제'),
  getRecentDate('이틀전'),
  getRecentDate('삼일전'),
  getRecentDate('사일전'),
  getRecentDate('오일전'),
  getRecentDate('육일전'),
  getRecentDate('칠일전'),
]

export default function UserData() {
  const { data: newUserCount, refetch: refetchNewUserCount } = useQuery(
    FETCH_NEW_USER_COUNT,
    {
      variables: { date: `2022-04-04` },
    }
  )
  // const { data: newPostCount } = useQuery(FETCH_NEW_POST_COUNT, {
  //   variables: { date: `20${getDate[0]}` },
  // })
  // const [AA] = useLazyQuery(newUserCount, { variables: { date: '2022-04-04' } })
  // console.log(AA)
  useEffect(() => {
    for (let i = 0; i < 7; i++) {
      // console.log(getDate[i])

      console.log(i, refetchNewUserCount({ date: `20${getDate[i]}` }))
    }
  }, [])
  // console.log(newUserCount)

  // console.log(`20${getDate}`)
  // console.log('getDate', getDate)
  // console.log('newPost', newPostCount?.fetchNewPostCount)

  return <UserDataUI newUserCount={newUserCount} />
}
