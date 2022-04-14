import styled from '@emotion/styled'
import { breakPoints } from '../../../../commons/styles/media'
export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`

export const Head = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media ${breakPoints.tablet} {
    justify-content: flex-end;
  }
  @media ${breakPoints.mobile} {
    justify-content: flex-start;
  }
`
export const HeadTitle = styled.div`
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  @media ${breakPoints.tablet} {
    display: none;
  }
  @media ${breakPoints.mobile} {
    display: none;
  }
`
export const HeadMenu = styled.div`
  padding: 0px 10px;
  width: 177px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .focused {
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
  }

  .submenu {
    cursor: pointer;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: #bdbdbd;
  }

  @media ${breakPoints.tablet} {
    .focused {
      font-style: normal;
      font-weight: 700;
      font-size: 15.5px;
    }

    .submenu {
      cursor: pointer;
      font-style: normal;
      font-weight: 400;
      font-size: 15.5px;
      color: #bdbdbd;
    }
  }
  @media ${breakPoints.mobile} {
    .focused {
      font-style: normal;
      font-weight: 700;
      font-size: 15px;
    }

    .submenu {
      cursor: pointer;
      font-style: normal;
      font-weight: 400;
      font-size: 15px;
      color: #bdbdbd;
    }
  }
`
export const Menu = styled.div``

export const Table = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  margin-bottom: 87px;
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
  @media ${breakPoints.mobile} {
    border-top: 1.5px solid black;
    margin-top: 15px;
  }
`

export const TableDivision = styled.div`
  width: 16%;
  text-align: center;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  @media ${breakPoints.mobile} {
    width: 100%;
    text-align: start;
    margin-bottom: 15px;
    font-size: 14px;
    font-weight: 700;
  }
`

export const TableTitle = styled.div`
  width: 60%;
  text-align: center;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  @media ${breakPoints.mobile} {
    width: 100%;
    text-align: start;
    margin-bottom: 12px;
    font-size: 14px;
  }
`

export const TableDate = styled.div`
  width: 24%;
  text-align: center;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  @media ${breakPoints.mobile} {
    width: 100%;
    text-align: start;
    font-size: 12px;
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
  @media ${breakPoints.mobile} {
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
  :hover {
    cursor: pointer;
    font-weight: 600;
  }
  @media ${breakPoints.mobile} {
    flex-direction: column;
    height: 120px;
    padding: 22px 5px;
    :hover {
      cursor: pointer;
    }
  }
`
