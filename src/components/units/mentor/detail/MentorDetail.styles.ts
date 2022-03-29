import styled from '@emotion/styled'
import { AccordionPanel } from '@chakra-ui/react'
import { breakPoints } from '../../../../commons/styles/media'

export const Wrapper = styled.div`
  width: 1200px;
  height: auto;
  margin: 0 auto;
  padding: 80px 0;
  position: relative;
  display: grid;
  grid-template-columns: 3.5fr 6.5fr;
  > div {
    width: 100%;
  }
  @media ${breakPoints.mobile}, ${breakPoints.tablet} {
    width: 90%;
    display: flex;
    flex-direction: column;
  }
`
export const MentorCard = styled.div`
  position: sticky;
  display: flex;
  flex-direction: column-reverse;
  top: 50px;
  left: 0;

  padding: 50px;
  border-radius: 25px;
  text-align: center;
  box-shadow: 0px 0px 10px 2px rgb(225, 225, 225);
  height: 595px;
  @media ${breakPoints.mobile} {
    width: 100%;
    position: static;
    margin-bottom: 10px;
  }
  @media ${breakPoints.tablet} {
    width: 100%;
    height: auto;
    position: static;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column-reverse;
    .mentorTitle {
      width: 80%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin: 0 auto 20px;
      p:nth-of-type(1) {
        font-size: 1rem;
        margin-bottom: 3px;
      }
      p:nth-of-type(2) {
        font-size: 1.25rem;
      }
    }
    .mentorBody {
      width: 100%;
      display: grid;
      grid-template-columns: 3fr 3fr;

      .mentorImg {
        display: flex;
        align-items: center;
        order: -1;
      }
      .mentorProfile {
        > p {
          font-size: 1.25rem;
        }
        > div {
          > p {
            font-size: 1.25rem;
          }
        }
      }
      .mentorTime {
        > p {
          font-size: 1.25rem;
        }
      }
      .DMButton {
      }
    }
  }

  > * {
    margin-bottom: 15px;
  }

  .mentorTitle {
    display: flex;
    justify-content: space-between;
    order: 2;
    > div:first-of-type {
      text-align: left;
      p:nth-of-type(1) {
        font-size: 1rem;
        margin-bottom: 3px;
      }
      p:nth-of-type(2) {
        font-size: 1.2rem;
      }
    }
    > div:last-of-type {
      text-align: right;
      p:nth-of-type(1) {
        margin-bottom: 3px;
      }
    }
  }

  .mentorImg {
    width: 100%;
    order: 1;
    > div {
      width: 150px;
      height: 150px;
      margin: 0 auto;
      position: relative;
      top: 0;
      left: 0;
      > div:first-of-type {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
    .follow {
      width: 43px;
      height: 43px;
      z-index: 99;
      position: absolute;
      right: 0;
      bottom: 0;
      background: #fff;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 0px 0px 10px 2px rgb(225, 225, 225);

      svg {
        width: 22px;
        fill: #224fe1;
      }
    }
  }

  .mentorProfile {
    width: 100%;
    height: 150px;
    font-size: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p {
      margin-bottom: 5px;
    }
    > div:nth-of-type(1) {
      font-weight: 700;
      margin-bottom: 10px;
      position: relative;
      .online {
        position: absolute;
        top: -8px;
        right: -12px;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: #2eea2a;
      }
    }
    > p:last-of-type {
      text-transform: uppercase;
    }
  }
  .mentorTime {
    display: flex;
    flex-direction: column;

    p {
      margin-bottom: 10px;
    }
    > p:nth-of-type(2) {
      font-weight: 700;
      margin-bottom: 10px;
      color: #224fe1;
    }
  }

  .DMButton {
    width: 100%;
    margin: 0;
    display: flex;
    justify-content: center;

    button:first-of-type {
      width: 120px;
      height: 40px;
      border: 1px solid gray;
      border-radius: 20px;
      font-size: 1rem;
      background: none;
    }
  }
`

export const MentorContent = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media ${breakPoints.mobile}, ${breakPoints.tablet} {
    margin: 0;
  }
`
export const ContentsText = styled.div`
  width: 100%;
  border-radius: 25px;
  box-shadow: 0px 0px 10px 2px rgb(225, 225, 225);
  padding: 40px;

  @media ${breakPoints.tablet}, ${breakPoints.mobile} {
    max-height: 700px;
    overflow: scroll;
  }
`
export const ContentContainer = styled.div`
  /* display: block; */
  /* width: 100%; */
  margin-top: 20px;
  border-radius: 25px;
  box-shadow: 0px 0px 10px 2px rgb(225, 225, 225);
`

export const ClassList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 15px;
  padding: 15px 10px 10px;
  @media ${breakPoints.mobile} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 15px;
  }
  @media ${breakPoints.tablet} {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 15px;
  }
`

export const ClassImg = styled.div`
  width: 100%;
  height: 270px;
  box-shadow: 0px 0px 10px 2px rgb(225, 225, 225);
  border-radius: 15px;
  position: relative;
  overflow: hidden;
  &:after {
    content: '';
    z-index: 9;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 270px;
    background: rgba(0, 0, 0, 0.2);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  p {
    z-index: 99;
    position: absolute;
    bottom: 15px;
    left: 15px;
    font-weight: 700;
    color: #fff;
  }
  > p:first-of-type {
    bottom: 40px;
    font-size: 0.875rem;
  }
  > p:last-of-type {
    font-size: 1rem;
  }
`
export const ClassInfo = styled.div`
  width: 100%;
  padding: 15px;
`
export const InfoTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.875rem;

  > div:first-of-type {
    display: flex;
    align-items: center;
  }
  .checked {
    font-size: 15px;
    color: orange;
  }
`
export const InfoBottom = styled.div`
  width: 100%;

  .classCategory,
  .classDate {
    font-size: 0.8rem;
  }
  .classCategory {
    margin: 15px 0;
    span {
      background: #eee;
      padding: 5px 10px;
      border-radius: 15px;
    }
  }

  .classTitle {
    width: 100%;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;

    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 3px;
  }
`
