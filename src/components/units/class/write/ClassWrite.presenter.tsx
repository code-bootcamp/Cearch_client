import * as CH from './ClassWrite.styled'

export default function ClassWriteUI() {
  return (
    <CH.Wrapper>
      <div className="write">
        <div>
          <p>사전 질문 작성 및 신청</p>
          <p className="title">클래스 제목</p>
        </div>
        <div>
          <p>
            이름 <span style={{ color: 'red' }}>*</span>
          </p>
          <input type="text" />
        </div>
        <div>
          <p>
            휴대전화 번호 <span style={{ color: 'red' }}>*</span>
          </p>
          <input type="text" />
        </div>
        <div>
          <p>
            직업 <span style={{ color: 'red' }}>*</span>
          </p>
          <select name="상태">
            <option selected disabled>
              직업을 선택해주세요
            </option>
            <option>학생</option>
            <option>직장인</option>
            <option>주부</option>
            <option>자영업자</option>
            <option>무직</option>
          </select>
        </div>
        <div>
          <p>
            나이 <span style={{ color: 'red' }}>*</span>
          </p>
          <input type="text" />
        </div>
        <div>
          <p>
            신청경로 <span style={{ color: 'red' }}>*</span>
          </p>
          <input type="text" />
        </div>
        <div>
          <p>
            자기소개 <span style={{ color: 'red' }}>*</span>
          </p>
          <textarea></textarea>
        </div>
        <div>
          <p>사전질문</p>
          <textarea></textarea>
        </div>
        <button> 수강 신청</button>
      </div>
    </CH.Wrapper>
  )
}
