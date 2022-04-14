import { useEffect, useState } from 'react'
import * as CH from './ClosedClasses.styles'
import { Popover } from 'antd'
import 'antd/dist/antd.css'
import ReviewModal from './ClosedClasses.modal'
import { gql, useQuery } from '@apollo/client'
import {
  IQuery,
  IQueryFetchLectureReviewArgs,
} from '../../../../../../commons/types/generated/types'

export const FETCH_LECTURE_REVIEW = gql`
  query fetchLectureReview($lectureId: String!) {
    fetchLectureReview(lectureId: $lectureId) {
      id
      reviewContents
      starRating
    }
  }
`

export default function ClosedClasses(props) {
  const { data: reviewData, refetch: reviewDataRefetch } = useQuery<
    Pick<IQuery, 'fetchLectureReview'>,
    IQueryFetchLectureReviewArgs
  >(FETCH_LECTURE_REVIEW, { variables: { lectureId: props.el.id } })

  const [isVisible, setIsVisible] = useState(false)
  const popOver = () => {
    setIsVisible((prev) => !prev)
  }

  const reviewId = reviewData?.fetchLectureReview.id

  const content = (
    <ReviewModal
      el={props.el}
      reviewData={reviewData}
      reviewId={reviewId}
      reviewDataRefetch={reviewDataRefetch}
      setIsVisible={setIsVisible}
    />
  )
  return (
    <CH.ClassContents>
      <CH.ClassContentsLeft>
        <CH.ClassImage></CH.ClassImage>
        <CH.ClassContentsList>
          <CH.ClassContentsListTop>
            <CH.ClassCategory>
              <span className="Categories">
                {
                  props.el.joinproductandproductcategory[0]
                    .lectureproductcategory.categoryname
                }
              </span>
              {props.el.joinproductandproductcategory[1] && (
                <span className="Categories">
                  {
                    props.el.joinproductandproductcategory[1]
                      .lectureproductcategory.categoryname
                  }
                </span>
              )}
            </CH.ClassCategory>
            <CH.ClassTitle>{props.el.classTitle}</CH.ClassTitle>
          </CH.ClassContentsListTop>
          <CH.ClassDate>{props.el.classStartDate}</CH.ClassDate>
        </CH.ClassContentsList>
      </CH.ClassContentsLeft>
      <Popover
        style={{ borderRadius: '30px' }}
        content={content}
        placement="bottomRight"
        trigger="click"
        visible={isVisible}
      >
        {reviewData?.fetchLectureReview.id ? (
          <CH.ReviewButton onClick={popOver}>
            {isVisible ? '닫기' : '나의 후기'}
          </CH.ReviewButton>
        ) : (
          <CH.ClassButton onClick={popOver}>
            {isVisible ? '닫기' : '후기 쓰기'}
          </CH.ClassButton>
        )}
      </Popover>
      {/* <CH.ClassButton onClick={onClickToggle}>후기쓰기</CH.ClassButton> */}
    </CH.ClassContents>
  )
}
