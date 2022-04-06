import { ChakraProvider } from '@chakra-ui/react'
import * as CH from '../Login.styles'
import LockRoundedIcon from '@mui/icons-material/LockRounded'
import MailRoundedIcon from '@mui/icons-material/MailRounded'
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded'
import LoginImg from '../../../commons/loginimg/LoginImg'
import { IJoinUIProps } from './Join.types'

export default function JoinUI(props) {
  return (
    <ChakraProvider>
      <CH.Wrapper>
        <CH.ImgWrapper>
          <LoginImg />
        </CH.ImgWrapper>
        <CH.ContentsWrapper>
          <p className="title">회원가입</p>
          <form onSubmit={props.handleSubmit(props.onClickCreateUser)}>
            <CH.InputBox>
              <span>이름</span>
              <div>
                <input
                  type=""
                  className="nameInput"
                  {...props.register('name')}
                ></input>
              </div>
            </CH.InputBox>
            <CH.ErrorMessage>
              {props.formState?.errors?.name?.message}
            </CH.ErrorMessage>
            <CH.InputBox>
              <span>이메일</span>
              <div>
                <MailRoundedIcon />
                <input type="email" {...props.register('email')}></input>
              </div>
            </CH.InputBox>
            <CH.ErrorMessage>
              {props.formState?.errors?.email?.message}
            </CH.ErrorMessage>
            <CH.PhoneInputBox>
              <span>핸드폰 번호</span>
              <div>
                <div>
                  <PhoneRoundedIcon />
                  <input
                    type="tel"
                    // id={props.autoHyphen}
                    {...props.register('phoneNumber')}
                    onChange={props.onChangePhoneNumber}
                  />
                </div>
                <CH.VerificationCode onClick={props.onclickSendPhoneNumber}>
                  인증번호 발송
                </CH.VerificationCode>
              </div>
            </CH.PhoneInputBox>
            <CH.ErrorMessage>
              {props.formState?.errors?.phoneNumber?.message}
            </CH.ErrorMessage>
            <CH.PhoneInputBox>
              <span>인증번호</span>
              <div>
                <div>
                  <PhoneRoundedIcon />
                  <input type="text" onChange={props.onChangeToken}></input>
                </div>
                <CH.VerificationCode onClick={props.onClickTokenCheck}>
                  인증번호 확인
                </CH.VerificationCode>
              </div>
            </CH.PhoneInputBox>

            <CH.InputBox>
              <span>비밀번호</span>
              <div>
                <LockRoundedIcon />
                <input type="password" {...props.register('password')}></input>
              </div>
            </CH.InputBox>
            <CH.ErrorMessage>
              {props.formState?.errors?.password?.message}
            </CH.ErrorMessage>
            <CH.InputBox>
              <span>비밀번호 확인</span>
              <div>
                <LockRoundedIcon />
                <input
                  type="password"
                  {...props.register('checkPassword')}
                ></input>
              </div>
            </CH.InputBox>
            <CH.ErrorMessage>
              {props.formState?.errors?.checkPassword?.message}
            </CH.ErrorMessage>
            <CH.InputBox>
              <span>성별</span>
              <div style={{ border: '0', padding: '0' }}>
                <label>
                  <input
                    type="radio"
                    name="radioGender"
                    style={{ marginRight: '10px', width: '10px' }}
                    value="M"
                    {...props.register('gender')}
                    defaultChecked
                  />
                  남자
                </label>
                <label>
                  <input
                    type="radio"
                    name="radioGender"
                    style={{ marginRight: '10px', width: '10px' }}
                    value="F"
                    {...props.register('gender')}
                  />
                  여자
                </label>
              </div>
            </CH.InputBox>
            <CH.ErrorMessage
              style={{
                display: 'inline-block',
                width: '100%',
                marginBottom: '15px',
              }}
            >
              {props.formState?.errors?.gender?.message}
            </CH.ErrorMessage>
            <CH.CreateButton
              style={
                props.isActive
                  ? { cursor: 'pointer', background: '#ffa24b', color: '#fff' }
                  : {
                      cursor: 'auto',
                      background: 'white',
                      border: '1px solid black',
                    }
              }
            >
              JOIN
            </CH.CreateButton>
          </form>
        </CH.ContentsWrapper>
      </CH.Wrapper>
    </ChakraProvider>
  )
}
