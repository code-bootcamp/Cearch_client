import styled from '@emotion/styled'
import { breakPoints } from '../../../commons/styles/media'

export const Wrapper = styled.div`
  width: 1200px;
  margin: 0 auto;
  padding: 100px 10px 0px 10px;
  display: flex;
  flex-direction: column;
  @media (min-width: 992px) and (max-width: 1200px) {
    width: 100%;
  }
  @media ${breakPoints.tablet} {
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media ${breakPoints.mobile} {
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 50px;
  }
`

export const HeadWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 100px;
  @media ${breakPoints.tablet} {
    display: none;
  }
  @media ${breakPoints.mobile} {
    display: none;
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
`

export const Avatar = styled.div`
  width: 134px;
  height: 134px;
  border-radius: 70%;
  overflow: hidden;
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
`

export const HeadRight = styled.div`
  width: 80%;
  background-color: #ffa24b;
  /* background-color: #f89b9e;
  background-image: linear-gradient(315deg, #f89b9e 0%, #c9d9ff 74%); */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 55px 60px 55px 60px;
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
  @media (min-width: 992px) and (max-width: 1200px) {
    width: 23%;
  }
`

export const HeadRightSectionLabel = styled.div`
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 10px;
  text-transform: uppercase;
  /* color: #bdbdbd; */
  color: white;
`

export const HeadRightSectionContents1 = styled.div`
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 10px;
  color: #f2f2f2;
`

export const HeadRightSectionContents2 = styled.div`
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 10px;
  color: #f2f2f2;
`

export const BodyWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (min-width: 992px) and (max-width: 1200px) {
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
    @media (min-width: 992px) and (max-width: 1200px) {
      width: 130px;
    }
  }
  @media ${breakPoints.mobile} {
    display: flex;
    flex-direction: row;
    width: 700px;

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
export const Menu = styled.div`
  margin-right: 30px;
  margin-bottom: 48px;
  @media (min-width: 992px) and (max-width: 1200px) {
    width: 130px;
  }
  @media ${breakPoints.mobile} {
    margin-bottom: 30px;
  }
`
export const Contents = styled.div`
  width: 937px;
  @media (min-width: 992px) and (max-width: 1200px) {
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
