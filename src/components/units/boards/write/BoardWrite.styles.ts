import styled from '@emotion/styled'
import { breakPoints } from '../../../../commons/styles/media'

export const Wrapper = styled.div`
  width: 1200px;
  margin: 0 auto;
  padding: 10px 0;
  @media ${breakPoints.tablet} {
    width: 90%;
    height: auto;
  }
`
export const ContentWrapper = styled.form`
  width: 90%;
  padding: 50px 80px;
  border-radius: 20px;
  box-shadow: 0px 0px 10px 2px rgb(225, 225, 225);
  margin: 80px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .errorMessage {
    display: inline-block;
    color: red;
    font-size: 0.875rem;
    width: 100%;

    padding-left: 90px;
  }
  .contentHeader {
    width: 100%;
    padding: 20px 0;
    border-bottom: 1px solid black;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    div {
      font-size: 1.5rem;
      font-weight: 700;
    }
  }
  .contentBody {
    width: 90%;
    margin: 30px auto 80px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: left;

    .Contents {
      width: 100%;
      height: 400px;
      margin: 15px 0;
    }
    > div {
      width: 100%;
      height: 45px;
      margin: 15px 0;
      display: flex;
      align-items: center;
      > span {
        width: 90px;
      }
      input {
        width: 100%;
        height: 45px;
        padding-left: 12px;
      }
      .tag__select {
        width: 100%;
        height: auto;
      }
      > div {
        height: 400px;
      }
    }
    > span {
      text-align: left;
    }
  }
  > div:last-of-type {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px 0;
  }
`
export const RegisterSubmit = styled.button`
  width: 120px;
  height: 35px;
  border: 1px solid gray;
  border-radius: 20px;
  background: none;
  cursor: pointer;
`
