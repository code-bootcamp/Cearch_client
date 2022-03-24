import styled from '@emotion/styled'

const Wrapper = styled.div`
  width: 957px;
  padding: 80px 0px 80px 0px;
  background-color: #f2f2f2;
  border: 0.7507px solid #c4c4c4;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;
`
const Contents = styled.div`
  display: flex;
  flex-direction: column;
`

const TitleLabel = styled.div`
  > div {
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    margin-bottom: 70px;
  }
  display: flex;
  justify-content: space-between;
`

const InputLabel = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #333333;
  margin-bottom: 10px;
`

const Input = styled.input`
  width: 524px;
  height: 56px;
  background-color: #ffffff;
  border: 1px solid #9d9d9d;
  border-radius: 10px;
  margin-bottom: 15px;
`

const Button = styled.button`
  margin-top: 55px;
  width: 524px;
  height: 67px;
  background-color: #1e2744;
  border-radius: 10px;
  border: none;
  font-weight: 700;
  font-size: 24px;
  color: #ffffff;
`

export default function PasswordModal(props) {
  return (
    <Wrapper>
      <Contents>
        <TitleLabel>
          <div>비밀번호 변경</div>
          <div onClick={props.toggle}>x</div>
        </TitleLabel>
        <InputLabel>현재 비밀번호 입력</InputLabel>
        <Input type="password" />
        <InputLabel>새 비밀번호 입력</InputLabel>
        <Input type="password" />
        <InputLabel>새 비밀번호 확인</InputLabel>
        <Input type="password" />
        <Button>비밀번호 변경하기</Button>
      </Contents>
    </Wrapper>
  )
}
