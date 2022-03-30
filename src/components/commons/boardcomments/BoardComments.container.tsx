import { useMutation } from '@apollo/client'
import { useRouter } from 'next/router'
import { ChangeEvent, MouseEvent, useState } from 'react'
import {
  IMutation,
  IMutationCreateCommentsArgs,
  IMutationDeleteCommentsArgs,
  IMutationUpdateCommentsArgs,
} from '../../../commons/types/generated/types'
import BoardCommentsUI from './BoardComments.presenter'
import {
  CREATE_COMMENTS,
  UPDATE_COMMENTS,
  DELETE_COMMENTS,
} from './BoardComments.queries'

export default function BoardComments(props) {
  const router = useRouter()
  const [commentEdit, setCommentEdit] = useState(false)

  const [contents, setContents] = useState('')
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

  const onChangeCommentContents = (e: ChangeEvent<HTMLInputElement>) => {
    setContents(e.target.value)
  }
  const submitComment = async () => {
    try {
      const result = await createComments({
        variables: {
          postId: String(router.query.detail),
          contents,
        },
      })
      alert('댓글 작성을 완료했습니다.')
    } catch (error) {
      alert(`${error.message}`)
    }
  }
  const updateComment = async () => {
    try {
      const result = await updateComments({
        variables: {
          commentId: props.boardData.comments.id,
          contents,
        },
      })
      alert('댓글 수정을 완료했습니다.')
    } catch (error) {
      alert(`${error.message}`)
    }
  }

  const deleteComment = async () => {
    try {
      const result = await deleteComments({
        variables: {
          commentId: props.boardData.comments.id,
        },
      })
      alert('댓글 삭제를 완료했습니다.')
    } catch (error) {
      alert(`${error.message}`)
    }
  }
  const editComment = () => {
    setCommentEdit(true)
  }
  return (
    <BoardCommentsUI
      submitComment={submitComment}
      updateComment={updateComment}
      deleteComment={deleteComment}
      onChangeCommentContents={onChangeCommentContents}
      commentEdit={commentEdit}
      editComment={editComment}
    />
  )
}
