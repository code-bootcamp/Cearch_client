import styled from '@emotion/styled'

export const Wrapper = styled.div`
  width: 1200px;
  margin: 0 auto;
  padding: 10px 0;

  > div:first-of-type {
    span {
      color: #224fe1;
      font-weight: 700;
    }
  }
  > div:last-of-type {
    /* border: 1px solid gray;
    border-radius: 20px; */
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
      background: #1e2744;
    }
    span:nth-of-type(2) {
      color: #224fe1;
    }
  }
`

export const BoardListWrapper = styled.div`
  width: 90%;
  margin: 70px auto 50px;
  display: flex;
  flex-direction: column;
`

export const InnerBodyHeader = styled.div`
  width: auto;
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
    padding: 12px;
    text-align: center;
    display: grid;
    grid-template-columns: 1fr 10fr 2fr 2fr;
  }
  .ContentsTitle {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .ContentsWriter {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`
