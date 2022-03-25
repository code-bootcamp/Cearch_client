import ToastEditorPage from '../../../../commons/libraries/toasteditor/editor'
import * as CH from './BoardWrite.styles'

export default function BoardWriteUI(props) {
  return (
    <CH.Wrapper>
      <CH.ContentWrapper
        onSubmit={props.handleSubmit(props.onClickSubmitBoard)}
      >
        <div className="contentHeader">
          <div>게시글 등록</div>
          <div>작성자</div>
        </div>
        <div className="contentBody">
          <div>
            <span>
              제목 <span style={{ color: 'red' }}>*</span>
            </span>
            <input
              type="text"
              placeholder="제목을 입력해주세요"
              {...props.register('title')}
            />
          </div>
          <span className="errorMessage">
            {props.formState.errors?.title?.message}
          </span>
          <div>
            <span>
              태그 <span style={{ color: 'red' }}>*</span>
            </span>
            <select className="tag__select" {...props.register('tag')}>
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

            <input
              type="password"
              placeholder="비밀번호를 입력해주세요"
              {...props.register('password')}
            />
          </div>
          <span className="errorMessage">
            {props.formState.errors?.password?.message}
          </span>

          <div className="Contents">
            <ToastEditorPage
              contents={props.contents}
              setContents={props.setContents}
              onClickSubmitBoard={props.onClickSubmitBoard}
            />
          </div>
          <span className="errorMessage" style={{ margin: '0' }}>
            {props.formState.errors?.contents?.message}
          </span>
        </div>

        <CH.RegisterSubmit type="submit">등록하기</CH.RegisterSubmit>
      </CH.ContentWrapper>
    </CH.Wrapper>
  )
}
