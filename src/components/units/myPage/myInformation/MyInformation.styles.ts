import styled from '@emotion/styled'

export const Wrapper = styled.div`
  z-index: 1;
`
export const BodyWrapper = styled.div`
  margin-bottom: 100px;
  padding: 80px 100px 80px 100px;
  width: 957px;
  background-color: #f1f1f1;
  border-radius: 10px;
  box-shadow: 0px 4px 22px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
`
export const Title = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  margin-bottom: 70px;
`
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 45px;
`
export const RowLabel = styled.div`
  width: 135px;
  margin-right: 65px;
  font-weight: 400;
  font-size: 16px;
  display: flex;
  align-items: center;
  color: #333333;
`

export const InputBackground = styled.div`
  width: 524px;
  background-color: white;
  border-radius: 3px;
`

export const DefaultInput = styled.input`
  width: 524px;
  height: 60px;
  background-color: white;
  border: 1px solid #bdbdbd;
  border-radius: 3px;
  padding: 0px 15px 0px 14px;
`

export const TextArea = styled.textarea`
  width: 725px;
  height: 331px;
  border: 1px solid #bdbdbd;
  border-radius: 3px;
  padding: 45px;
  margin-top: 15px;
  margin-bottom: 45px;
`
export const SubmitButton = styled.button`
  width: 725px;
  height: 67px;
  border: 0px none;
  border-radius: 10px;
  font-weight: 700;
  font-size: 24px;
  color: #ffffff;
  background-color: #ffa24b;
  :hover {
    cursor: pointer;
  }
`

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 32px;
`

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  > div {
    margin-bottom: 13px;
    > div {
      margin-bottom: 10px;
    }
  }
`

export const Bottom = styled.div`
  padding-left: 34px;
`

export const Avatar = styled.div`
  width: 134px;
  height: 134px;
  border-radius: 70%;
  overflow: hidden;
`

export const ChangePictureButton = styled.div`
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  margin-top: 32px;
`

export const PasswordButton = styled.button`
  margin-top: 40px;
  width: 136px;
  height: 36px;
  background: #ffa24b;
  border-radius: 25px;
  border: none;
  color: #ffffff;
`

export const Genders = styled.div`
  display: flex;
  justify-content: space-between;
  width: 524px;
`
export const GenderButton = styled.button`
  width: 240px;
  height: 45px;
  border: 1px solid #9d9d9d;
  border-radius: 10px;
  background-color: #ffffff;
  :hover {
    background: #c4c4c4;
    color: #f2f2f2;
  }
  .selected {
    background: #c4c4c4;
    color: #f2f2f2;
  }
`
