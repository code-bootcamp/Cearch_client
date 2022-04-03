import * as CH from '../../Login.styles'
import LockRoundedIcon from '@mui/icons-material/LockRounded'
import LoginImg from '../../../../commons/loginimg/LoginImg'

export default function PasswordResetUI(props) {
  return (
    <CH.Wrapper>
      <CH.ImgWrapper>
        <LoginImg />
      </CH.ImgWrapper>
      <CH.ContentsWrapper>
        <p className="title">새로운 비밀번호를 입력해주세요.</p>
        <div>
          <CH.InputBox>
            <span>비밀번호</span>
            <div>
              <LockRoundedIcon />
              <input type="password" onChange={props.onChangeNewPassword} />
            </div>
          </CH.InputBox>
          <p>{props.errorNewPassword}</p>
          <CH.InputBox>
            <span>비밀번호 확인</span>
            <div>
              <LockRoundedIcon />
              <input
                type="password"
                onChange={props.onChangeCheckNewPassword}
              />
            </div>
          </CH.InputBox>
          <p>{props.errorCheckNewPassword}</p>
          <CH.PasswordReset onClick={props.onClickUpdatePassword}>
            비밀번호 변경
          </CH.PasswordReset>
        </div>
      </CH.ContentsWrapper>
    </CH.Wrapper>
  )
}
