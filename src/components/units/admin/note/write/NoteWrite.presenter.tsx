import * as CH from './NoteWrite.styles'

export default function NoteWriteUI(props) {
  return (
    <CH.Wrapper>
      <CH.NoteWriteHeader>
        <span className="NoteTitle">공지사항 작성</span>
        <button className="CancelButton" onClick={props.onClickNoteList}>
          취소하기
        </button>
        <button className="SubmitButton">작성하기</button>
      </CH.NoteWriteHeader>
      <CH.NoteWriteBody>
        <input className="NoteWriteTitle" placeholder="제목" />
        <textarea
          className="NoteWriteContents"
          placeholder="본문 내용을 작성해주세요"
        />
      </CH.NoteWriteBody>
    </CH.Wrapper>
  )
}
