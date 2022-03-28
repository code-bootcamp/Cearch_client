import styled from '@emotion/styled'
import { breakPoints } from '../../../../commons/styles/media'

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
  > div {
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    -webkit-perspective: 1000px;
    perspective: 1000px;

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
      transform: rotateY(0deg);
      transform-style: preserve-3d;
      :after {
        width: 100%;
        height: 100%;
        content: '';
        display: block;
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
      margin-bottom: 15px;
      span {
        font-size: 7px;
        margin-right: 5px;
        padding: 3px 5px 2px;
        background: #c2dceb;
        border: 1px solid #83b3d6;
        border-radius: 3px;
        color: #417294;
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
      }
    }
  }
`
export const MentorInfo = styled.div`
  /* padding: 0 20px 15px; */
  padding-bottom: 10px;
  width: 85%;
  margin: 0 auto;
  overflow: hidden;
  .workPart {
    width: 100%;
    > div:first-of-type {
      display: flex;
      align-items: end;
      margin-bottom: 10px;
      p {
        font-size: 0.875em;
        text-transform: uppercase;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
      p:nth-of-type(2) {
        margin-left: 5px;
        text-transform: uppercase;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
    }
    span {
      overflow: hidden;
      padding: 5px 10px 3px;
      border-radius: 20px;
      background-color: #1e2744;
      color: #fff;
      font-size: 0.875rem;
      margin-right: 5px;
    }
  }
  .blank {
    height: 30px;
  }
  .mentorName {
    display: flex;
    align-items: center;
    justify-content: right;
    margin-bottom: 5px;

    > p {
      font-size: 1.1rem;
      font-weight: 700;
    }
    > div {
      width: 13px;
      margin-left: 5px;
      svg {
        fill: blue;
      }
    }
  }
`
