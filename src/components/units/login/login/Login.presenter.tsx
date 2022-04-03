import * as CH from '../Login.styles'
import LockRoundedIcon from '@mui/icons-material/LockRounded'
import MailRoundedIcon from '@mui/icons-material/MailRounded'
import LoginImg from '../../../commons/loginimg/LoginImg'

export default function LoginUI(props) {
  return (
    <CH.Wrapper>
      <CH.ImgWrapper>
        <LoginImg />
      </CH.ImgWrapper>
      <CH.ContentsWrapper
        style={{
          paddingTop: '50px',
          paddingBottom: '50px',
          margin: '30px 0 100px',
        }}
      >
        <form onSubmit={props.handleSubmit(props.onClickLogin)}>
          <CH.Logo>
            <svg
              width="172"
              height="45"
              viewBox="0 0 172 45"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M152.985 19.7646L150.953 21.8544L152.985 23.8281"
                stroke="#FFA24B"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M160.604 23.8291L162.636 21.7393L160.604 19.7656"
                stroke="#FFA24B"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M158.064 17.9873L155.524 25.6064"
                stroke="#FFA24B"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle
                cx="156.667"
                cy="21.6673"
                r="12.0833"
                stroke="#FFA24B"
                strokeWidth="3"
              />
              <path
                d="M165.176 30.1748L169.874 34.8732"
                stroke="#FFA24B"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20.526 18.434C19.03 16.608 17.182 15.695 14.982 15.695C14.014 15.695 13.112 15.871 12.276 16.223C11.462 16.575 10.758 17.059 10.164 17.675C9.57 18.269 9.097 18.984 8.745 19.82C8.415 20.656 8.25 21.558 8.25 22.526C8.25 23.516 8.415 24.429 8.745 25.265C9.097 26.101 9.57 26.827 10.164 27.443C10.78 28.059 11.495 28.543 12.309 28.895C13.123 29.247 14.003 29.423 14.949 29.423C17.017 29.423 18.876 28.543 20.526 26.783V34.439L19.866 34.67C18.876 35.022 17.952 35.275 17.094 35.429C16.236 35.605 15.389 35.693 14.553 35.693C12.837 35.693 11.187 35.374 9.603 34.736C8.041 34.076 6.655 33.163 5.445 31.997C4.257 30.809 3.3 29.412 2.574 27.806C1.848 26.178 1.485 24.407 1.485 22.493C1.485 20.579 1.837 18.83 2.541 17.246C3.267 15.64 4.224 14.265 5.412 13.121C6.622 11.955 8.019 11.053 9.603 10.415C11.187 9.755 12.848 9.425 14.586 9.425C15.576 9.425 16.544 9.535 17.49 9.755C18.458 9.953 19.47 10.272 20.526 10.712V18.434ZM38.7747 15.596H31.0857V19.754H38.3457V25.232H31.0857V29.522H38.7747V35H24.6177V10.118H38.7747V15.596ZM56.9681 25.76L54.0641 17.477L51.1601 25.76H56.9681ZM58.6841 30.677H49.4441L47.9591 35H41.0621L50.5331 10.118H57.5951L67.0661 35H60.1691L58.6841 30.677ZM76.3641 21.239H77.5851C78.8611 21.239 79.8401 20.975 80.5221 20.447C81.2041 19.919 81.5451 19.16 81.5451 18.17C81.5451 17.18 81.2041 16.421 80.5221 15.893C79.8401 15.365 78.8611 15.101 77.5851 15.101H76.3641V21.239ZM90.5871 35H82.5351L76.3641 25.43V35H69.8961V10.118H79.9611C81.3471 10.118 82.5571 10.327 83.5911 10.745C84.6251 11.141 85.4721 11.691 86.1321 12.395C86.8141 13.099 87.3201 13.913 87.6501 14.837C88.0021 15.761 88.1781 16.751 88.1781 17.807C88.1781 19.699 87.7161 21.239 86.7921 22.427C85.8901 23.593 84.5481 24.385 82.7661 24.803L90.5871 35ZM110.76 18.434C109.264 16.608 107.416 15.695 105.216 15.695C104.248 15.695 103.346 15.871 102.51 16.223C101.696 16.575 100.992 17.059 100.398 17.675C99.8044 18.269 99.3314 18.984 98.9794 19.82C98.6494 20.656 98.4844 21.558 98.4844 22.526C98.4844 23.516 98.6494 24.429 98.9794 25.265C99.3314 26.101 99.8044 26.827 100.398 27.443C101.014 28.059 101.729 28.543 102.543 28.895C103.357 29.247 104.237 29.423 105.183 29.423C107.251 29.423 109.11 28.543 110.76 26.783V34.439L110.1 34.67C109.11 35.022 108.186 35.275 107.328 35.429C106.47 35.605 105.623 35.693 104.787 35.693C103.071 35.693 101.421 35.374 99.8374 34.736C98.2754 34.076 96.8894 33.163 95.6794 31.997C94.4914 30.809 93.5344 29.412 92.8084 27.806C92.0824 26.178 91.7194 24.407 91.7194 22.493C91.7194 20.579 92.0714 18.83 92.7754 17.246C93.5014 15.64 94.4584 14.265 95.6464 13.121C96.8564 11.955 98.2534 11.053 99.8374 10.415C101.421 9.755 103.082 9.425 104.82 9.425C105.81 9.425 106.778 9.535 107.724 9.755C108.692 9.953 109.704 10.272 110.76 10.712V18.434ZM122.384 19.721H131.723V10.118H138.191V35H131.723V24.737H122.384V35H115.916V10.118H122.384V19.721Z"
                fill="#FFA24B"
              />
            </svg>
          </CH.Logo>
          <CH.InputBox>
            <span>이메일</span>
            <div>
              <MailRoundedIcon />
              <input type="email" {...props.register('email')} />
            </div>
          </CH.InputBox>
          <p>{props.formState?.errors?.email?.message}</p>
          <CH.InputBox>
            <span>비밀번호</span>
            <div>
              <LockRoundedIcon />
              <input type="password" {...props.register('password')} />
            </div>
          </CH.InputBox>
          <p>{props.formState?.errors?.password?.message}</p>
          <div className="line"></div>
          <CH.GoogleButton type="button">
            <img className="socialIcon" src="/images/google.png" />
            구글로 로그인하기
          </CH.GoogleButton>
          <CH.LoginButton type="submit">LOGIN</CH.LoginButton>
          <CH.JoinButton>
            <button type="button" onClick={props.onClickJoin}>
              회원가입
            </button>
            <button type="button" onClick={props.onClickSearchMembership}>
              회원정보 찾기
            </button>
          </CH.JoinButton>
        </form>
      </CH.ContentsWrapper>
    </CH.Wrapper>
  )
}
