import HomeUI from './Home.presenter'
import { useRouter } from 'next/router'
import { useQuery } from '@apollo/client'
import {
  FETCH_LECTURE_RATING,
  FETCH_MENTOR,
  FETCH_LIKE_POST,
  FETCH_LECTURE_PRODUCTS,
} from './Home.queries'
import { MouseEvent } from 'react'
import {
  IQuery,
  IQueryFetchLectureProductArgs,
  IQueryFetchMentorArgs,
} from '../../../commons/types/generated/types'

export default function Home() {
  const router = useRouter()

  const { data: MentorListData } = useQuery<
    Pick<IQuery, 'fetchMentor'>,
    IQueryFetchMentorArgs
  >(FETCH_MENTOR)
  const { data: NewClassData } = useQuery<
    Pick<IQuery, 'fetchlectureProducts'>,
    IQueryFetchLectureProductArgs
  >(FETCH_LECTURE_PRODUCTS)
  const { data: PopularClassData } =
    useQuery<Pick<IQuery, 'fetchLectureRating'>>(FETCH_LECTURE_RATING)
  const { data: LikeBoardsData } =
    useQuery<Pick<IQuery, 'fetchLikePost'>>(FETCH_LIKE_POST)

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
