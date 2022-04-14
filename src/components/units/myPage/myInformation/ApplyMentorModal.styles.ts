import styled from '@emotion/styled'
import { breakPoints } from '../../../../commons/styles/media'

export const Wrapper = styled.div`
  width: 100%;
  padding: 80px 0px 80px 0px;
  background-color: white;
  border: 0.7507px solid #ffa24b;

  /* border-radius: 10px; */
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;
  @media ${breakPoints.tablet} {
    width: 100%;
    background-color: white;
    padding: 8% 10%;
    box-shadow: none;
  }
  @media ${breakPoints.mobile} {
    width: 100%;
    background-color: white;
    padding: 8% 0%;
    box-shadow: none;
  }
`
export const Contents = styled.div`
  display: flex;
  flex-direction: column;
  @media ${breakPoints.tablet} {
    width: 100%;
  }
  @media ${breakPoints.mobile} {
    width: 80%;
  }
`

export const TitleLabel = styled.div`
  > div {
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    margin-bottom: 70px;
  }
  display: flex;
  justify-content: space-between;
`

export const Input = styled.input`
  width: 524px;
  height: 56px;
  background-color: #ffffff;
  border: 1px solid #9d9d9d;
  border-radius: 10px;
  margin-bottom: 15px;
  @media ${breakPoints.mobile} {
    width: 100%;
  }
`

export const Button = styled.button`
  margin-top: 55px;
  width: 524px;
  height: 67px;
  background-color: #ffa24b;
  border-radius: 10px;
  border: none;
  font-weight: 700;
  font-size: 24px;
  color: #ffffff;
  @media ${breakPoints.mobile} {
    width: 100%;
  }
`

export const CancelButton = styled.div`
  :hover {
    cursor: pointer;
  }
`
