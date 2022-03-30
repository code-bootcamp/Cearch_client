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
        <button className="SubmitButton" onClick={props.submitNotice}>
          작성하기
        </button>
      </CH.NoteWriteHeader>
      <CH.NoteWriteBody>
        <input
          className="NoteWriteTitle"
          placeholder="제목"
          onChange={props.onChangeNoticeTitle}
        />

        <div className="NoteWriteContents">
          <ToastEditorPage
            contents={props.contents}
            setContents={props.setContents}
          />
        </div>
      </CH.NoteWriteBody>
    </CH.Wrapper>
  )
}
