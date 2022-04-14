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
import { MouseEvent, useContext, useEffect } from 'react'
import {
  IQuery,
  IQueryFetchQtBoardsArgs,
} from '../../../commons/types/generated/types'
import { GlobalContext } from '../../../../pages/_app'

export default function Home() {
  const { setCheckedCategory } = useContext(GlobalContext)
  const router = useRouter()

  const { data: MentorAnswerData } = useQuery<
    Pick<IQuery, 'fetchMostAnswerMentor'>
  >(FETCH_MOST_ANSWER_MENTOR)
  const { data: MentorRecommendData } = useQuery<
    Pick<IQuery, 'fetchMostRecommendMentor'>
  >(FETCH_MOST_RECOMMEND_MENTOR)

  const { data: NewClassData } =
    useQuery<Pick<IQuery, 'fetchNewClasses'>>(FETCH_NEW_CLASSES)
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

  useEffect(() => {
    setCheckedCategory(null)
  }, [])

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
