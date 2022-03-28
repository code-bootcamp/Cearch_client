import styled from '@emotion/styled'
import { breakPoints } from '../../../../../commons/styles/media'

export const TakingClasses = styled.div`
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
`
export const EndedClasses = styled.div`
  margin-top: 55px;
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
`
export const TitleLabel = styled.div`
  padding-top: 60px;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  @media ${breakPoints.tablet} {
    width: 100%;
    font-size: 16px;
    padding-top: 50px;
  }
  @media ${breakPoints.mobile} {
    font-size: 15.5px;
    padding-top: 20px;
  }
`

export const ClassContents = styled.div`
  padding: 60px 13px 60px 8px;
  height: 240px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #c4c4c4;
  @media ${breakPoints.tablet} {
    height: 200px;
  }
  @media ${breakPoints.mobile} {
    height: 180px;
    flex-direction: column;
    align-items: flex-end;
    padding: 20px 0px;
  }
`
export const ClassContentsLeft = styled.div`
  display: flex;
  @media ${breakPoints.mobile} {
    width: 100%;
    flex-direction: row;
    justify-content: flex-start;
  }
`
export const ClassImage = styled.div`
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
  padding: 15px 0px 5px 40px;
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
    color: #417294;
    background-color: #c2dceb;
    border-radius: 10px;
    padding: 5px 10px 3px;
    margin-right: 10px;
  }
  @media ${breakPoints.tablet} {
    margin-bottom: 5px;
    .Categories {
      font-size: 15px;
      color: #417294;
      background-color: #c2dceb;
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
      color: #417294;
      background-color: #c2dceb;
      border-radius: 10px;
    }
  }
`

export const ClassTitle = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
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
  line-height: 10px;
  @media ${breakPoints.tablet} {
    font-size: 14px;
  }
  @media ${breakPoints.mobile} {
    font-size: 12px;
  }
`

export const ClassButton = styled.button`
  border-radius: 31px;
  width: 109px;
  height: 36px;
  background-color: #1e2744;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #f2f2f2;
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
    margin: 0px 0px 0px 0px;
  }
`
