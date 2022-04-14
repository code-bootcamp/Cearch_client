import * as CH from './MentorPermissionDetail.styles'
import { v4 as uuidv4 } from 'uuid'

export default function MentorPermissionDetailUI(props) {
  const UserData = {
    name: '홍길동',
    category: '데이터 분석',
    createdAt: '2022-03-15',
    uploadedFile: [
      'testFile1',
      'testFile2',
      'testFile3',
      'testFile4',
      'testFile5',
      'testFile6',
      'testFile7',
    ],
  }
  return (
    <CH.Wrapper>
      <CH.MentorPermissionDetail__Header>
        <span className="NoteTitle">{UserData.name}님의 멘토 신청</span>
        <button className="RefuseButton">거절하기</button>
        <button className="SubmitButton">승인하기</button>
      </CH.MentorPermissionDetail__Header>
      <CH.MentorPermissionDetail__Body>
        <CH.UserImg>
          <img src="/avatar.png" />
        </CH.UserImg>
        <CH.MentorPermissionDetail__Contents>
          <div className="ContentsTitle">
            <span className="contents">이름</span>
            <span className="contents">멘토링 분야</span>
            <span className="contents">신청일</span>
            <span className="contents">첨부파일</span>
          </div>
          <div className="ContentsBody">
            <span className="contents">{UserData.name}</span>
            <span className="contents">{UserData.category}</span>
            <span className="contents">{UserData.createdAt}</span>
            <div className="UploadedFile">
              {UserData.uploadedFile.map((el) => (
                <span className="contents" key={uuidv4()}>
                  {el}
                </span>
              ))}
            </div>
          </div>
        </CH.MentorPermissionDetail__Contents>
      </CH.MentorPermissionDetail__Body>
      <CH.MentorPermissionDetail__Footer>
        <button
          className="BackToList"
          onClick={props.onClickMentorPermissionList}
        >
          목록으로
        </button>
      </CH.MentorPermissionDetail__Footer>
    </CH.Wrapper>
  )
}
