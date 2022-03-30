import styled from '@emotion/styled'
import { breakPoints } from '../../../commons/styles/media'
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
        width: 100%;
        height: 50px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
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
        .buttonWrapper {
          .commentButton {
            margin: 0 5px;
          }
        }

        .WrapperOne {
          display: flex;
          flex-direction: row;
          align-items: center;
          width: 200px;
          border-radius: 0;

          img {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            overflow: hidden;
            border: 0;
            object-fit: cover;
          }
        }
        /* > div:nth-of-type(3) {
          text-align: right;
          padding: 0 20px;
        } */
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
export const ReplyComment = styled.div`
  width: 100%;
  height: 100%;
  display: ${(props: { commentEdit: boolean }) =>
    props.commentEdit ? 'flex' : 'none'};

  justify-content: space-between;
  align-items: center;
  > textarea {
    width: 90%;
    height: auto;
    border: 2px solid #ffa24b;
  }
  > button {
    width: 10%;
    height: 100%;
  }
`
