import styled from '@emotion/styled'

export const Wrapper = styled.div`
  width: 1200px;
  margin: 0px auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  > div {
    width: 100%;
    margin: 80px 0;
    input {
      width: 100%;
    }
  }
`

export const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    width: 525px;
  }
`
export const ContentsWrapper = styled.div`
  > div {
    width: 525px;
    margin: 20px auto;
    > * {
      margin: 25px auto;
    }
  }
  .logo {
    width: 120px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    margin: 0 auto;
    font-size: 1.5rem;
    font-weight: 700;
    border-radius: 10px;
    background: #eee;
  }
  .line {
    border-bottom: 1px dashed gray;
    margin: 35px 0 30px;
  }
  .title {
    margin-bottom: 70px;
    font-size: 1.25rem;
    font-weight: 700;
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
    background: #1e2744;
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
    height: 50px;
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
  background: #1e2744;
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
    background: #1e2744;
    color: #fff;
  }
  .socialIcon {
    width: 20px;
    margin-right: 10px;
  }
`
export const LoginButton = styled.button`
  width: 100%;
  height: 60px;
  margin: 15px 0 !important;
  text-align: center;
  background: #1e2744;
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
      background: #1e2744;
      color: #fff;
    }
  }
`
export const PasswordReset = styled.button`
  width: 100%;
  height: 60px;
  text-align: center;
  background: #1e2744;
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: 0.2rem;
  color: #fff;
  border-radius: 10px;
  margin: 50px 0;
  cursor: pointer;
`
