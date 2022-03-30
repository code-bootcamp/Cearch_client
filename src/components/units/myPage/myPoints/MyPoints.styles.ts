import styled from '@emotion/styled'
import { breakPoints } from '../../../../commons/styles/media'

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 100px;
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
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  padding-left: 6px;
  @media ${breakPoints.tablet} {
    font-size: 16px;
  }
  @media ${breakPoints.mobile} {
    font-size: 15.5px;
  }
`

export const HeadWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 95%;

  @media ${breakPoints.mobile} {
    display: none;
  }
`

export const HeadDivBox = styled.div`
  display: flex;
  flex-direction: column;
`

export const PointInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const PointButton = styled.button`
  border: 0px none;
  border-radius: 31px;
  background-color: #ffa24b;
  font-weight: 400;
  font-size: 16px;
  color: #ffffff;
  width: 109px;
  height: 36px;
  margin: 13px 0px 0px 1%;
  @media ${breakPoints.tablet} {
    font-size: 15.5px;
  }
  @media ${breakPoints.mobile} {
    font-size: 15px;
  }
`

export const Table = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  @media ${breakPoints.tablet} {
    font-size: 15px;
  }
  @media ${breakPoints.mobile} {
    margin-top: 25px;
    font-size: 14px;
  }
`

export const TableDate = styled.div`
  width: 15%;
  text-align: center;
  @media ${breakPoints.tablet} {
    font-size: 15px;
  }
  @media ${breakPoints.mobile} {
    font-size: 14px;
    width: 100%;
    text-align: start;
    color: #bdbdbd;
  }
`
export const TableDivision = styled.div`
  width: 25%;
  text-align: center;
  @media ${breakPoints.tablet} {
    font-size: 15px;
  }
  @media ${breakPoints.mobile} {
    font-size: 15px;
    font-weight: 700;
    width: 100%;
    text-align: start;
  }
`

export const TableDetail = styled.div`
  width: 45%;
  text-align: center;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  @media ${breakPoints.tablet} {
    font-size: 15px;
  }
  @media ${breakPoints.mobile} {
    font-size: 16px;
    width: 100%;
    text-align: start;
  }
`

export const TablePrice = styled.div`
  width: 15%;
  text-align: center;
  @media ${breakPoints.tablet} {
    font-size: 15px;
  }
  @media ${breakPoints.mobile} {
    font-size: 14px;
    width: 100%;
    text-align: start;
    font-weight: 700;
  }
`

export const TableHead = styled.div`
  display: flex;
  flex-direction: row;
  height: 62px;
  background-color: #f2f2f2;
  font-weight: 400;
  font-size: 16px;
  align-items: center;
  @media ${breakPoints.tablet} {
    font-size: 15px;
  }
  @media ${breakPoints.mobile} {
    font-size: 14px;
    display: none;
  }
`

export const TableRow = styled.div`
  display: flex;
  flex-direction: row;
  height: 62px;
  font-weight: 400;
  font-size: 16px;
  align-items: center;
  border-bottom: 1px solid #c4c4c4;
  @media ${breakPoints.tablet} {
    font-size: 15px;
  }
  @media ${breakPoints.mobile} {
    font-size: 14px;
    flex-direction: column;
    align-items: flex-start;
    height: 100px;
    padding: 5px 10px;
  }
`
export const PointsWithdraw = styled.div`
  padding-top: 125px;
  @media ${breakPoints.tablet} {
    padding-top: 75px;
  }
  @media ${breakPoints.mobile} {
    padding-top: 0px;
    margin-bottom: 30px;
  }
`

export const PointsCharge = styled.div`
  padding-top: 125px;
  @media ${breakPoints.tablet} {
    padding-top: 75px;
  }
  @media ${breakPoints.mobile} {
    padding-top: 10px;
  }
`

export const MobilePointsBox = styled.div`
  display: none;
  @media ${breakPoints.mobile} {
    width: 100%;
    height: 155px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    background-color: #ffa24b;
    color: #f2f2f2;
    margin-bottom: 30px;
    font-weight: 400;
  }
`

export const MobilePointLabel = styled.div`
  font-size: 25px;
  font-weight: 700;
  color: #f2f2f2;
  border-bottom: 1px solid #ffffff;
  padding-bottom: 20px;
`

export const MobileButtonWrapper = styled.div`
  height: 30%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const MobileButton = styled.button`
  padding-top: 12px;
  width: 47%;
  border: none;
  font-weight: 700;
  background-color: #ffa24b;
  color: #ffffff;
`

export const Divider = styled.div`
  border-right: 1px solid #ffffff;
  height: 37px;
`
