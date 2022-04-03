import { useMutation, useQuery } from '@apollo/client'
import {
  IMutation,
  IMutationFollowToggleArgs,
} from '../../../../commons/types/generated/types'
import MentorDetailUI from './MentorDetail.presenter'
import { FETCH_MENTOR, FOLLOW_TOGGLE } from './MentorDetail.queries'
import {
  IQuery,
  IQueryFetchMentorArgs,
} from '../../../../commons/types/generated/types'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
export default function MentorDetail() {
  const router = useRouter()
  const [followToggle] = useMutation<
    Pick<IMutation, 'followToggle'>,
    IMutationFollowToggleArgs
  >(FOLLOW_TOGGLE)
  const currentPage = 1
  const { data } = useQuery<Pick<IQuery, 'fetchMentor'>, IQueryFetchMentorArgs>(
    FETCH_MENTOR,
    { variables: { page: currentPage } }
  )
  const [mentorDetailData, setMentorDetailData] = useState({})
  const onClickFollowMentor = async () => {
    try {
      const result = await followToggle({
        variables: {
          mentoId: '123',
        },
      })
      alert('멘토 팔로우!')
    } catch (error) {
      alert(`${error.message}`)
    }
  }

  const mentorDetail = () => {
    for (let i = 0; i < 10; i++) {
      if (data?.fetchMentor.length < i) return
      if (data?.fetchMentor[i]?.id === String(router.query.detail)) {
        const detailData = data?.fetchMentor[i]
        setMentorDetailData(detailData)
      }
    }
  }
  useEffect(() => {
    mentorDetail()
  }, [data])
  console.log(mentorDetailData)
  return (
    <MentorDetailUI
      data={mentorDetailData}
      onClickFollowMentor={onClickFollowMentor}
    />
  )
}
