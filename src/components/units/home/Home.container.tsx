import HomeUI from './Home.presenter'
import { useRouter } from 'next/router'
import { useQuery } from '@apollo/client'
import {
  FETCH_NEW_CLASSES,
  FETCH_LECTURE_RATING,
  FETCH_MENTOR,
  FETCH_LIKE_POST,
} from './Home.queries'
import { MouseEvent } from 'react'

export default function Home() {
  const router = useRouter()

  const { data: MentorListData } = useQuery(FETCH_MENTOR)
  const { data: NewClassData } = useQuery(FETCH_NEW_CLASSES)
  const { data: PopularClassData } = useQuery(FETCH_LECTURE_RATING)
  const { data: LikeBoardsData } = useQuery(FETCH_LIKE_POST)

  const onClickMoveToMentorDetail = (e: MouseEvent<HTMLDivElement>) => {
    router.push(`/mentor/${e.currentTarget.id}`)
  }
  const onClickMoveToClassDetail = (e: MouseEvent<HTMLDivElement>) => {
    router.push(`/class/${e.currentTarget.id}`)
  }
  return (
    <HomeUI
      MentorListData={MentorListData}
      NewClassData={NewClassData}
      PopularClassData={PopularClassData}
      LikeBoardsData={LikeBoardsData}
      onClickMoveToMentorDetail={onClickMoveToMentorDetail}
      onClickMoveToClassDetail={onClickMoveToClassDetail}
    />
  )
}
