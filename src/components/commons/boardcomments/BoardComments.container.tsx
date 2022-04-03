import { useMutation, useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import { ChangeEvent, MouseEvent, useRef, useState } from 'react'
import {
  IMutation,
  IQuery,
  IMutationCreateCommentsArgs,
  IMutationDeleteCommentsArgs,
  IMutationUpdateCommentsArgs,
  IMutationSelectBestCommentsArgs,
} from '../../../commons/types/generated/types'
import BoardCommentsUI from './BoardComments.presenter'
import {
  FETCH_COMMENTS,
  CREATE_COMMENTS,
  UPDATE_COMMENTS,
  DELETE_COMMENTS,
  SELECT_BEST_COMMENTS,
} from './BoardComments.queries'
import { notification } from 'antd'

export default function BoardComments(props) {
  const router = useRouter()
  const [commentEdit, setCommentEdit] = useState(false)
  const [contents, setContents] = useState('')
  const contentsRef = useRef(contents)
  const { data: commentsData, refetch } = useQuery(FETCH_COMMENTS, {
    variables: { page: 1, postId: String(router.query.detail) },
  })

  const [createComments] = useMutation<
    Pick<IMutation, 'createComments'>,
    IMutationCreateCommentsArgs
  >(CREATE_COMMENTS)
  const [updateComments] = useMutation<
    Pick<IMutation, 'updateComments'>,
    IMutationUpdateCommentsArgs
  >(UPDATE_COMMENTS)
  const [deleteComments] = useMutation<
    Pick<IMutation, 'deleteComments'>,
    IMutationDeleteCommentsArgs
  >(DELETE_COMMENTS)

  const [selectBestComments] = useMutation<
    Pick<IMutation, 'selectBestComments'>,
    IMutationSelectBestCommentsArgs
  >(SELECT_BEST_COMMENTS)

  const onChangeCommentContents = (e: ChangeEvent<HTMLInputElement>) => {
    setContents(e.target.value)
  }
  const onChangeEditComments = (e) => {
    contentsRef.current = String(e.target.value)
    console.log(contentsRef.current)
  }

  const submitComment = async () => {
    try {
      const result = await createComments({
        variables: {
          postId: String(router.query.detail),
          contents,
        },
        refetchQueries: [
          {
            query: FETCH_COMMENTS,
            variables: { page: 1, postId: String(router.query.detail) },
          },
        ],
      })
      notification.success({
        message: '댓글 작성을 완료했어요!',
        top: 80,
      })
    } catch (error) {
      notification.error({ message: `${error.message}`, top: 80 })
    }
  }
  const updateComment = async (e) => {
    try {
      const result = await updateComments({
        variables: {
          commentId: e.target.id,
          contents: contentsRef.current,
        },
        refetchQueries: [
          {
            query: FETCH_COMMENTS,
            variables: { page: 1, postId: String(router.query.detail) },
          },
        ],
      })
      notification.success({
        message: '댓글 수정을 완료했어요!',
        top: 80,
      })
    } catch (error) {
      notification.error({ message: `${error.message}`, top: 80 })
    }
  }

  const deleteComment = async (e) => {
    try {
      const result = await deleteComments({
        variables: {
          commentId: e.target.id,
        },
        refetchQueries: [
          {
            query: FETCH_COMMENTS,
            variables: { page: 1, postId: String(router.query.detail) },
          },
        ],
      })
      notification.success({
        message: '댓글 삭제를 완료했어요!',
        top: 80,
      })
    } catch (error) {
      notification.error({ message: `${error.message}`, top: 80 })
    }
  }
  const selectComment = async (e) => {
    try {
      await selectBestComments({
        variables: { commentId: e.target.id },
        refetchQueries: [
          {
            query: FETCH_COMMENTS,
            variables: { page: 1, postId: String(router.query.detail) },
          },
        ],
      })
      notification.success({
        message: '댓글 채택!',
        top: 80,
      })
    } catch (error) {
      notification.error({ message: `${error.message}`, top: 80 })
    }
  }
  console.log(commentsData)
  return (
    <BoardCommentsUI
      commentsData={commentsData}
      setContents={setContents}
      onChangeEditComments={onChangeEditComments}
      submitComment={submitComment}
      updateComment={updateComment}
      deleteComment={deleteComment}
      onChangeCommentContents={onChangeCommentContents}
      commentEdit={commentEdit}
      selectComment={selectComment}
    />
  )
}
