import styled from '@emotion/styled'
import { breakPoints } from '../../../../commons/styles/media'
export const Wrapper = styled.div`
  width: 1200px;
  margin: 0 auto;
  padding: 50px 0 100px;
  @media ${breakPoints.tablet} {
    width: 90%;
    height: auto;
  }
  @media ${breakPoints.mobile} {
    width: 100%;
    height: auto;
  }
  > p {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 50px;
  }

  > div:first-of-type {
    span {
      color: #224fe1;
      font-weight: 700;
    }
  }
  > div:last-of-type {
    padding: 7px 25px 5px;
  }

  .boardListContents {
    border-bottom: 1px solid gray;
    padding: 12px;
    text-align: center;
    display: grid;
    grid-template-columns: 1fr 10fr 2fr 2fr;

    &:first-of-type {
      // border: 0;
      background: #eee;
      border-bottom: 3px solid gray;
      > div:nth-of-type(2) {
        text-align: center;
      }
    }
    > div:nth-of-type(2) {
      text-align: left;
      padding: 0 40px;
    }
  }

  .pagination {
    width: 100%;
    text-align: center;
    padding-bottom: 100px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;

    span {
      display: inline-block;
      margin: 0 15px;
      font-weight: 700;
    }
    span:first-of-type {
      padding: 7px 10px 4px;
      border-radius: 5px;
      background: #eee;
    }
    span:last-of-type {
      padding: 7px 10px 4px;
      border-radius: 5px;
      color: #fff;
      background: #ffa24b;
    }
    span:nth-of-type(2) {
      color: #224fe1;
    }
  }
`
export const SearchBar = styled.div`
  width: 200px;
  height: 35px;
  background: #eee;
  border-radius: 20px;
  text-align: right;
  padding: 5px 10px 5px 0px;
  margin-right: 20px;

  @media ${breakPoints.mobile} {
    display: none;
  }

  input {
    width: 150px;
    border: 0;
    background: none;
    outline: none;
    padding-left: 5px;
  }
  button {
    border: 0;
    background: none;
    cursor: pointer;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);

    .search.icon {
      width: 12px;
      height: 12px;
      border: solid 2px currentColor;
      border-radius: 100%;
      margin-right: 5px;
      margin-bottom: 3px;
    }

    .search.icon:before {
      content: '';
      position: absolute;
      top: 12px;
      left: 5px;
      height: 6px;
      width: 2px;
      background-color: currentColor;
    }
  }
`

export const BoardListWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`

export const InnerBodyHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  .headerTitle {
    font-size: 1.125rem;
  }

  .writeButton {
    width: 95px;
    height: 35px;
    border: 1px solid #000;
    border-radius: 25px;
    background-color: white;
    cursor: pointer;
  }
`
export const BoardList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 5px 0px;
  .Contents {
    border-bottom: 1px solid gray;
    padding: 30px 10px;
    text-align: left;
    display: grid;
    grid-template-columns: 1fr 8fr;
    @media ${breakPoints.mobile} {
      display: flex;
      flex-direction: column;
    }
    .ContentsLeftWrapper {
      text-align: left;
    }
    .ContentsRightWrapper {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;

      .ContentsTitle {
        width: 100%;
        font-weight: bold;
        font-size: 1.25rem;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        margin-bottom: 5px;
      }
      .ContentsWriter,
      .ContentsBody {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        width: 100%;
        color: black;
      }
      .RightWrapperFooter {
        width: 100%;
        height: 30px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        text-align: left;
        margin-top: 20px;
        > div {
          display: flex;
          align-items: center;
        }
        .Categories {
          color: #417294;
          background-color: #c2dceb;
          border-radius: 10px;
          padding: 5px 10px 3px;
          margin-right: 10px;
        }
        .CategoriesWrapper {
          padding: 0 5px;
          width: 100%;
          overflow: hidden;
          word-break: keep-all;
          height: 100%;
          > span {
            display: inline-block;
            white-space: nowrap;
            overflow: hidden;
            padding: 5px 10px 5px;
            border-radius: 10px;
            background-color: #ffa24b;
            color: #fff;
            font-size: 0.79rem;
            font-weight: 700;
            margin-right: 5px;
          }
        }
        .CreatedAt {
          color: grey;
          margin-left: 10px;
        }
      }
    }
  }
`
