import * as CH from './NoteList.styles'
import { v4 as uuidv4 } from 'uuid'
import { DateToString } from '../../../../../commons/libraries/utils/utils'
import Pagination from '../../../../commons/pagination/pagination'

export default function NoteListUI(props) {
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
          {props.data?.fetchNotices.map((el, index) => (
            <CH.NoteWrapper
              key={uuidv4()}
              onClick={props.onClickNoticeDetail}
              id={el.id}
            >
              <div>{index + 1}</div>
              <CH.NoteTitle>{el.title}</CH.NoteTitle>
              <CH.NoteContents>{el.contents}</CH.NoteContents>
              <CH.NoteCreatedAt>
                {el.updatedAt !== el.createdAt
                  ? `${DateToString(el.updatedAt)} (수정)`
                  : `${DateToString(el.createdAt)}`}
              </CH.NoteCreatedAt>
            </CH.NoteWrapper>
          ))}
        </CH.ContentsBody>
      </CH.ContentsWrapper>
      <CH.ContentsFooter>
        <Pagination
          refetch={props.refetch}
          counts={props.noticeCount?.fetchAllNoticeCount}
        />
      </CH.ContentsFooter>
    </CH.Wrapper>
  )
}
