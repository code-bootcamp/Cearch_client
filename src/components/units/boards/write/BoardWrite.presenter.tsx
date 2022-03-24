import * as CH from './BoardWrite.styles'

export default function BoardWriteUI() {
  return (
    <CH.Wrapper>
      <CH.ContentWrapper>
        <div className="contentHeader">
          <div>게시글 등록</div>
          <div>작성자</div>
        </div>
        <div className="contentBody">
          <div>
            <span>
              제목 <span style={{ color: 'red' }}>*</span>
            </span>
            <input type="text" placeholder="제목을 입력해주세요" />
          </div>
          <div>
            <span>
              태그 <span style={{ color: 'red' }}>*</span>
            </span>
            <select className="tag__select">
              <option disabled selected>
                태그를 선택해주세요
              </option>
              <option>tag1</option>
              <option>tag2</option>
              <option>tag3</option>
              <option>tag4</option>
            </select>
          </div>
          <div>
            <span>
              비밀번호 <span style={{ color: 'red' }}>*</span>
            </span>
            <input type="text" placeholder="비밀번호를 입력해주세요" />
          </div>
          <textarea placeholder="내용을 작성해주세요"></textarea>
        </div>
        <div>
          <CH.RegisterSubmit>등록하기</CH.RegisterSubmit>
        </div>
      </CH.ContentWrapper>
    </CH.Wrapper>
  )
}
