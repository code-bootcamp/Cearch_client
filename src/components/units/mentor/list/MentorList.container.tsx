import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import { MouseEvent } from 'react'
import {
  IQuery,
  IQueryFetchMentorArgs,
  IQueryFetchSelectedTagMentorArgs,
} from '../../../../commons/types/generated/types'
import MentorListUI from './MentorList.presenter'
import { FETCH_MENTOR, FETCH_SELECTED_TAG_MENTOR } from './MentorList.queries'

export default function MentorList() {
  const router = useRouter()
  const { data } = useQuery<Pick<IQuery, 'fetchMentor'>, IQueryFetchMentorArgs>(
    FETCH_MENTOR
  )
  const { data: selectedTagMentor } = useQuery<
    Pick<IQuery, 'fetchSelectedTagMentor'>,
    IQueryFetchSelectedTagMentorArgs
  >(FETCH_SELECTED_TAG_MENTOR)

  const onClickMoveToMentorDetail = (e: MouseEvent<HTMLDivElement>) => {
    router.push(`/mentor/${e.currentTarget.id}`)
  }
  return <MentorListUI onClickMoveToMentorDetail={onClickMoveToMentorDetail} />
}
