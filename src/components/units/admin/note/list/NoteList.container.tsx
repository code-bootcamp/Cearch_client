import NoteListUI from "./NoteList.presenter"
import { useRouter } from "next/router";

export default function NoteList(props) {
  const router=useRouter()
  const onClickMoveToNoteWrite=()=>{
    router.push('/admin/note/new')
  }
  return (
  <NoteListUI 
  onClickMoveToNoteWrite={onClickMoveToNoteWrite}
  onClickNoteWrite={props.onClickNoteWrite}
  onClickNoteDetail={props.onClickNoteDetail}
  />
  )
}
