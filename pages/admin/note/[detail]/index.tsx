import NoteDetail from '../../../../src/components/units/admin/note/detail/NoteDetail.container'

export default function NoteDetailPage(props) {
  return <NoteDetail onClickNoteList={props.onClickNoteList} />
}
