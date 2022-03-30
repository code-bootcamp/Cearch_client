import * as CH from '../MyQAs.styles'
import { FETCH_MY_COMMENTS } from '../MyQAs.queries'
import { useQuery } from '@apollo/client'
import {
  IQuery,
  IQueryFetchMyCommentsArgs,
} from '../../../../../commons/types/generated/types'

export default function MyAnswers() {
  const { data: MyAnswerData } = useQuery<
    Pick<IQuery, 'fetchMyComments'>,
    IQueryFetchMyCommentsArgs
  >(FETCH_MY_COMMENTS, { variables: { page: 1 } })
  console.log(MyAnswerData)

  // prettier-ignore
  const answer = [
    { division: '답변', title: '안녕하세요. 답변드립니다. 안녕하세요. 답변드립니다.', createAt: '2022-03-21' },
    { division: '답변', title: '안녕하세요. 답변드립니다. 안녕하세요. 답변드립니다.', createAt: '2022-03-21' },
    { division: '답변', title: '안녕하세요. 답변드립니다. 안녕하세요. 답변드립니다.', createAt: '2022-03-21' },
    { division: '답변', title: '안녕하세요. 답변드립니다. 안녕하세요. 답변드립니다.', createAt: '2022-03-21' },
    { division: '답변', title: '안녕하세요. 답변드립니다. 안녕하세요. 답변드립니다.', createAt: '2022-03-21' },
    { division: '답변', title: '안녕하세요. 답변드립니다. 안녕하세요. 답변드립니다.', createAt: '2022-03-21' },
    { division: '답변', title: '안녕하세요. 답변드립니다. 안녕하세요. 답변드립니다.', createAt: '2022-03-21' },
    { division: '답변', title: '안녕하세요. 답변드립니다. 안녕하세요. 답변드립니다.', createAt: '2022-03-21' },
    { division: '답변', title: '안녕하세요. 답변드립니다. 안녕하세요. 답변드립니다.', createAt: '2022-03-21' },
    { division: '답변', title: '안녕하세요. 답변드립니다. 안녕하세요. 답변드립니다.', createAt: '2022-03-21' },
  ]
  return (
    <CH.Table>
      <CH.TableHead>
        <CH.TableDivision>구분</CH.TableDivision>
        <CH.TableTitle>제목</CH.TableTitle>
        <CH.TableDate>일자</CH.TableDate>
      </CH.TableHead>
      {answer.map((el: any, index: number) => {
        return (
          <CH.TableRow key={index}>
            <CH.TableDivision>{el.division}</CH.TableDivision>
            <CH.TableTitle>{el.title}</CH.TableTitle>
            <CH.TableDate>{el.createAt}</CH.TableDate>
          </CH.TableRow>
        )
      })}
    </CH.Table>
  )
}
