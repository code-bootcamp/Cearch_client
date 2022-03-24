import ToastEditorPage from '../../../../../commons/libraries/toasteditor/editor'
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

        <div className="NoteWriteContents">
          <ToastEditorPage />
        </div>
      </CH.NoteWriteBody>
    </CH.Wrapper>
  )
}
