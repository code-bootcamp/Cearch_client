import { gql, useMutation } from '@apollo/client'
import styled from '@emotion/styled'
import { Rate, Modal } from 'antd'
import { useState } from 'react'
import { breakPoints } from '../../../../../../commons/styles/media'
import {
  IMutation,
  IMutationCreateLectureReviewArgs,
  IMutationDeleteLectureReviewArgs,
  IMutationUpdateLectureReviewArgs,
} from '../../../../../../commons/types/generated/types'
import { FETCH_LECTURE_REVIEW } from './ClosedClasses'

const Wrapper = styled.div`
  width: 417px;
  height: 554px;
  padding: 52px 55px;
  display: flex;
  flex-direction: column;
  @media ${breakPoints.mobile} {
    width: 300px;
    height: 450px;
    padding: 30px;
  }
`

const Title = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 10px;
  @media ${breakPoints.mobile} {
    font-size: 15px;
  }
`
const Star = styled.div`
  margin: 0px 20px;
  .anticon svg {
    display: inline-block;
    font-size: 2rem;
    margin: 7px;
  }
  .ant-rate {
    color: #ffa24b;
  }

  @media ${breakPoints.mobile} {
    margin: 0px 15px;
    .anticon svg {
      display: inline-block;
      font-size: 1.5rem;
      margin: 5px;
    }
    .ant-rate {
      color: #ffa24b;
    }
  }
`
const ReviewInput = styled.textarea`
  width: 308px;
  height: 262px;
  background-color: #f2f2f2;
  padding: 29px 27px;
  margin: 10px 0px;
  border: none;
  @media ${breakPoints.mobile} {
    width: 100%;
    padding: 20px;
    font-size: 14px;
  }
`

const ReviewContents = styled.div`
  width: 308px;
  height: 262px;
  background-color: #ffffff;
  padding: 29px 27px;
  margin: 10px 0px;
  border: 1px solid #ffa24b;
  border-radius: 30px;
  @media ${breakPoints.mobile} {
    width: 100%;
    padding: 20px;
    font-size: 14px;
  }
`

const ReviewSubmitButton = styled.button`
  margin-top: 10px;
  width: 308px;
  height: 59px;
  padding: 20px 122px;
  background-color: #ffa24b;
  border: none;
  border-radius: 10px;
  color: white;
  :hover {
    cursor: pointer;
  }
  @media ${breakPoints.mobile} {
    width: 100%;
    padding: 0;
  }
`
const ReviewButton = styled.button`
  border-radius: 10px;
  width: 45%;
  height: 36px;
  color: #ffa24b;
  font-weight: 400;
  font-size: 16px;
  background-color: white;
  border: 1px solid #ffa24b;
  :hover {
    cursor: pointer;
    background-color: #ffa24b;
    color: #ffffff;
    border: none;
  }
  @media ${breakPoints.tablet} {
    font-size: 15px;
  }
  @media ${breakPoints.mobile} {
    font-size: 14px;
    height: 25px;
    margin: 0px 0px 0px 0px;
  }
`
const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px 0px;
`

const CREATE_LECTURE_REVIEW = gql`
  mutation createLectureReview($createReviewInput: CreateLectureReviewInput!) {
    createLectureReview(createReviewInput: $createReviewInput) {
      id
    }
  }
`

const UPDATE_LECTURE_REVIEW = gql`
  mutation updateLectureReview($updateReviewInput: UpdateLectureReviewInput!) {
    updateLectureReview(updateReviewInput: $updateReviewInput) {
      id
    }
  }
`

const DELETE_LECTURE_REVIEW = gql`
  mutation deleteLectureReview($reviewId: String!) {
    deleteLectureReview(reviewId: $reviewId)
  }
`

export default function ReviewModal(props) {
  const [starRating, setStarRating] = useState(0) // 별점 기본점수 0점
  const [reviewContents, setReviewContents] = useState('')
  const [isEdit, setIsEdit] = useState(false)

  const [createLectureReview] = useMutation<
    Pick<IMutation, 'createLectureReview'>,
    IMutationCreateLectureReviewArgs
  >(CREATE_LECTURE_REVIEW)

  const [updateLectureReview] = useMutation<
    Pick<IMutation, 'updateLectureReview'>,
    IMutationUpdateLectureReviewArgs
  >(UPDATE_LECTURE_REVIEW)

  const [deleteLectureReview] = useMutation<
    Pick<IMutation, 'deleteLectureReview'>,
    IMutationDeleteLectureReviewArgs
  >(DELETE_LECTURE_REVIEW)

  const onChangeRating = (value: number) => {
    // 별점
    setStarRating(value)
    console.log(starRating)
  }

  const onChangeReview = (event) => {
    setReviewContents(event.target.value)
    // console.log(review)
  }

  const onClickUpdate = () => {
    setIsEdit(true)
  }

  const onClickDelete = async () => {
    try {
      const DeleteResult = await deleteLectureReview({
        variables: {
          reviewId: props.reviewData?.fetchLectureReview.id,
        },
        refetchQueries: [{ query: FETCH_LECTURE_REVIEW }],
      })
      Modal.success({ content: '리뷰를 삭제했습니다.' })
      props.setIsVisible(false)
      setIsEdit(false)
      props.reviewDataRefetch()
    } catch (error) {
      console.log(error.message)
    }
  }

  const onClickSubmit = async () => {
    try {
      const ReviewResult = await createLectureReview({
        variables: {
          createReviewInput: {
            reviewContents,
            starRating,
            lectureProductId: props.el.id,
          },
        },
      })
      props.reviewDataRefetch()
      console.log(ReviewResult)
      Modal.success({ content: '리뷰를 등록해주셔서 감사합니다!' })
      setIsEdit(false)
      props.setIsVisible(false)
    } catch (error) {
      Modal.error({ content: error.message })
    }
  }

  const onClickUpdateSubmit = async () => {
    try {
      const UpdateResult = await updateLectureReview({
        variables: {
          updateReviewInput: {
            reviewContents,
            starRating,
            reviewId: props.reviewData?.fetchLectureReview.id,
          },
        },
      })
      props.reviewDataRefetch()
      console.log(UpdateResult)
      Modal.success({ content: '리뷰를 수정했습니다.' })
      props.setIsVisible(false)
      setIsEdit(false)
    } catch (error) {
      Modal.error({ content: error.message })
    }
  }
  return (
    <>
      {props.reviewId && isEdit === false ? (
        <Wrapper>
          <Title>{props.el.title}</Title>
          <Star>
            <Rate
              defaultValue={props.reviewData?.fetchLectureReview.starRating}
              disabled
            />
          </Star>
          <ReviewContents>
            {props.reviewData?.fetchLectureReview.reviewContents}
          </ReviewContents>
          <Row>
            <ReviewButton onClick={onClickUpdate}>수정하기</ReviewButton>
            <ReviewButton onClick={onClickDelete}>삭제하기</ReviewButton>
          </Row>
        </Wrapper>
      ) : (
        <Wrapper>
          <Title>{props.el.title}</Title>
          <Star>
            <Rate
              onChange={onChangeRating}
              defaultValue={props.reviewData?.fetchLectureReview.starRating}
            />
          </Star>
          <ReviewInput
            onChange={onChangeReview}
            placeholder="수강 후기를 작성해주세요."
            defaultValue={props.reviewData?.fetchLectureReview?.reviewContents}
          />

          {isEdit ? (
            <ReviewSubmitButton onClick={onClickUpdateSubmit}>
              수정하기
            </ReviewSubmitButton>
          ) : (
            <ReviewSubmitButton onClick={onClickSubmit}>
              등록하기
            </ReviewSubmitButton>
          )}
        </Wrapper>
      )}
    </>
  )
}
