import * as CH from '../MyQAs.styles'
import { FETCH_MY_COMMENTS } from '../MyQAs.queries'
import { useQuery } from '@apollo/client'
import {
  IQuery,
  IQueryFetchMyCommentsArgs,
} from '../../../../../commons/types/generated/types'
import { getMyDateTime } from '../../../../../commons/libraries/utils/utils'
import { useRouter } from 'next/router'

export default function MyAnswers() {
  const router = useRouter()

  const { data: MyAnswerData } = useQuery<
    Pick<IQuery, 'fetchMyComments'>,
    IQueryFetchMyCommentsArgs
  >(FETCH_MY_COMMENTS, { variables: { page: 1 } })
  console.log(MyAnswerData)

  const onClickBoardDetail = (event) => {
    router.push(`/boards/${event.currentTarget.id}`)
  }

  return (
    <CH.Table>
      <CH.TableHead>
        <CH.TableDivision>구분</CH.TableDivision>
        <CH.TableTitle>제목</CH.TableTitle>
        <CH.TableDate>일자</CH.TableDate>
      </CH.TableHead>
      {MyAnswerData?.fetchMyComments.map((el: any, index: number) => {
        return (
          <CH.TableRow
            onClick={onClickBoardDetail}
            id={el.qtBoard.id}
            key={index}
          >
            <CH.TableDivision>답변</CH.TableDivision>
            <CH.TableTitle>{el.qtBoard.title}</CH.TableTitle>
            <CH.TableDate>{getMyDateTime(el.qtBoard.createdAt)}</CH.TableDate>
          </CH.TableRow>
        )
      })}
    </CH.Table>
  )
}
