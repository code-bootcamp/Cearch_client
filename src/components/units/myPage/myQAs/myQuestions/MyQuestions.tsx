import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import { getMyDateTime } from '../../../../../commons/libraries/utils/utils'
import {
  IQuery,
  IQueryFetchMyQtArgs,
} from '../../../../../commons/types/generated/types'
import { FETCH_MY_QT } from '../MyQAs.queries'
import * as CH from '../MyQAs.styles'

export default function MyQuestions() {
  const router = useRouter()
  const { data: MyQuestionData } = useQuery<
    Pick<IQuery, 'fetchMyQt'>,
    IQueryFetchMyQtArgs
  >(FETCH_MY_QT, { variables: { page: 1 } })
  console.log(MyQuestionData)

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
      {MyQuestionData?.fetchMyQt.map((el: any) => {
        return (
          <CH.TableRow onClick={onClickBoardDetail} id={el.id} key={el.id}>
            <CH.TableDivision>질문</CH.TableDivision>
            <CH.TableTitle>{el.title}</CH.TableTitle>
            <CH.TableDate>{getMyDateTime(el.createdAt)}</CH.TableDate>
          </CH.TableRow>
        )
      })}
    </CH.Table>
  )
}
