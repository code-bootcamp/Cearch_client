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
  @media ${breakPoints.mobile} {
    width: 90%;
    height: auto;
  }
  .contentHeader {
    padding: 20px 0;
    border-bottom: 1px solid black;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    @media ${breakPoints.mobile} {
      width: 100%;
      height: auto;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
    div {
      font-size: 1.5rem;
      font-weight: 700;
    }
    span {
      font-size: 1.125rem;
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
  @media ${breakPoints.mobile} {
    box-shadow: none;
    padding: 0;
  }
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
    width: 100%;
    @media ${breakPoints.mobile} {
      width: 100%;
      height: auto;
    }
    .commentContentsInput {
      width: 1000px;
      height: 60px;
      background-color: #f2f2f2;
      border: none;
      border-radius: 15px;
      margin-left: 10px;
      padding-left: 10px;
      @media ${breakPoints.tablet}, ${breakPoints.mobile} {
        width: 80%;
      }
    }
    .commentSubmit {
      width: 80px;
      height: 60px;
      border: none;
      border-radius: 15px;
      background-color: #f2f2f2;
      margin-left: 10px;
    }
    img {
      width: 36px;
      height: 38px;
      object-fit: cover;
      border-radius: 50%;
      text-align: center;
    }
  }
  .commentsList {
    text-align: center;
    > div {
      padding: 10px;
      border-bottom: 3px dotted gray;
    }
    .comment {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      .CommentHeader {
        height: 50px;
        display: flex;
        flex-direction: row;
        align-items: center;
        .commentWriter {
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          padding-left: 5px;
        }
        .checkbox {
          margin-right: 10px;
        }

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
      .CommentContents {
        text-align: start;
        margin-bottom: 10px;
      }
    }
  }
`
