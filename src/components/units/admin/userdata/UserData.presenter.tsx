import GraphForAdmin from '../../../commons/graph/GraphForAdmin'
import * as CH from './UserData.styles'

export default function UserDataUI(props) {
  return (
    // <CH.Wrapper>

    <CH.ContentsWrapper>
      <CH.ContentsHeader>
        <span className="NoteTitle">유저 데이터 통계</span>
      </CH.ContentsHeader>
      <CH.UserData2>
        <CH.UserData2__Detail>
          <span>오늘 신규 가입자</span>
          <div>
            <CH.DataDetail__Num>
              {props.newUserCount?.fetchNewUserCount}{' '}
            </CH.DataDetail__Num>
            <span>명</span>
          </div>
        </CH.UserData2__Detail>
        <CH.UserData2__Detail>
          <span>오늘 등록된 질문 개수</span>
          <div>
            <CH.DataDetail__Num>
              {props.newPostCount?.fetchNewPostCount}{' '}
            </CH.DataDetail__Num>
            <span>개</span>
          </div>
        </CH.UserData2__Detail>
        <CH.UserData2__Detail>
          <span>오늘 멘토 승인된 유저 수</span>
          <div>
            <CH.DataDetail__Num>19 </CH.DataDetail__Num>
            <span>명</span>
          </div>
        </CH.UserData2__Detail>
      </CH.UserData2>

      <CH.UserData3>
        <span>최근 일주일간 데이터 변화</span>

        <GraphForAdmin
          newPostCount={props.newPostCount}
          newUserCount={props.newUserCount}
        />
      </CH.UserData3>
    </CH.ContentsWrapper>
    // </CH.Wrapper>
  )
}
