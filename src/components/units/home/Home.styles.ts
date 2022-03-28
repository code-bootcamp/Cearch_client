import { Swiper } from 'swiper/react'
import styled from '@emotion/styled'
import { breakPoints } from '../../../commons/styles/media'

export const Wrapper = styled.div`
  width: 1200px;
  margin: 0 auto;

  @media ${breakPoints.tablet}, ${breakPoints.mobile} {
    width: 90%;
  }

  article {
    width: 100%;
    padding: 20px 0;
    section {
      width: 100%;
      margin-bottom: 150px;
      @media ${breakPoints.tablet}, ${breakPoints.mobile} {
        margin-bottom: 50px;
      }

      > p {
        font-size: 1.5rem;
        font-weight: 600;
        margin-bottom: 30px;
        @media ${breakPoints.tablet} {
          font-size: 1.2rem;
          margin-bottom: 3vw;
        }
        @media ${breakPoints.mobile} {
          font-size: 1.2rem;
          margin-bottom: 3vw;
        }
      }
    }
    // 카테고리
    section:nth-of-type(1) {
      margin: 30px 0 100px;
      @media ${breakPoints.tablet}, ${breakPoints.mobile} {
        margin-bottom: 50px;
      }

      #mainCategory {
        padding: 40px 30px 30px;
        border: 1px solid #1e2744;
        border-radius: 10px;

        .swiper-button-prev,
        .swiper-button-next {
          z-index: 99999;
          color: #224fe1;
          &:after {
            font-size: 2rem;
          }
        }

        .categoryColumn {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          @media ${breakPoints.tablet} {
            > svg {
              height: 8vw !important;
            }
            > span {
              font-size: 0.5rem;
            }
          }
          @media ${breakPoints.mobile} {
            > svg {
              height: 8vw !important;
            }
            > span {
              font-size: 0.8rem !important;
            }
          }
          > svg {
            height: 60px;
          }
          :hover {
            color: #224fe1;
            > svg {
              transition: all linear 0.2s;
              transform: translateY(-8px);
              path {
                stroke: #224fe1;
              }
              .circleFill {
                fill: #224fe1;
                stroke: none;
              }
              .pathFill {
                fill: #224fe1;
                stroke: none;
              }
              .circleStroke {
                fill: none;
                stroke: #224fe1;
              }
              .rectFill {
                fill: #224fe1;
                stroke: none;
              }
            }
          }
          > span {
            margin-top: 10px;
            font-size: 1rem;
          }
        }
      }
    }
  }
`

export const Mentor = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 20px;
  grid-row-gap: 50px;
  @media ${breakPoints.tablet} {
    grid-template-columns: repeat(4, 1fr);
  }
  @media ${breakPoints.mobile} {
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 20px;
  }

  > div {
    transform-style: preserve-3d;
    perspective: 1000px;
    /* overflow: hidden; */

    cursor: pointer;
    position: relative;

    .mentorCardFront,
    .mentorCardBack {
      overflow: hidden;
      border-radius: 10px;
      box-shadow: 0px 0px 10px 2px rgb(225, 225, 225);
      transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
      backface-visibility: hidden;
    }

    .mentorCardFront {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      transform: rotateY(0deg);
      transform-style: preserve-3d;
      :after {
        content: '';
        display: block;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
        border-radius: 10px;
      }
    }

    .mentorCardBack {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      transform: rotateY(180deg);
      transform-style: preserve-3d;
    }

    &:hover .mentorCardBack {
      transform: rotateY(0deg);
      transform-style: preserve-3d;
    }
    &:hover .mentorCardFront {
      transform: rotateY(-180deg);
      transform-style: preserve-3d;
    }

    &:hover .mentorCardFront,
    &:hover .mentorCardBack {
      transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
    }

    .badge {
      margin-bottom: 10px;
      display: flex;
      align-items: center;
      .MuiTooltip-tooltip {
        margin-bottom: 8px;
      }
      img {
        width: 25px;
        margin-right: 5px;
      }
      @media ${breakPoints.tablet}, ${breakPoints.mobile} {
        margin-bottom: 1vw !important;
        img {
          width: 20px;
        }
      }
    }
    > * {
      margin: 5px auto;
    }
    .profileImg {
      width: 100%;
      padding: 25px 0;
      display: flex;
      justify-content: center;
      align-items: center;
      @media ${breakPoints.tablet} {
        padding: 2.5vw 0;
      }
      @media ${breakPoints.mobile} {
        padding: 5vw 0;
      }
      > div {
        width: 120px;
        height: 120px;
        margin: auto;
        border-radius: 50%;
        overflow: hidden;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        @media ${breakPoints.tablet} {
          width: 11vw;
          height: 11vw;
        }
        @media ${breakPoints.mobile} {
          width: 20vw;
          height: 20vw;
        }
      }
    }
  }
`
export const MentorInfo = styled.div`
  padding-bottom: 10px;
  width: 85%;
  margin: 0 auto;
  overflow: hidden;
  .workPart {
    width: 100%;
    > div:first-of-type {
      display: flex;
      align-items: center;
      margin-bottom: 8px;
      p {
        font-size: 0.875rem;
        line-height: 18px;
        text-transform: uppercase;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
      P:first-of-type {
        font-size: 0.9rem;
        font-weight: 700;
      }
      p:nth-of-type(2) {
        font-size: 0.875rem;
        margin-left: 5px;
        text-transform: uppercase;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
    }
    > div:last-of-type {
      width: 100%;
      overflow: hidden;
      word-break: keep-all;
      height: 29px;
    }
    span {
      display: inline-block;
      white-space: nowrap;
      overflow: hidden;
      padding: 5px 10px 3px;
      border-radius: 20px;
      background-color: #1e2744;
      color: #fff;
      font-size: 0.79rem;
      font-weight: 700;
      margin-right: 5px;
      margin-bottom: 5px;
      &:last-of-type {
        margin-right: 0px;
      }
    }
    @media ${breakPoints.tablet}, ${breakPoints.mobile} {
      > div:first-of-type {
        flex-direction: column;
        align-items: flex-start;
        margin-bottom: 5px !important;
        p {
          font-size: 0.8rem;
          margin-bottom: 0px !important;
        }
        p:nth-of-type(2) {
          margin-left: 0px !important;
        }
      }
      span {
        font-size: 0.7rem;
        padding: 3px 7px 2px;
      }
      > div:last-of-type {
        height: 25px;
      }
    }
    @media ${breakPoints.mobile} {
      > div:first-of-type {
        p {
          font-size: 1rem !important;
          margin-bottom: 0px !important;
          line-height: 20px;
        }
        p:nth-of-type(2) {
          font-size: 0.9rem !important;
        }
      }
      span {
        font-size: 0.7rem;
        padding: 3px 7px 2px;
      }
    }
  }
  .blank {
    height: 30px;
    @media ${breakPoints.tablet} {
      height: 2vw;
    }
    @media ${breakPoints.mobile} {
      height: 5vw;
    }
  }
  .mentorName {
    display: flex;
    align-items: center;
    justify-content: right;
    margin-bottom: 5px;

    > p {
      font-size: 1.1rem;
      font-weight: 700;
      @media ${breakPoints.tablet} {
        font-size: 0.875rem;
      }
      @media ${breakPoints.mobile} {
        font-size: 0.9rem;
      }
    }
    svg {
      width: 13px;
      margin-left: 5px;
      fill: blue;
    }
  }
`

export const Class = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, calc((100% - 35px * 3) / 4));
  grid-gap: 35px;
  grid-row-gap: 65px;

  @media ${breakPoints.tablet} {
    grid-template-columns: repeat(4, calc((100% - 20px * 3) / 4));
    grid-gap: 20px;
    grid-row-gap: 40px;
  }
  @media ${breakPoints.mobile} {
    grid-template-columns: repeat(2, calc((100% - 15px) / 2));
    grid-gap: 15px;
    grid-row-gap: 30px;
  }
  > div {
    cursor: pointer;
    position: relative;
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
  @media ${breakPoints.tablet} {
    height: 20.5vw;
    &:after {
      height: 20.5vw;
    }
  }
  @media ${breakPoints.mobile} {
    height: 42.5vw;
    &:after {
      height: 42.5vw;
    }
  }

  &:hover {
    img {
      width: 110%;
      height: 110%;
    }
  }
  img {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all linear 0.2s;
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
  @media ${breakPoints.tablet}, ${breakPoints.mobile} {
    padding: 10px;
  }
`
export const InfoTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${breakPoints.tablet}, ${breakPoints.mobile} {
    flex-direction: column;
    align-items: flex-start;
    font-size: 0.7rem;
    > div:first-of-type {
      span {
        font-size: 0.875rem;
      }
      svg {
        width: 1.2rem;
      }
    }
  }
  > div:first-of-type {
    display: flex;
    align-items: end;
  }

  .checked {
    font-size: 15px;
    color: orange;
  }

  .classState {
    border-radius: 5px;
    font-size: 0.875rem;
    background: #f1f1f1;
    color: #417294;
    padding: 5px 7px 4px;
    @media ${breakPoints.tablet}, ${breakPoints.mobile} {
      position: absolute;
      top: 10px;
      right: 10px;
      padding: 2px 5px 1px;
      font-size: 0.8rem;
    }
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
    @media ${breakPoints.tablet}, ${breakPoints.mobile} {
      margin: 8px 0 5px;
    }
    span {
      background: #1e2744;
      padding: 5px 10px 3px;
      border-radius: 15px;
      color: #fff;
      @media ${breakPoints.tablet}, ${breakPoints.mobile} {
        padding: 4px 8px 3px;
        font-size: 0.8rem;
      }
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

    @media ${breakPoints.tablet}, ${breakPoints.mobile} {
      font-size: 1rem;
    }
  }
`

export const BoardList = styled(Swiper)`
  width: 100%;
  padding: 10px !important;

  > div {
    width: 100%;

    .swiper-slide {
      box-shadow: 0px 0px 10px 2px rgb(225, 225, 225);
      border-radius: 20px;
      padding: 30px 25px 25px;
    }
    > p {
      position: absolute;
      top: 100px;
      left: 0;
    }
  }
`
export const ArrowButton = styled.div`
  width: 120px;
  height: 35px;
  z-index: 99;
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .swiper-button-prev-n1,
  .swiper-button-prev-n2 {
    padding-right: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 35px;
    height: 35px;
    border-radius: 10px;
    color: #fff !important;
    background-color: #1e2744;
    &.swiper-button-disabled {
      opacity: 1;
      background: #f1f1f1;
    }
  }
  .swiper-button-next-n1,
  .swiper-button-next-n2 {
    padding-left: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 35px;
    height: 35px;
    border-radius: 10px;
    color: #fff !important;
    background-color: #1e2744;
    &.swiper-button-disabled {
      opacity: 1;
      background: #f1f1f1;
    }
  }

  .arrow-left.icon {
    color: #fff;
    width: 12px;
    height: 12px;
    border-top: solid 3px currentColor;
    border-right: solid 3px currentColor;
    -webkit-transform: rotate(-135deg);
    transform: rotate(-135deg);
  }

  .arrow-right.icon {
    color: #fff;
    width: 12px;
    height: 12px;
    border-top: solid 3px currentColor;
    border-right: solid 3px currentColor;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`
export const BoardTop = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;

  > div {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  span {
    margin-left: 10px;
  }
`
export const BoardBottom = styled.div`
  border-radius: 20px;
  padding: 20px 10px 10px;

  .title {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 15px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .contents {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 8;
    -webkit-box-orient: vertical;
    word-wrap: break-word;
    line-height: 1.5rem;
    height: calc(1.5rem * 8);
  }
  .icon {
    display: flex;
    align-items: center;
    margin: 10px 0 15px;
    > div {
      display: flex;
      align-items: center;
      padding: 5px 10px 3px;

      img {
        width: 15px;
      }
      span {
        margin-left: 10px;
      }
    }
  }
  .date {
    margin: 0 10px 5px;
    text-align: right;
  }
`
