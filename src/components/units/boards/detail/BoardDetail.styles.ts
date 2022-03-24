import styled from '@emotion/styled'

export const Wrapper = styled.div`
  width: 1200px;
  margin: 0 auto;
  padding: 10px 0;

  .contentHeader {
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
    margin: 30px auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    .codeBlock {
      width: 100%;
      /* height: 400px; */
      background-color: #eee;
      border-radius: 20px;
      padding: 20px;
      word-wrap: break-word;
      white-space: pre-line;
    }

    .contents {
      width: 100%;
      text-align: start;
      margin: 20px 0px;
    }
  }
  .contentFooter {
    width: 100%;
    margin: 20px 0px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    .likeButton {
      border: 0;
      border-radius: 50%;
      background: none;
      box-shadow: 0px 0px 10px 2px rgb(225, 225, 225);

      svg {
        padding: 5px 7px;
        width: 30px;
        fill: #224fe1;
      }
    }
  }
`

export const ContentWrapper = styled.div`
  width: 90%;
  padding: 50px 80px;
  border-radius: 20px;
  box-shadow: 0px 0px 10px 2px rgb(225, 225, 225);
  margin: 80px auto;
`

export const CommentsWrapper = styled.div`
  .writerDetail {
    width: 100%;
    border-bottom: 1px solid gray;
    padding-bottom: 10px;
    font-weight: 600;
  }
  .commentsWrite {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
    .commentContentsInput {
      width: 1000px;
      height: 40px;
    }
    .commentSubmit {
      width: 100px;
      height: 40px;
    }
  }
  .commentsList {
    text-align: center;

    > div {
      padding: 10px;
      border-bottom: 3px dotted gray;
    }

    .comment {
      display: grid;
      grid-template-columns: 0.5fr 0.5fr 1fr 10fr 1.5fr;
      align-items: center;

      > div:first-of-type {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        overflow: hidden;
        border: 0;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      > div:nth-of-type(3) {
        text-align: left;
        padding: 0 20px;
      }
      &:last-of-type {
        border: 0;
      }
    }
  }
`
