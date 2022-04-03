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
    padding: 10px 0;
    border-bottom: 1px solid black;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    @media ${breakPoints.mobile} {
      width: 100%;
      height: auto;
      display: flex;
      flex-direction: row;
      align-items: center;
    }
    div {
      font-size: 1.5rem;
      font-weight: 700;
    }
    span {
      font-size: 1rem;
      color: gray;
    }
    .LikeButtonWrapper {
      width: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      .boardLikeCount {
        width: auto;
        height: auto;
        font-weight: 700;
        font-size: 700;
      }
      @media ${breakPoints.mobile} {
      }
    }
  }
  .contentBody {
    width: 90%;
    margin: 50px auto;
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
  .contentsButtonWrapper {
    display: flex;
    justify-content: center;
    button {
      margin: 10px 5px;
      border: none;
      border-radius: 10px;
      background-color: white;
      padding: 5px 10px;
      color: gray;
      /* color: #ffa24b; */
      font-weight: 400;
      cursor: pointer;
      box-shadow: 0px 0px 5px 2px #eee;
      :hover {
        color: white;
        background-color: #ffa24b;
      }
    }
  }
  .writerDetail {
    width: 100%;
    border-bottom: 1px solid gray;
    padding-bottom: 10px;
    font-weight: 600;
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
