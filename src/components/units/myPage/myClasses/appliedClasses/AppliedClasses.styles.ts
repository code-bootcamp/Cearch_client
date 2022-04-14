import styled from '@emotion/styled'
import { breakPoints } from '../../../../../commons/styles/media'

export const ClassWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const ClassContents = styled.div`
  height: 240px;
  display: flex;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #c4c4c4;
  animation: fadein 1s ease-in-out;
  @keyframes fadein {
    0% {
      opacity: 0;
      transform: translateY(10px);
    }
    100% {
      opacity: 1;
      transform: none;
    }
  }
  @media ${breakPoints.tablet} {
    height: 200px;
  }
  @media ${breakPoints.mobile} {
    height: 180px;
    flex-direction: column;
    align-items: flex-end;
    padding-top: 10px;
  }
`
export const ClassContentsLeft = styled.div`
  width: 75%;
  display: flex;
  @media ${breakPoints.mobile} {
    width: 100%;
    flex-direction: row;
    justify-content: flex-start;
  }
`
export const ClassImage = styled.image`
  width: 180px;
  height: 120px;
  background: #f1f1f1;
  @media ${breakPoints.tablet} {
    width: 150px;
    height: 100px;
  }
  @media ${breakPoints.mobile} {
    margin-top: 30px;
    width: 120px;
    height: 80px;
  }
`
export const ClassContentsList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px 0px 5px 20px;

  @media ${breakPoints.tablet} {
    padding: 5px 0px 0px 10px;
  }
  @media ${breakPoints.mobile} {
    width: 70%;
    padding: 5px 0px 5px 10px;
  }
`

export const ClassContentsListTop = styled.div`
  display: flex;
  flex-direction: column;
`

export const ClassCategory = styled.div`
  font-weight: 400;
  font-size: 16px;
  margin-bottom: 13px;
  .Categories {
    color: white;
    margin-right: 10px;
    background: #ffa24b;
    padding: 5px 10px 3px;
    border-radius: 15px;
    color: #fff;
  }
  @media ${breakPoints.tablet} {
    margin-bottom: 5px;
    .Categories {
      font-size: 15px;
      color: white;
      background: #ffa24b;
      border-radius: 10px;
      padding: 5px 10px 3px;
      margin-right: 10px;
    }
  }
  @media ${breakPoints.mobile} {
    margin-bottom: 5px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    .Categories {
      margin-right: 2px;
      font-size: 12px;
      color: white;
      background: #ffa24b;
      border-radius: 10px;
    }
  }
`
export const ClassTitle = styled.div`
  width: 100%;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  /* text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap; */
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  line-height: 1.5rem;
  height: calc(1.5rem * 2);

  @media ${breakPoints.tablet} {
    width: 100%;
    font-size: 15.5px;
  }
  @media ${breakPoints.mobile} {
    font-size: 14px;
  }
`
export const ClassDate = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  @media ${breakPoints.tablet} {
    font-size: 14px;
  }
  @media ${breakPoints.mobile} {
    font-size: 12px;
  }
`

export const ClassContentsRight = styled.div`
  width: 10%;
  font-weight: 700;
  font-size: 18px;
  @media ${breakPoints.tablet} {
    font-size: 15.5px;
    width: 11%;
    text-align: right;
  }
  @media ${breakPoints.mobile} {
    width: 70px;
    font-size: 14px;
  }
`

export const ClassPayButton = styled.button`
  border-radius: 31px;
  width: 109px;
  height: 36px;
  background-color: #ffa24b;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #fff;
  border: 0px none;
  :hover {
    cursor: pointer;
  }
  @media ${breakPoints.tablet} {
    width: 80px;
    font-size: 15px;
  }
  @media ${breakPoints.mobile} {
    width: 80px;
    height: 25px;
    font-size: 14px;
    margin: 0px 0px 10px 0px;
  }
`
