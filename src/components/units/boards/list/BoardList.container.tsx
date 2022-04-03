import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import { MouseEvent } from 'react'
import {
  IQuery,
  IQueryFetchQtBoardsArgs,
} from '../../../../commons/types/generated/types'
import BoardListUI from './BoardList.presenter'
import { FETCH_QT_BOARDS, FETCH_ALL_POST_COUNT } from './BoardList.queries'

export default function BoardList() {
  const router = useRouter()
  const { data, refetch } = useQuery<
    Pick<IQuery, 'fetchQtBoards'>,
    IQueryFetchQtBoardsArgs
  >(FETCH_QT_BOARDS, { variables: { page: 1 } })

  console.log(data)

  const { data: qtBoardCounts } =
    useQuery<Pick<IQuery, 'fetchAllPostCount'>>(FETCH_ALL_POST_COUNT)

  const onClickBoardWrite = () => {
    router.push('/boards/new')
  }
  const onClickBoardDetail = (e: MouseEvent<HTMLDivElement>) => {
    router.push(`/boards/${e.currentTarget.id}`)
  }

  return (
    <BoardListUI
      data={data}
      refetch={refetch}
      qtBoardCounts={qtBoardCounts}
      onClickBoardWrite={onClickBoardWrite}
      onClickBoardDetail={onClickBoardDetail}
    />
  )
}
