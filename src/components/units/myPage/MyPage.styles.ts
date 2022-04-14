import styled from '@emotion/styled'
import { breakPoints } from '../../../commons/styles/media'

export const Wrapper = styled.div`
  width: 1200px;
  margin: 0 auto;
  padding: 100px 10px 0px 10px;
  display: flex;
  flex-direction: column;
  @media (min-width: 1025px) and (max-width: 1200px) {
    width: 100%;
  }
  @media ${breakPoints.tablet} {
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px 0px;
  }
  @media ${breakPoints.mobile} {
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 0px;
  }
`

export const HeadWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 80px;
  @media ${breakPoints.tablet} {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 150px;
    margin-bottom: 30px;
    padding: 0px 30px 20px 30px;
    border-bottom: 1px solid #bdbdbd;
  }
  @media ${breakPoints.mobile} {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 110px;
    margin-bottom: 10px;
    padding: 0px 30px 10px 30px;
    border-bottom: 1px solid;
  }
`

export const HeadLeft = styled.div`
  height: 218px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  :hover {
    cursor: pointer;
  }
  @media ${breakPoints.tablet} {
    width: 100px;
    height: 140px;
  }
  @media ${breakPoints.mobile} {
    width: 80px;
    height: 100px;
  }
`

export const Avatar = styled.div`
  width: 134px;
  height: 134px;
  border-radius: 70%;
  overflow: hidden;
  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media ${breakPoints.tablet} {
    width: 90px;
    height: 90px;
    border-radius: 100%;
    overflow: hidden;
    > img {
      width: 90px;
    }
  }
  @media ${breakPoints.mobile} {
    width: 60px;
    height: 60px;
    border-radius: 100%;
    overflow: hidden;
    > img {
      width: 60px;
    }
  }
`

export const NameAndSetting = styled.div`
  display: flex;
  align-items: flex-start;
`

export const Name = styled.div`
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  margin-right: 7px;
  @media ${breakPoints.tablet}, ${breakPoints.mobile} {
    font-size: 18px;
  }
`

export const HeadRight = styled.div`
  width: 80%;

  background-color: #e6c84f;
  background-image: linear-gradient(315deg, #e6c84f 0%, #e8807f 74%);

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 55px 60px 55px 60px;
  @media ${breakPoints.tablet} {
    display: flex;
    flex-direction: column;
    width: 50%;
    padding: 2% 4%;
    background-color: white;
    background-image: none;
  }

  @media ${breakPoints.mobile} {
    display: flex;
    flex-direction: column;
    width: 50%;
    padding: 2% 4%;
    background-color: white;
    background-image: none;
  }
`

export const HeadRightSection = styled.div`
  width: 19%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  position: relative;
  animation: fadein 1s ease-in-out;
  @keyframes fadein {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: none;
    }
  }
  @media (min-width: 1025px) and (max-width: 1200px) {
    width: 23%;
  }
  @media ${breakPoints.tablet}, ${breakPoints.mobile} {
    width: 100%;
    color: black;
    display: flex;
    flex-direction: row;
  }
`

export const HeadRightSectionLabel = styled.div`
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  text-transform: uppercase;
  /* color: #bdbdbd; */
  color: white;
  @media ${breakPoints.tablet} {
    font-size: 16px;
    color: black;
  }
  @media ${breakPoints.mobile} {
    font-size: 12px;
    color: black;
  }
`

export const HeadRightSectionContents1 = styled.div`
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  margin-bottom: 5px;

  color: #f2f2f2;
  @media ${breakPoints.tablet} {
    font-size: 16px;
    color: black;
  }
  @media ${breakPoints.mobile} {
    font-size: 12px;
    color: black;
  }
`

export const HeadRightSectionContents2 = styled.div`
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  color: #f2f2f2;
  @media ${breakPoints.tablet} {
    font-size: 16px;
    color: black;
  }
  @media ${breakPoints.mobile} {
    font-size: 12px;
    color: black;
  }
`

export const BodyWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (min-width: 1025px) and (max-width: 1200px) {
    width: 100%;
  }

  @media ${breakPoints.tablet} {
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  @media ${breakPoints.mobile} {
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`

export const TabMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .focused {
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
  }
  .submenu {
    cursor: pointer;
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
  }

  @media ${breakPoints.tablet} {
    display: flex;
    flex-direction: row;
    /* margin: 0 auto; */

    .focused {
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
    }
    .submenu {
      cursor: pointer;
      font-family: 'Noto Sans KR';
      font-style: normal;
      font-weight: 300;
      font-size: 18px;
    }
    @media (min-width: 1025px) and (max-width: 1200px) {
      width: 130px;
    }
  }
  @media ${breakPoints.mobile} {
    display: none;
  }
`

export const MobileSetting = styled.div`
  display: none;
  @media ${breakPoints.tablet}, ${breakPoints.mobile} {
    display: flex;
    width: fit-content;
    height: fit-content;
    margin-right: 30px;
  }
`
export const Menu = styled.div`
  margin-right: 30px;
  margin-bottom: 48px;
  @media (min-width: 1025px) and (max-width: 1200px) {
    width: 130px;
  }
  @media ${breakPoints.mobile} {
    width: 90px;
    text-align: center;
    margin-bottom: 30px;
  }
`
export const Contents = styled.div`
  width: 80%;
  @media (min-width: 1025px) and (max-width: 1200px) {
    width: 80%;
  }

  @media ${breakPoints.tablet} {
    width: 100%;
    margin: 0 auto;
  }
  @media ${breakPoints.mobile} {
    width: 100%;
    margin: 0 auto;
  }
`

export const MobileTab = styled.div`
  display: none;
  @media ${breakPoints.mobile} {
    width: 100%;
    display: flex;
    .focused {
      font-style: normal;
      font-weight: 700;
      font-size: 15.5px;
    }
    .submenu {
      cursor: pointer;
      font-style: normal;
      font-weight: 300;
      font-size: 15.5px;
    }
  }
`
