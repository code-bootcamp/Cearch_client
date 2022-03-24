import NoteDetailUI from './NoteDetail.presenter'

export default function NoteDetail(props) {
  return <NoteDetailUI onClickNoteList={props.onClickNoteList} />
}
