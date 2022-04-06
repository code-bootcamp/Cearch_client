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
      padding: 20px;
      height: 95% !important;

      .mentorName {
        font-weight: 600;
        margin-bottom: 0;
        font-size: 0.9rem;
      }
      .backTop {
        width: 100%;
        display: flex;
        align-items: center;
        margin-bottom: 10px;
        @media ${breakPoints.mobile} {
          margin-bottom: 5px;
        }
        .line {
          border-left: 1px solid black;
          padding-right: 5px;
          margin-left: 5px;
          width: 1px;
          height: 12px;
        }
        > span:nth-of-type(1),
        > span:nth-of-type(2) {
          font-size: 0.8rem;
        }
      }

      .backBottom {
        width: 100%;
        word-break: keep-all;
        white-space: pre-line;
        display: flex;
        align-items: center;
        @media ${breakPoints.tablet}, ${breakPoints.mobile} {
          display: block;
        }
        .answerWrapper,
        .followerWrapper {
          white-space: nowrap;
          font-size: 0.8rem;
          font-weight: 600;
          @media ${breakPoints.tablet}, ${breakPoints.mobile} {
            width: 100%;
          }
          svg {
            margin: 0 5px;
          }
          .orange {
            font-weight: 600;
            font-size: 0.8rem;
            color: #ff7b00;
          }
        }
      }
      > .line {
        width: 100%;
        height: 1px;
        padding-bottom: 10px;
        border-top: 1px solid black;
        margin-top: 10px;
      }

      .selfIntro {
        font-size: 0.875rem;
        word-wrap: break-word;
        word-break: break-all;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 9;
        -webkit-box-orient: vertical;
        word-wrap: break-word;
        line-height: 1.2rem;
        height: calc(1.2rem * 9);
      }
      @media ${breakPoints.tablet}, ${breakPoints.mobile} {
        > .line {
          margin-top: 5px;
          padding-bottom: 5px;
        }
        .selfIntro {
          -webkit-line-clamp: 4;
          height: calc(1.2rem * 4);
        }
      }
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

    @media ${breakPoints.tablet}, ${breakPoints.mobile} {
      .badge {
        margin-bottom: 1vw !important;
        img {
          width: 20px;
        }
      }
    }
    @media ${breakPoints.tablet} {
      .profileImg {
        padding: 2vw 0;
        > div {
          width: 11vw;
          height: 11vw;
        }
      }
    }
    @media ${breakPoints.mobile} {
      .profileImg {
        padding: 4vw 0;
        > div {
          width: 18vw;
          height: 18vw;
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
        margin-bottom: 0;
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
      background-color: #ffa24b;
      color: #fff;
      font-size: 0.79rem;
      font-weight: 700;
      margin-right: 5px;
      margin-bottom: 5px;
      &:last-of-type {
        margin-right: 0px;
      }
    }
  }
  .blank {
    height: 30px;
  }
  .mentorName {
    text-align: end;
    display: flex;
    align-items: center;
    justify-content: right;
    margin-bottom: 5px;

    > p {
      margin-bottom: 0;
      font-size: 1.1rem;
      font-weight: 700;
    }
    svg {
      width: 13px;
      margin-left: 5px;
      fill: blue;
    }
  }
  @media ${breakPoints.tablet}, ${breakPoints.mobile} {
    .workPart {
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
    .blank {
      height: 1.5vw;
    }
    .mentorName {
      margin-bottom: 0;
      > p {
        font-size: 0.9rem;
      }
    }
  }
  @media ${breakPoints.mobile} {
    padding-bottom: 2vw;

    .workPart {
      > div:first-of-type {
        p {
          font-size: 0.875rem !important;
          margin-bottom: 0px !important;
          line-height: 20px;
        }
        p:nth-of-type(2) {
          font-size: 0.8rem !important;
        }
      }
      span {
        font-size: 0.7rem;
        padding: 3px 7px 2px;
      }
    }
    .blank {
      height: 5vw;
    }
    .mentorName {
      margin-bottom: 0;
    }
  }
`
