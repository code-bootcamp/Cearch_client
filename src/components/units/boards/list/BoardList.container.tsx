import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import { ChangeEvent, MouseEvent, useState } from 'react'
import {
  IQuery,
  IQueryFetchQtBoardsArgs,
  IQuerySearchQtArgs,
} from '../../../../commons/types/generated/types'
import BoardListUI from './BoardList.presenter'
import {
  FETCH_QT_BOARDS,
  FETCH_ALL_POST_COUNT,
  SEARCH_QT,
} from './BoardList.queries'
import _ from 'lodash'

export default function BoardList() {
  const router = useRouter()
  const [search, setSearch] = useState('')

  const { data, refetch } = useQuery<
    Pick<IQuery, 'fetchQtBoards'>,
    IQueryFetchQtBoardsArgs
  >(FETCH_QT_BOARDS, { variables: { page: 1 } })

  const { data: searchedBoard, refetch: searchedBoardRefetch } = useQuery<
    Pick<IQuery, 'searchQt'>,
    IQuerySearchQtArgs
  >(SEARCH_QT, { variables: { search } })

  const { data: qtBoardCounts } =
    useQuery<Pick<IQuery, 'fetchAllPostCount'>>(FETCH_ALL_POST_COUNT)

  const onClickBoardWrite = () => {
    router.push('/boards/new')
  }
  const onClickBoardDetail = (e: MouseEvent<HTMLDivElement>) => {
    router.push(`/boards/${e.currentTarget.id}`)
  }
  // const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
  //   setSearch(e.target.value)
  // }
  const getDebounce = _.debounce((data) => {
    searchedBoardRefetch({ search: data })
    setSearch(data)
  }, 500)

  const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    getDebounce(e.target.value)
  }

  return (
    <BoardListUI
      data={data}
      searchedBoard={searchedBoard}
      refetch={refetch}
      search={search}
      setSearch={setSearch}
      qtBoardCounts={qtBoardCounts}
      onClickBoardWrite={onClickBoardWrite}
      onClickBoardDetail={onClickBoardDetail}
      onChangeSearch={onChangeSearch}
    />
  )
}
