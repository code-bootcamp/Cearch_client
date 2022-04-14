import styled from '@emotion/styled'
import { breakPoints } from '../../../commons/styles/media'
import GoogleLogin from 'react-google-login'

interface IProps {
  isActive: boolean
}

export const Wrapper = styled.div`
  width: 1200px;
  margin: 0px auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: relative;
  > div {
    width: 100%;
    margin: 80px 0;
    input {
      width: 100%;
    }
  }

  @media ${breakPoints.tablet}, ${breakPoints.mobile} {
    width: 90%;
  }
`

export const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    width: 525px;
  }
  @media ${breakPoints.tablet}, ${breakPoints.mobile} {
    display: none;
  }
`
export const Logo = styled.div`
  width: 170px;
  text-align: center;
  margin: 0 auto 50px !important;
  svg {
    width: 170px;
  }

  @media ${breakPoints.tablet}, ${breakPoints.mobile} {
    margin: 0 auto 30px !important;
  }
`
export const ContentsWrapper = styled.div`
  width: 525px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  .title {
    width: 90%;
    text-align: left;
    font-size: 1.5rem;
    font-weight: 700;
  }

  > form {
    width: 90%;
    margin: 20px auto;
    > div {
      margin: 15px auto 0;
      &:first-of-type {
        margin-top: 0;
      }
    }
  }
  > div {
    width: 90%;
    margin: 20px auto;
    > div {
      margin: 15px auto 0;
      &:first-of-type {
        margin-top: 0;
      }
    }
  }

  .line {
    border-bottom: 1px dashed gray;
    margin: 35px 0 30px;
  }

  .ul {
    padding: 20px 20px 0;
    margin: 0;
    li {
      line-height: 25px;
    }
  }

  @media ${breakPoints.tablet}, ${breakPoints.mobile} {
    margin: 30px 0 80px !important;
    border-radius: 20px;
    padding: 30px;
    box-shadow: 0px 0px 10px 2px #eee;

    .title {
      width: 100%;
      font-size: 1.2rem;
      margin-top: 0px !important;
      margin-bottom: 10px;
    }
    > div {
      width: 100%;
    }
    > form {
      width: 100%;
      margin: 30px auto 0 !important;
    }
  }
  @media ${breakPoints.tablet} {
    padding: 50px 50px;
    width: 600px !important;
  }
  @media ${breakPoints.mobile} {
    padding: 0 !important;
    box-shadow: none;
    width: 100% !important;

    > form {
      margin: 20px auto !important;
    }
  }
`
export const VerificationCode = styled.button`
  width: 220px;
  height: 50px;
  justify-content: center;
  border-radius: 10px;
  border: 1px solid gray;
  background: none;
  cursor: pointer;

  :hover {
    background: #ffa24b;
    color: #fff;
  }
`
export const EmailConfirm = styled.div`
  display: flex;
  flex-direction: column;
  span {
    margin-bottom: 10px;
  }
  > div {
    display: flex;
    align-items: center;
    > div {
      width: 100%;
      display: flex;
      align-items: center;
      border: 1px solid gray;
      border-radius: 10px;
      height: 50px;
      padding: 15px;
      margin-right: 20px;
      svg {
        width: 20px;
        fill: #c8c8c8;
      }
      input {
        border: 0;
        outline: none;
        margin-left: 10px;
      }
    }
    @media ${breakPoints.mobile} {
      > div {
        padding: 10px 15px;
        margin-right: 10px;
      }
      > div:last-of-type {
        width: 200px !important;
      }
    }
    > div:last-of-type {
      width: 220px;
      justify-content: center;
      margin-right: 0;
      cursor: pointer;

      :hover {
        background: #ffa24b;
        color: white;
        border: 0;
      }
    }
  }
`
export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  span {
    margin-bottom: 10px;
  }
  > div {
    height: 50px;
    display: flex;
    align-items: center;
    border: 1px solid gray;
    border-radius: 10px;
    padding: 15px;
    @media ${breakPoints.mobile} {
      padding: 10px 15px !important;
    }
    svg {
      width: 20px;
      fill: #c8c8c8;
    }
    input {
      border: 0;
      outline: none;
      margin-left: 10px;
    }
  }
  .nameInput {
    margin-left: 0;
  }
`
export const PhoneInputBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

  span {
    margin-bottom: 10px;
  }
  > div {
    display: flex;
    align-items: center;

    > div {
      width: 100%;
      display: flex;
      align-items: center;
      border: 1px solid gray;
      border-radius: 10px;
      height: 50px;
      padding: 15px;
      margin-right: 20px;
      svg {
        width: 20px;
        fill: #c8c8c8;
      }
      input {
        border: 0;
        outline: none;
        margin-left: 10px;
      }
    }
  }
`
export const CreateButton = styled.button`
  width: 100%;
  height: 60px;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: 0.2rem;
  border: 0;
  border-radius: 10px;
  cursor: ${(props) => (props.isActive === true ? 'pointer' : 'auto')};
  background: ${(props: IProps) => (props.isActive === true ? '#ffa24b' : '')};
  color: ${(props: IProps) => (props.isActive === true ? 'white' : '')};

  @media ${breakPoints.mobile} {
    height: 50px;
  }
`
export const GoogleButton = styled(GoogleLogin)`
  width: 300px;
  height: 45px;
  margin: 15px auto !important;
  box-shadow: none !important;
  border-radius: 10px !important;
  border: 1px solid gray !important;
  background: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  line-height: 50px;
  opacity: 1 !important;
  color: #222;

  :hover {
    background: #ffa24b;
    /* color: #fff; */
  }
  .socialIcon {
    width: 20px;
    margin-right: 10px;
  }

  > div {
    background: none !important;
    padding: 0 !important;
    display: flex;
    align-items: center;
  }

  @media ${breakPoints.mobile} {
    width: 100%;
  }
`
export const LoginButton = styled.button`
  width: 100%;
  height: 60px;
  margin: 15px 0 !important;
  text-align: center;
  background: #ffa24b;
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: 0.2rem;
  color: #fff;
  border: 0;
  border-radius: 10px;
  cursor: pointer;
  @media ${breakPoints.mobile} {
    height: 50px;
  }
`
export const JoinButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px 0 !important;

  button {
    width: 45%;
    height: 45px;
    border: 1px solid gray;
    border-radius: 10px;
    background: none;
    cursor: pointer;
    :hover {
      background: #ffa24b;
      color: #fff;
    }
  }

  @media ${breakPoints.mobile} {
    button {
      width: 48%;
    }
  }
`
export const PasswordReset = styled.button`
  width: 100%;
  height: 60px;
  text-align: center;
  background: #ffa24b;
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: 0.2rem;
  color: #fff;
  border: 0;
  border-radius: 10px;
  margin-top: 50px;
  cursor: pointer;

  @media ${breakPoints.mobile} {
    font-size: 1.2rem;
    height: 50px;
  }
`

export const ErrorMessage = styled.span`
  font-size: 0.8rem;
  color: red;
`
