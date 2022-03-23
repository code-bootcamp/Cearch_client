import * as CH from './NoteList.styles'
import { v4 as uuidv4 } from 'uuid'

export default function NoteListUI(props) {
  const testCode = [
    {
      division: '공지',
      title:
        '안녕하세요. C`earch 운영팀입니다. 안녕하세요. C`earch 운영팀입니다.',
      contents:
        '안녕하세요. C`earch 운영팀입니다. 안녕하세요. C`earch 운영팀입니다.',
      createAt: '2022-03-21',
    },
    {
      division: '공지',
      title:
        '안녕하세요. C`earch 운영팀입니다. 안녕하세요. C`earch 운영팀입니다.',
      contents:
        '안녕하세요. C`earch 운영팀입니다. 안녕하세요. C`earch 운영팀입니다.',
      createAt: '2022-03-21',
    },
    {
      division: '공지',
      title:
        '안녕하세요. C`earch 운영팀입니다. 안녕하세요. C`earch 운영팀입니다.',
      contents:
        '안녕하세요. C`earch 운영팀입니다. 안녕하세요. C`earch 운영팀입니다.',
      createAt: '2022-03-21',
    },
    {
      division: '공지',
      title:
        '안녕하세요. C`earch 운영팀입니다. 안녕하세요. C`earch 운영팀입니다.',
      contents:
        '안녕하세요. C`earch 운영팀입니다. 안녕하세요. C`earch 운영팀입니다.',
      createAt: '2022-03-21',
    },
    {
      division: '공지',
      title:
        '안녕하세요. C`earch 운영팀입니다. 안녕하세요. C`earch 운영팀입니다.',
      contents:
        '안녕하세요. C`earch 운영팀입니다. 안녕하세요. C`earch 운영팀입니다.',
      createAt: '2022-03-21',
    },
    {
      division: '공지',
      title:
        '안녕하세요. C`earch 운영팀입니다. 안녕하세요. C`earch 운영팀입니다.',
      contents:
        '안녕하세요. C`earch 운영팀입니다. 안녕하세요. C`earch 운영팀입니다.',
      createAt: '2022-03-21',
    },
    {
      division: '공지',
      title:
        '안녕하세요. C`earch 운영팀입니다. 안녕하세요. C`earch 운영팀입니다.',
      contents:
        '안녕하세요. C`earch 운영팀입니다. 안녕하세요. C`earch 운영팀입니다.',
      createAt: '2022-03-21',
    },
    {
      division: '공지',
      title:
        '안녕하세요. C`earch 운영팀입니다. 안녕하세요. C`earch 운영팀입니다.',
      contents:
        '안녕하세요. C`earch 운영팀입니다. 안녕하세요. C`earch 운영팀입니다.',
      createAt: '2022-03-21',
    },
    {
      division: '공지',
      title:
        '안녕하세요. C`earch 운영팀입니다. 안녕하세요. C`earch 운영팀입니다.',
      contents:
        '안녕하세요. C`earch 운영팀입니다. 안녕하세요. C`earch 운영팀입니다.',
      createAt: '2022-03-21',
    },
    {
      division: '공지',
      title:
        '안녕하세요. C`earch 운영팀입니다. 안녕하세요. C`earch 운영팀입니다.',
      contents:
        '안녕하세요. C`earch 운영팀입니다. 안녕하세요. C`earch 운영팀입니다.',
      createAt: '2022-03-21',
    },
  ]
  return (
    <CH.Wrapper>
      <CH.NoteHeader>
        <span className="NoteTitle">공지사항</span>
        <CH.WriteNoteButton onClick={props.onClickNoteWrite}>
          작성하기
        </CH.WriteNoteButton>
      </CH.NoteHeader>
      <CH.ContentsWrapper>
        <CH.ContentsHeader>
          <span>NO.</span>
          <span>제목</span>
          <span>본문 내용</span>
          <span>날짜</span>
        </CH.ContentsHeader>
        <CH.ContentsBody>
          {testCode.map((el, index) => (
            <CH.NoteWrapper key={uuidv4()} onClick={props.onClickNoteDetail}>
              <div>{index + 1}</div>
              <CH.NoteTitle>{el.title}</CH.NoteTitle>
              <CH.NoteContents>{el.contents}</CH.NoteContents>
              <CH.NoteCreatedAt>{el.createAt}</CH.NoteCreatedAt>
            </CH.NoteWrapper>
          ))}
        </CH.ContentsBody>
      </CH.ContentsWrapper>
      <CH.ContentsFooter>
        <div> {`< 1 2 3 4 5 6 >`}</div>
      </CH.ContentsFooter>
    </CH.Wrapper>
  )
}
