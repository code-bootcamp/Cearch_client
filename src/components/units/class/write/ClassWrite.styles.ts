import styled from '@emotion/styled'
import { breakPoints } from '../../../../commons/styles/media'

export const Wrapper = styled.div`
  width: 1200px;
  padding: 80px 0;
  margin: 0 auto;
  .write {
    width: 80%;
    padding: 70px;
    margin: 0 auto;
    border-radius: 20px;
    box-shadow: 0px 0px 10px 2px rgb(225, 225, 225);
    display: flex;
    flex-direction: column;
    align-items: center;

    > div:first-of-type {
      width: 100%;
      p:nth-of-type(1) {
        font-size: 1.2rem;
        margin-bottom: 20px;
      }
      .title {
        font-size: 1.5rem;
        color: #ff7b00;
        font-weight: 700;
      }
    }
    > div {
      width: 85%;
      margin: 0 auto 30px;
      p {
        font-size: 1rem;
        margin-bottom: 10px;
      }
      input {
        width: 100%;
        height: 45px;
        padding: 0 10px;
        border: 1px solid gray;
        border-radius: 5px;
      }
      textarea {
        width: 100%;
        height: 200px;
        resize: none;
        padding: 10px;
        border: 1px solid gray;
        border-radius: 5px;
      }
      select {
        width: 100%;
        height: 45px;
        padding: 0 10px;
        border: 1px solid gray;
        border-radius: 5px;
      }
    }
  }

  @media ${breakPoints.tablet} {
    width: 90%;
    padding: 50px 0;
    .write {
      width: 100%;
      > div:first-of-type {
        p:nth-of-type(1) {
          margin-bottom: 10px !important;
        }
      }
      > div {
        width: 100%;
      }
    }
  }
  @media ${breakPoints.mobile} {
    width: 90%;
    padding: 20px 0 50px;
    .write {
      width: 100%;
      box-shadow: none;
      padding: 0;
      > div:first-of-type {
        p:nth-of-type(1) {
          margin-bottom: 0px !important;
        }
      }
      > div {
        width: 100%;
      }
    }
  }
`

export const ClassSubmit = styled.button`
  width: 110px;
  height: 35px;
  border: 1px solid gray;
  border-radius: 20px;
  background: none;
  cursor: pointer;
  :hover {
    background: #ffa24b;
    color: #fff;
  }
`
