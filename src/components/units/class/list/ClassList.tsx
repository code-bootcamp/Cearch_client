import * as CH from './ClassList.styles'
import StarRoundedIcon from '@mui/icons-material/StarRounded'
import { useQuery } from '@apollo/client'
import {
  IQuery,
  IQueryFetchLectureReviewsArgs,
} from '../../../../commons/types/generated/types'
import { FETCH_LECTURE_REVIEWS } from './ClassList.queries'
import { ratingRound } from '../../../../commons/libraries/utils/utils'

export default function NewClass(props) {
  const { data } = useQuery<
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
        <img src="/images/mentor.jpeg" />
        {/* <span>{props.el.mentor.user.name}</span> */}
        {/* <span>{props.el.mentor.companyName}</span> */}
      </CH.ClassImg>

      <CH.ClassInfo>
        <CH.InfoTop>
          <div>
            <StarRoundedIcon style={{ color: 'gold' }} />{' '}
            <span>
              {ratingRound(props.el.rating)} ({' '}
              {props.el.rating === 0 ? 0 : data?.fetchLectureReviews?.length} )
            </span>
          </div>
          <div className="classState">
            {props.el.classStartDate ? '진행' : '종료'}
          </div>
        </CH.InfoTop>
        <CH.InfoBottom>
          <div className="classCategory">
            {props.el?.joinproductandproductcategory.map(
              (el) => (
                <span key={el.id} style={{ marginRight: '8px' }}>
                  {el.lectureproductcategory.categoryname}
                </span>
              )
            )}
          </div>
          <div className="classTitle">{props.el.classTitle}</div>
          <div className="classDate">{props.el.classRunTime}</div>
        </CH.InfoBottom>
      </CH.ClassInfo>
    </>
  )
}
