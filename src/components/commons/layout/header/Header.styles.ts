import styled from '@emotion/styled'
import { breakPoints } from '../../../../commons/styles/media'

//헤더 전체 wrapper

export const Header = styled.header`
  position: relative;
  width: 100%;
  box-shadow: 0px 2px 5px #eee;

  > div {
    width: 1200px;
    margin: 0 auto;
    padding: 10px 20px;
    @media ${breakPoints.tablet}, ${breakPoints.mobile} {
      width: 100%;
      height: 56px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 99999;

      background-color: ${(props: { isTop: boolean }) =>
        props.isTop ? 'white' : '#FFA24B'};
    }

    > div:nth-of-type(2) {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
  .ModalButton {
    display: none;
    @media ${breakPoints.mobile} {
      display: flex;
      text-align: center;
    }
  }
`

//로고 이미지
export const Logo = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
  font-size: 2.5rem;
`

// 메뉴 바
export const MenuWrapper = styled.nav`
  .NavBox {
    display: none;
    @media ${breakPoints.tablet}, ${breakPoints.mobile} {
      width: 100%;
      height: auto;
      display: block;
      position: fixed;
      bottom: 0;
      left: 0;
      margin: 0 auto;
      z-index: 99999;
    }
  }

  ul {
    @media ${breakPoints.tablet} {
      display: none;
    }
    @media ${breakPoints.mobile} {
      display: none;
    }
    li {
      display: inline-block;
      text-align: center;
      margin: 0 10px;
      border-radius: 20px;
      padding: 8px 20px 6px;
      cursor: pointer;
      :hover {
        background: #ffa24b;
        color: #fff;
      }
      &:first-of-type {
        margin-left: 0;
      }
      &:last-child {
        margin-right: 0;
      }
    }
  }
`

//로그인 버튼
export const Login = styled.div`
  padding: 7px 18px 5px;
  background: #ffa24b;
  border-radius: 18px;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  font-weight: 700;
  @media ${breakPoints.tablet} {
    margin-right: 5px;
    width: 100px;
    text-align: center;
    padding: 7px 5px 5px;
  }
  @media ${breakPoints.mobile} {
    margin-right: 5px;
    text-align: center;
    padding: 7px 0 5px;

    color: ${(props: { isTop: boolean }) =>
      props.isTop ? '#FFA24B' : 'white'};
    background-color: ${(props: { isTop: boolean }) =>
      props.isTop ? 'white' : '#FFA24B'};
  }
`
