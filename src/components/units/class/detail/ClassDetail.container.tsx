import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import {
  IQuery,
  IQueryFetchLectureProductArgs,
  IQueryFetchLectureReviewsArgs,
} from '../../../../commons/types/generated/types'
import ClassDetailUI from './ClassDetail.presenter'
import { FETCH_LECTURE_PRODUCT } from './ClassDetail.queries'

export default function ClassDetail() {
  const router = useRouter()

  const { data } = useQuery(FETCH_LECTURE_PRODUCT, {
    variables: { lectureproductId: String(router.query.detail), page: 1 },
  })

  const onClickClassRequest = () => {
    router.push(`/class/${router.query.detail}/new`)
  }

  return <ClassDetailUI data={data} onClickClassRequest={onClickClassRequest} />
}
