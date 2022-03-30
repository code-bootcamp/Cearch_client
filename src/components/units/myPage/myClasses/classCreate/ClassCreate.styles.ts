import styled from '@emotion/styled'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const BodyWrapper = styled.div`
  margin: 60px 0px 60px 0px;
  padding: 80px 116px 80px 116px;
  width: 957px;
  background-color: #f1f1f1;
  border-radius: 10px;
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

export const EditorWrapper = styled.div`
  width: 725px;
  height: 331px;
  border: 1px solid #bdbdbd;
  border-radius: 3px;
  margin-top: 15px;
  margin-bottom: 45px;
  background-color: #ffffff;
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
