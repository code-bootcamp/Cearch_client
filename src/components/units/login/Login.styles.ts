import styled from '@emotion/styled'
import { breakPoints } from '../../../commons/styles/media'

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
  margin: 0 auto 30px;
  svg {
    width: 170px;
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
    width: 100%;
    text-align: left;
    font-size: 1.25rem;
    font-weight: 700;

    @media ${breakPoints.tablet}, ${breakPoints.mobile} {
      margin-bottom: 30px;
    }
  }

  > div {
    width: 100%;
    margin: 20px auto;
    > div {
      margin: 25px auto;
      &:first-of-type {
        margin-top: 0;
      }
    }
    @media ${breakPoints.tablet}, ${breakPoints.mobile} {
      margin: 0 auto !important;
    }
  }

  @media ${breakPoints.tablet}, ${breakPoints.mobile} {
    border-radius: 20px;
    padding: 30px;
    box-shadow: 0px 0px 10px 2px #eee;
    margin-top: 30px 0 !important;
  }

  .line {
    border-bottom: 1px dashed gray;
    margin: 35px 0 30px;
  }

  .ul {
    padding: 0 20px;
    li {
      line-height: 25px;
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
    > div:last-of-type {
      width: 220px;
      justify-content: center;
      margin-right: 0;
    }
  }
`
export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  span {
    margin-bottom: 10px;
  }
  > div {
    display: flex;
    align-items: center;
    border: 1px solid gray;
    border-radius: 10px;
    /* height: 50px; */
    padding: 15px;
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
  background: #ffa24b;
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: 0.2rem;
  color: #fff;
  border: 0;
  border-radius: 10px;
  cursor: pointer;
`
export const GoogleButton = styled.button`
  width: 300px;
  height: 45px;
  margin: 15px auto !important;
  border-radius: 10px;
  border: 1px solid gray;
  background: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  :hover {
    background: #ffa24b;
    color: #fff;
  }
  .socialIcon {
    width: 20px;
    margin-right: 10px;
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
  border-radius: 10px;
  cursor: pointer;
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
  border-radius: 10px;
  margin-top: 50px;
  cursor: pointer;
`
