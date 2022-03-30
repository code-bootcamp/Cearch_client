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
  SELECT_BEST_COMMENTS,
  UPDATE_QT_LIKE,
} from './BoardDetail.queries'

export default function BoardDetail(props) {
  const router = useRouter()
  const [password, setPassword] = useState('')

  const { data: boardData } = useQuery<
    Pick<IQuery, 'fetchQtBoard'>,
    IQueryFetchQtBoardArgs
  >(FETCH_QT_BOARD)

  const [deleteNonMembersQtBoard] = useMutation<
    Pick<IMutation, 'deleteNonMembersQtBoard'>,
    IMutationDeleteNonMembersQtBoardArgs
  >(DELETE_NON_MEMBERS_QT_BOARD)

  const [deleteQtBoard] = useMutation<
    Pick<IMutation, 'deleteQtBoard'>,
    IMutationDeleteQtBoardArgs
  >(DELETE_QT_BOARD)

  const [selectBestComments] = useMutation<
    Pick<IMutation, 'selectBestComments'>,
    IMutationSelectBestCommentsArgs
  >(SELECT_BEST_COMMENTS)

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
      alert('게시글 좋아요.')
    } catch (error) {
      alert(`${error.message}`)
    }
  }

  const deleteBoard = async () => {
    try {
      const result = await deleteQtBoard({
        variables: {
          postId: String(router.query.detail),
        },
      })
      alert('게시글을 삭제했습니다.')
      router.push(`/boards`)
    } catch (error) {
      alert(`${error.message}`)
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
      alert('게시글을 삭제했습니다.')
      router.push(`/boards`)
    } catch (error) {
      alert(`${error.message}`)
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
