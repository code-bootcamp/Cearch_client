import HomeUI from './Home.presenter'
import { useRouter } from 'next/router'
import { useQuery } from '@apollo/client'
import {
  FETCH_LIKE_POST,
  FETCH_QT_BOARDS,
  FETCH_POPULAR_CLASS,
  FETCH_MOST_ANSWER_MENTOR,
  FETCH_MOST_RECOMMEND_MENTOR,
  FETCH_NEW_CLASSES,
} from './Home.queries'
import { MouseEvent, useContext, useEffect, useState } from 'react'
import {
  IQuery,
  IQueryFetchLectureProductArgs,
  IQueryFetchLectureReviewsArgs,
  IQueryFetchMentorArgs,
  IQueryFetchQtBoardsArgs,
} from '../../../commons/types/generated/types'
import { GlobalContext } from '../../../../pages/_app'

export default function Home() {
  const { setCheckedCategory } = useContext(GlobalContext)
  const router = useRouter()

  useEffect(() => {
    setCheckedCategory(null)
  }, [])

  const { data: MentorAnswerData } = useQuery(FETCH_MOST_ANSWER_MENTOR)
  const { data: MentorRecommendData } = useQuery(FETCH_MOST_RECOMMEND_MENTOR)

  console.log(MentorRecommendData)

  const { data: NewClassData } = useQuery(FETCH_NEW_CLASSES)
  const { data: PopularClassData } =
    useQuery<Pick<IQuery, 'fetchPopularClass'>>(FETCH_POPULAR_CLASS)

  const { data: LikeBoardsData } =
    useQuery<Pick<IQuery, 'fetchLikePost'>>(FETCH_LIKE_POST)
  const { data: NewBoardsData } = useQuery<
    Pick<IQuery, 'fetchQtBoards'>,
    IQueryFetchQtBoardsArgs
  >(FETCH_QT_BOARDS, {
    variables: {
      page: 1,
    },
  })

  const onClickMoveToMentorDetail = (e: MouseEvent<HTMLDivElement>) => {
    router.push(`/mentor/${e.currentTarget.id}`)
  }
  const onClickMoveToClassDetail = (e: MouseEvent<HTMLDivElement>) => {
    router.push(`/class/${e.currentTarget.id}`)
  }

  return (
    <>
      <HomeUI
        MentorAnswerData={MentorAnswerData}
        MentorRecommendData={MentorRecommendData}
        NewClassData={NewClassData}
        PopularClassData={PopularClassData}
        NewBoardsData={NewBoardsData}
        LikeBoardsData={LikeBoardsData}
        onClickMoveToMentorDetail={onClickMoveToMentorDetail}
        onClickMoveToClassDetail={onClickMoveToClassDetail}
      />
    </>
  )
}
