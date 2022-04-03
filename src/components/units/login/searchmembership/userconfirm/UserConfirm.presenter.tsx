import * as CH from '../../Login.styles'
import MailRoundedIcon from '@mui/icons-material/MailRounded'
import LoginImg from '../../../../commons/loginimg/LoginImg'

export default function UserConfirmUI(props) {
  return (
    <CH.Wrapper>
      <CH.ImgWrapper>
        <LoginImg />
      </CH.ImgWrapper>
      <CH.ContentsWrapper>
        <p className="title">이메일 인증을 진행해주세요.</p>
        <div>
          <CH.InputBox>
            <span>이메일</span>
            <div>
              <MailRoundedIcon />
              <input type="text" onChange={props.onChangeEmail}></input>
            </div>
            <CH.VerificationCode
              onClick={props.onClickSendEmail}
              style={{ width: '100%', marginTop: '10px' }}
            >
              인증코드 발송
            </CH.VerificationCode>
          </CH.InputBox>
          <p style={{ color: 'red' }}>{props.errorEmail}</p>
          <CH.EmailConfirm>
            <span>이메일 인증코드</span>
            <div>
              <div>
                <MailRoundedIcon />
                <input type="text" onChange={props.onChangeEmailToken}></input>
              </div>
              <div onClick={props.onClickEmailCheck}>인증번호 확인</div>
            </div>
          </CH.EmailConfirm>
          <div className="ul">
            <ul>
              <li>메일이 오지 않는 경우, 메일을 재요청해주세요.</li>
              <li>재발송 시, 기존 인증 번호는 만료됩니다.</li>
            </ul>
          </div>
          <CH.CreateButton
            onClick={props.onClickNextButton}
            isActive={props.isActive}
          >
            다음
          </CH.CreateButton>
        </div>
      </CH.ContentsWrapper>
    </CH.Wrapper>
  )
}
