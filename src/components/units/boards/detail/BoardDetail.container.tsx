import { useMutation, useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import { useRef, useState } from 'react'
import {
  IMutation,
  IMutationDeleteNonMembersQtBoardArgs,
  IMutationDeleteQtBoardArgs,
  IMutationSelectBestCommentsArgs,
  IMutationUpdateQtLikeArgs,
  IQuery,
  IQueryFetchQtBoardArgs,
} from '../../../../commons/types/generated/types'
import BoardDetailUI from './BoardDetail.presenter'
import {
  DELETE_NON_MEMBERS_QT_BOARD,
  DELETE_QT_BOARD,
  FETCH_QT_BOARD,
  UPDATE_QT_LIKE,
} from './BoardDetail.queries'
import { notification } from 'antd'

export default function BoardDetail(props) {
  const router = useRouter()
  const [password, setPassword] = useState('')

  const { data: boardData, refetch } = useQuery<
    Pick<IQuery, 'fetchQtBoard'>,
    IQueryFetchQtBoardArgs
  >(FETCH_QT_BOARD, { variables: { postId: String(router.query.detail) } })

  const [deleteNonMembersQtBoard] = useMutation<
    Pick<IMutation, 'deleteNonMembersQtBoard'>,
    IMutationDeleteNonMembersQtBoardArgs
  >(DELETE_NON_MEMBERS_QT_BOARD)

  const [deleteQtBoard] = useMutation<
    Pick<IMutation, 'deleteQtBoard'>,
    IMutationDeleteQtBoardArgs
  >(DELETE_QT_BOARD)

  const [likeBoard] = useMutation<
    Pick<IMutation, 'updateQtLike'>,
    IMutationUpdateQtLikeArgs
  >(UPDATE_QT_LIKE)

  const onClickLikeBoard = async () => {
    try {
      const result = await likeBoard({
        variables: {
          postId: String(router.query.detail),
        },
      })
      notification.success({
        message: '게시글 좋아요!',
        top: 80,
      })
      refetch()
      // alert('게시글 좋아요.')
    } catch (error) {
      if (error.message === 'Unauthorized')
        notification.error({ message: `로그인이 필요합니다!`, top: 80 })
      else notification.error({ message: `${error.message}`, top: 80 })
    }
  }

  const deleteBoard = async () => {
    try {
      const result = await deleteQtBoard({
        variables: {
          postId: String(router.query.detail),
        },
      })
      notification.success({ message: '게시글을 삭제했습니다.', top: 80 })
      router.push(`/boards`)
    } catch (error) {
      notification.error({ message: `${error.message}`, top: 80 })
    }
  }

  const deleteBoardNonMember = async () => {
    try {
      const result = await deleteNonMembersQtBoard({
        variables: {
          postId: String(router.query.detail),
          password,
        },
      })
      notification.success({ message: '게시글을 삭제했습니다.', top: 80 })
      router.push(`/boards`)
    } catch (error) {
      notification.error({ message: `${error.message}`, top: 80 })
    }
  }

  const onClickMoveToList = () => {
    router.push('/boards')
  }
  const onClickMoveToUpdate = () => {
    router.push(`/boards/${String(router.query.detail)}/edit`)
  }

  return (
    <BoardDetailUI
      data={props.data}
      refetch={refetch}
      boardData={boardData}
      deleteBoard={deleteBoard}
      deleteBoardNonMember={deleteBoardNonMember}
      onClickLikeBoard={onClickLikeBoard}
      setPassword={setPassword}
      onClickMoveToList={onClickMoveToList}
      onClickMoveToUpdate={onClickMoveToUpdate}
    />
  )
}
