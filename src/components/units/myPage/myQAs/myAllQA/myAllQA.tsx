import * as CH from '../MyQAs.styles'
export default function MyAllQA() {
  const questionAnswer = [
    {
      division: '질문',
      title: '안녕하세요. 질문있습니다. 안녕하세요. 질문있습니다.',
      createAt: '2022-03-21',
    },
    {
      division: '답변',
      title: '안녕하세요. 답변드립니다. 안녕하세요. 답변드립니다.',
      createAt: '2022-03-21',
    },
    {
      division: '질문',
      title: '안녕하세요. 질문있습니다. 안녕하세요. 질문있습니다.',
      createAt: '2022-03-21',
    },
    {
      division: '답변',
      title:
        '안녕하세요. 답변드립니다. 안녕하세요. 답변드립니다.안녕하세요. 답변드립니다. 안녕하세요. 답변드립니다.안녕하세요. 답변드립니다. 안녕하세요. 답변드립니다.안녕하세요. 답변드립니다. 안녕하세요. 답변드립니다.안녕하세요. 답변드립니다. 안녕하세요. 답변드립니다.안녕하세요. 답변드립니다. 안녕하세요. 답변드립니다.안녕하세요. 답변드립니다. 안녕하세요. 답변드립니다.안녕하세요. 답변드립니다. 안녕하세요. 답변드립니다.안녕하세요. 답변드립니다. 안녕하세요. 답변드립니다.안녕하세요. 답변드립니다. 안녕하세요. 답변드립니다.안녕하세요. 답변드립니다. 안녕하세요. 답변드립니다.',
      createAt: '2022-03-21',
    },
    {
      division: '질문',
      title: '안녕하세요. 질문있습니다. 안녕하세요. 질문있습니다.',
      createAt: '2022-03-21',
    },
    {
      division: '답변',
      title: '안녕하세요. 답변드립니다. 안녕하세요. 답변드립니다.',
      createAt: '2022-03-21',
    },
    {
      division: '질문',
      title: '안녕하세요. 질문있습니다. 안녕하세요. 질문있습니다.',
      createAt: '2022-03-21',
    },
    {
      division: '답변',
      title: '안녕하세요. 답변드립니다. 안녕하세요. 답변드립니다.',
      createAt: '2022-03-21',
    },
    {
      division: '질문',
      title: '안녕하세요. 질문있습니다. 안녕하세요. 질문있습니다.',
      createAt: '2022-03-21',
    },
    {
      division: '답변',
      title: '안녕하세요. 답변드립니다. 안녕하세요. 답변드립니다.',
      createAt: '2022-03-21',
    },
  ]
  return (
    <CH.Table>
      <CH.TableHead>
        <CH.TableDivision>구분</CH.TableDivision>
        <CH.TableTitle>제목</CH.TableTitle>
        <CH.TableDate>일자</CH.TableDate>
      </CH.TableHead>
      {questionAnswer.map((el: any, index: number) => {
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
