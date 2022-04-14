import * as CH from './Home.styles'
import StarRoundedIcon from '@mui/icons-material/StarRounded'
import { gql, useLazyQuery, useQuery } from '@apollo/client'
import {
  IQuery,
  IQueryFetchLectureReviewsArgs,
} from '../../../commons/types/generated/types'
import { FETCH_LECTURE_REVIEWS } from './Home.queries'
import { ratingRound, Today } from '../../../commons/libraries/utils/utils'

import { v4 as uuid } from 'uuid'
import { useEffect } from 'react'
import { date } from 'yup/lib/locale'

export default function NewClass(props) {
  const { data: ClassReviewsData } = useQuery<
    Pick<IQuery, 'fetchLectureReviews'>,
    IQueryFetchLectureReviewsArgs
  >(FETCH_LECTURE_REVIEWS, {
    variables: {
      lectureId: props.el.id,
    },
  })

  return (
    <>
      <CH.ClassImg>
        <img
          src={props.el.imageURL}
          onError={(e) => {
            e.currentTarget.src = 'images/defaultClass.png'
          }}
        />
        <span>{props.el.mentor?.user?.name}</span>
        <span>{props.el.mentor?.companyName}</span>
      </CH.ClassImg>

      <CH.ClassInfo>
        <CH.InfoTop>
          <div>
            <StarRoundedIcon style={{ color: 'gold' }} />{' '}
            <span>
              {ratingRound(props.el.rating)} ({' '}
              {props.el.rating === 0
                ? 0
                : ClassReviewsData?.fetchLectureReviews?.length}{' '}
              )
            </span>
          </div>
          <div className="classState">
            {props.el.classStartDate > Today(new Date()) ? '진행' : '종료'}
          </div>
        </CH.InfoTop>
        <CH.InfoBottom>
          <div className="classCategory">
            {props.el.joinproductandproductcategory?.map((mapEl) => (
              <span key={mapEl.id} style={{ marginRight: '8px' }}>
                {String(mapEl.lectureproductcategory?.categoryname)}
              </span>
            ))}
          </div>
          <div className="classTitle">{props.el.classTitle}</div>
          <div className="classDate">{props.el.classStartDate}</div>
        </CH.InfoBottom>
      </CH.ClassInfo>
    </>
  )
}
