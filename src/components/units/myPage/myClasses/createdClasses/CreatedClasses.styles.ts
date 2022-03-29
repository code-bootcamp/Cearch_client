import styled from '@emotion/styled'
import { breakPoints } from '../../../../../commons/styles/media'

export const Wrapper = styled.div`
  /* width: 100%; */
  padding-top: 60px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  animation: fadein 1s ease-in-out;
  @media ${breakPoints.tablet} {
    padding-top: 50px;
    margin-bottom: 46px;
  }
  @media ${breakPoints.mobile} {
    padding-top: 20px;
    margin-bottom: 17px;
  }
`

export const ClassTitle = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  @media ${breakPoints.tablet} {
    font-size: 16px;
  }
  @media ${breakPoints.mobile} {
    font-size: 15.5px;
  }
`

export const Select = styled.div`
  width: 100%;
  margin-top: 40px;
  display: flex;
  flex-direction: row;
  @media ${breakPoints.tablet} {
    margin-top: 20px;
    font-size: 15.5px;
  }
  @media ${breakPoints.mobile} {
    margin-top: 20px;
    font-size: 15px;
  }
`

export const UpdateButton = styled.button`
  width: 150px;
  border: 0px none;
  background-color: #ffa24b;
  color: #f2f2f2;
  border-radius: 5px;
  @media ${breakPoints.tablet} {
    width: 150px;
  }
  @media ${breakPoints.mobile} {
    display: none;
  }
`

export const ClassInformation = styled.div`
  padding: 50px 0px 50px 0px;
`

export const Table = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  margin-bottom: 87px;
  font-size: 16px;
  @media ${breakPoints.tablet} {
    font-size: 15px;
  }
  @media ${breakPoints.mobile} {
    font-size: 14px;
  }
`

export const TableName = styled.span`
  width: 10%;
  text-align: center;
  @media ${breakPoints.mobile} {
    width: 100%;
    text-align: start;
    font-weight: 700;
    margin-bottom: 14px;
    font-size: 15px;
  }
`

export const MobileTableRow = styled.div`
  display: flex;
  justify-content: row;
  width: 25%;
  @media ${breakPoints.mobile} {
    width: 100%;
    text-align: center;
    margin-bottom: 12px;
  }
`

export const MobileTableLabel = styled.div`
  display: none;
  @media ${breakPoints.mobile} {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    text-align: start;
    color: #c4c4c4;
    font-size: 12px;
  }
`

export const TableState = styled.div`
  width: 40%;
  text-align: center;
  @media ${breakPoints.tablet} {
    font-size: 15px;
  }
  @media ${breakPoints.mobile} {
    width: 75px;
    text-align: start;
    background-color: center;
    line-height: 18px;
    font-size: 14px;
  }
`

export const TableAge = styled.div`
  width: 28%;
  text-align: center;
  @media ${breakPoints.tablet} {
    font-size: 15px;
  }
  @media ${breakPoints.mobile} {
    padding-left: 10px;
    line-height: 18px;
    width: 50px;
    height: 14px;
    border-right: 1px solid #c4c4c4;
    border-left: 1px solid #c4c4c4;
    text-align: start;
    font-size: 14px;
  }
`

export const TableRoute = styled.div`
  width: 32%;
  text-align: center;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: pre;
  @media ${breakPoints.tablet} {
    font-size: 15px;
  }
  @media ${breakPoints.mobile} {
    padding-left: 10px;
    width: 100px;
    text-align: start;
    line-height: 18px;
    font-size: 14px;
  }
`

export const TableIntroduce = styled.div`
  padding: 0px 10px;
  width: 20%;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  line-height: 1.5rem;
  height: calc(1.5rem * 3);
  @media ${breakPoints.tablet} {
    font-size: 15px;
  }
  @media ${breakPoints.mobile} {
    padding: 0px;
    width: 100%;
    text-align: start;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-wrap: break-word;
    line-height: 1.5rem;
    height: calc(1.5rem * 2);
    margin-bottom: 10px;
    font-size: 14px;
  }
`

export const TableHeadIntroduce = styled.div`
  padding: 0px 10px 0px 0px;
  width: 20%;
`
export const TableHeadQuestion = styled.div`
  padding: 0px 10px 0px 0px;
  width: 45%;
`
export const TableQuestion = styled.div`
  padding: 0px 10px;
  width: 45%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  line-height: 1.5rem;
  height: calc(1.5rem * 2);
  @media ${breakPoints.tablet} {
    font-size: 15px;
  }
  @media ${breakPoints.mobile} {
    padding: 0px;
    width: 100%;
    text-align: start;
    font-size: 14px;
  }
`

export const TableHead = styled.div`
  display: flex;
  flex-direction: row;
  height: 62px;
  background-color: #f2f2f2;
  font-weight: 400;
  @media ${breakPoints.tablet} {
    font-size: 15px;
  }
  @media ${breakPoints.mobile} {
    display: none;
  }
  align-items: center;
  text-align: center;
`

export const TableRow = styled.div`
  display: flex;
  flex-direction: row;
  height: 130px;
  @media ${breakPoints.tablet} {
    font-size: 15px;
  }
  @media ${breakPoints.mobile} {
    flex-direction: column;
    align-items: flex-start;
    font-size: 14px;
    height: 100%;
    padding: 30px 5px;
  }
  align-items: center;
  border-bottom: 1px solid #c4c4c4;
`
