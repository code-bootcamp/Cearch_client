import styled from '@emotion/styled'
import { width } from '@mui/system'
import { Rate } from 'antd'
import { breakPoints } from '../../../../../../commons/styles/media'

const Wrapper = styled.div`
  width: 417px;
  height: 554px;
  padding: 52px 55px;
  display: flex;
  flex-direction: column;
  @media ${breakPoints.mobile} {
    width: 300px;
    height: 450px;
    padding: 30px;
  }
`

const Title = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 10px;
  @media ${breakPoints.mobile} {
    font-size: 15px;
  }
`
const Star = styled.div`
  margin: 0px 20px;
  .anticon svg {
    display: inline-block;
    font-size: 2rem;
    margin: 7px;
  }
  .ant-rate {
    color: #ffa24b;
  }

  @media ${breakPoints.mobile} {
    margin: 0px 15px;
    .anticon svg {
      display: inline-block;
      font-size: 1.5rem;
      margin: 5px;
    }
    .ant-rate {
      color: #ffa24b;
    }
  }
`

const ReviewInput = styled.textarea`
  width: 308px;
  height: 262px;
  background-color: #f2f2f2;
  padding: 29px 27px;
  margin: 10px 0px;
  @media ${breakPoints.mobile} {
    width: 100%;
    padding: 20px;
    font-size: 14px;
  }
`

const ReviewSubmitButton = styled.button`
  margin-top: 10px;
  width: 308px;
  height: 59px;
  padding: 20px 122px;
  background-color: #ffa24b;
  border-radius: 10px;
  color: white;
  @media ${breakPoints.mobile} {
    width: 100%;
    padding: 0;
  }
`

export default function Modal(props) {
  return (
    <Wrapper>
      <Title>{props.el.title}</Title>
      <Star>
        <Rate />
      </Star>
      <ReviewInput placeholder="수강 후기를 작성해주세요." />
      <ReviewSubmitButton>작성 완료</ReviewSubmitButton>
    </Wrapper>
  )
}
