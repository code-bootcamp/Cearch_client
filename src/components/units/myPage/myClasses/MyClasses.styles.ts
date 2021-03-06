import styled from '@emotion/styled'
import { breakPoints } from '../../../../commons/styles/media'

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
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

export const TabMenu = styled.div`
  width: 100%;
  margin-top: 48px;
  margin-bottom: 25px;
  display: flex;
  flex-direction: row;

  .focused {
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
  }

  .submenu {
    cursor: pointer;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    color: #bdbdbd;
  }
  @media ${breakPoints.tablet} {
    margin-top: 0px;
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
    display: none;
  }
`
export const Menu = styled.div`
  margin-right: 70px;
  @media ${breakPoints.mobile} {
    margin-right: 30px;
  }
`
export const Contents = styled.div`
  width: 100%;
  border-top: 2px solid black;
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const CreateButton = styled.div`
  width: 151px;
  height: 36px;
  color: #ffffff;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  background-color: #ffa24b;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  :hover {
    cursor: pointer;
  }
  @media ${breakPoints.tablet} {
    display: none;
  }
  @media ${breakPoints.mobile} {
    display: none;
  }
`
export const MobileTab = styled.div`
  display: none;
  @media ${breakPoints.mobile} {
    width: 100%;
    display: flex;
    margin-top: 0px;
    margin-bottom: 15px;
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
