import { useMutation, useQuery } from '@apollo/client'
import { useState } from 'react'
import {
  IMutation,
  IMutationCreateReplyArgs,
  IQuery,
  IQueryFetchReCommentsArgs,
} from '../../../commons/types/generated/types'
import BoardCommentsReplyUI from './boardcommentsreply.presenter'
import { CREATE_REPLY, FETCH_RE_COMMENTS } from './boardcommentsreply.queries'
import { notification } from 'antd'

export default function BoardCommentsReply(props) {
  //   const [commentId, setCommentId] = useState('')
  const [contents, setContents] = useState('')
  const { data, refetch } = useQuery<
    Pick<IQuery, 'fetchReComments'>,
    IQueryFetchReCommentsArgs
  >(FETCH_RE_COMMENTS, { variables: { commentId: props.id, page: 1 } })
  const [createReply] = useMutation<
    Pick<IMutation, 'createReply'>,
    IMutationCreateReplyArgs
  >(CREATE_REPLY)
  console.log(props.id)
  const onChangeReComment = (e) => {
    setContents(e.target.value)
  }

  const submitReComment = async () => {
    try {
      const result = await createReply({
        variables: {
          commentId: props.id,
          contents,
        },
        refetchQueries: [
          {
            query: FETCH_RE_COMMENTS,
            variables: { page: 1, commentId: props.id },
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

  return (
    <BoardCommentsReplyUI
      data={data}
      submitReComment={submitReComment}
      onChangeReComment={onChangeReComment}
    />
  )
}
