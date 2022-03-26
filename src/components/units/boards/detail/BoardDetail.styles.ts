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
`

export const CommentsList = styled.div`
  text-align: center;

  > div {
    padding: 10px;
    border-bottom: 3px dotted gray;
  }

  .comment {
    display: grid;
    grid-template-columns: 0.5fr 0.5fr 1fr 10fr 1.5fr;
    align-items: center;

    margin: 20px 0;
    width: 100%;

    .commentContentsInput {
      width: 1000px;
      height: 60px;
      background-color: #f2f2f2;
      border: none;
      border-radius: 15px;
      margin-left: 10px;
      padding-left: 10px;
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
    &:last-of-type {
      border: 0;
    }
  }

    .comment {
      display: grid;
      grid-template-columns: 0.5fr 0.5fr 1.5fr 10fr 1.5fr;
      align-items: center;
      .commentWriter {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        padding-left: 3px;
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
  }

  .commentContentsInput {
    width: 100%;
    height: 40px;
    margin: 0 10px;
  }
  .commentSubmit {
    height: 40px;
  }
`
