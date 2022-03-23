import NoteWriteUI from './NoteWrite.presenter'

export default function NoteWrite(props) {
  return <NoteWriteUI onClickNoteList={props.onClickNoteList} />
}
