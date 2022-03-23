import styled from '@emotion/styled'

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
        // margin-bottom: 30px;
        color: #224fe1;
        font-weight: 700;
      }
    }
    > div {
      width: 85%;
      margin: 0 auto 50px;
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
    button {
      width: 110px;
      height: 35px;
      border: 1px solid gray;
      border-radius: 20px;
      background: none;
    }
  }
`
