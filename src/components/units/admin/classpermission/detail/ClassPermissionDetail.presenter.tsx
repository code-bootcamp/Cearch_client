import * as CH from './ClassPermissionDetail.styles'
import { v4 as uuidv4 } from 'uuid'

export default function ClassPermissionDetailUI(props) {
  const UserData = {
    name: '홍길동',
    className: '기초부터 시작하는 데이터 분석',
    createdAt: '2022-03-15',
    cost: '150,000',
    classInfo:
      'A to Z, 동에번쩍 서에번쩍 홍길동과 함께하는 기초 강의. 데이터 사이언스 \n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam ut turpis nunc ut est habitasse. Fusce convallis lacinia egestas elementum lacus penatibus sed est neque. Arcu lorem ac tortor, volutpat nunc donec. Nulla ornare facilisi diam amet. Ullamcorper elit quis accumsan sit.',
    curriculum:
      '클래스는 이렇게 진행됩니다, 가나다라마바사 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam ut turpis nunc ut est habitasse. Fusce convallis lacinia egestas elementum lacus penatibus sed est neque. Arcu lorem ac tortor, volutpat nunc donec. Nulla ornare facilisi diam amet. Ullamcorper elit quis accumsan sit.',
  }
  return (
    <CH.Wrapper>
      <CH.ClassPermissionDetail__Header>
        <span className="NoteTitle">{UserData.name}님의 클래스 개설 신청</span>
        <button className="RefuseButton">거절하기</button>
        <button className="SubmitButton">승인하기</button>
      </CH.ClassPermissionDetail__Header>
      <CH.ClassPermissionDetail__Body>
        <div className="DetailTitle">
          <div className="DetailTitle__Contents">
            <span className="ContentsTitle">클래스명</span>
            <span>{UserData.className}</span>
          </div>
          <div className="DetailTitle__Contents">
            <span className="ContentsTitle">멘토이름</span>
            <span>{UserData.name}</span>
          </div>
        </div>

        <div className="DetailTitle">
          <div className="DetailTitle__Contents">
            <span className="ContentsTitle">신청일</span>
            <span>{UserData.createdAt}</span>
          </div>
          <div className="DetailTitle__Contents">
            <span className="ContentsTitle">수강료</span>
            <span>{UserData.cost} 원</span>
          </div>
        </div>

        <div className="ClassInfo">
          <div>클래스소개</div>
          <div>{UserData.classInfo}</div>
        </div>
        <div className="ClassInfo">
          <div>커리큘럼</div>
          <div>{UserData.curriculum}</div>
        </div>
      </CH.ClassPermissionDetail__Body>
      <CH.ClassPermissionDetail__Footer>
        <button
          className="BackToList"
          onClick={props.onClickClassPermissionList}
        >
          목록으로
        </button>
      </CH.ClassPermissionDetail__Footer>
    </CH.Wrapper>
  )
}
