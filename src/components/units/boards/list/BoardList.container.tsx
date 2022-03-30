import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import {
  IQuery,
  IQueryFetchQtBoardsArgs,
} from '../../../../commons/types/generated/types'
import BoardListUI from './BoardList.presenter'
import { FETCH_QT_BOARDS } from './BoardList.queries'

export default function BoardList() {
  const router = useRouter()
  const { data, refetch } = useQuery<
    Pick<IQuery, 'fetchQtBoards'>,
    IQueryFetchQtBoardsArgs
  >(FETCH_QT_BOARDS)

  const onClickBoardWrite = () => {
    router.push('/boards/new')
  }
  const onClickBoardDetail = () => {
    router.push('/boards/[datail]')
  }

  return (
    <BoardListUI
      data={data}
      onClickBoardWrite={onClickBoardWrite}
      onClickBoardDetail={onClickBoardDetail}
    />
  )
}
