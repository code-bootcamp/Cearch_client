import * as CH from './NoteDetail.styles'
import { v4 as uuidv4 } from 'uuid'
import ToastViewerPage from '../../../../../commons/libraries/toasteditor/viewer'

export default function NoteDetailUI(props) {
  return (
    <CH.Wrapper>
      <CH.NoteDetailHeader>
        <span className="NoteDetailTitle">공지사항</span>
      </CH.NoteDetailHeader>
      <CH.NoteDetailBody>
        <div className="NoteDetailTitle">{props.data?.fetchNotice.title}</div>
        <div className="NoteDetailContents">
          <ToastViewerPage contents={props.data?.fetchNotice?.contents} />
        </div>
        <div className="ButtonWrapper">
          <button className="BackToListBtn" onClick={props.onClickBackToList}>
            목록으로
          </button>
          <button className="EditBtn" onClick={props.onClickMoveToEditPage}>
            수정하기
          </button>
          <button className="DeleteBtn" onClick={props.deleteNote}>
            삭제하기
          </button>
        </div>
      </CH.NoteDetailBody>
    </CH.Wrapper>
  )
}
