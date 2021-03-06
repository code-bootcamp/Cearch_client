import styled from '@emotion/styled'
import { breakPoints } from '../../../commons/styles/media'

export const Wrapper = styled.div`
  input {
    display: none;
  }

  #mainCategory {
    padding: 30px;
    border: 1px solid #ffa24b;
    border-radius: 10px;

    .swiper-button-prev,
    .swiper-button-next {
      z-index: 99999;
      color: #ffa24b;
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
      > svg {
        height: 60px;
      }
      :hover {
        color: #ff6426;
        > svg {
          transition: all linear 0.2s;
          transform: translateY(-8px);
          path {
            stroke: #ff6426;
          }
          .circleFill {
            fill: #ff6426;
            stroke: none;
          }
          .pathFill {
            fill: #ff6426;
            stroke: none;
          }
          .circleStroke {
            fill: none;
            stroke: #ff6426;
          }
          .rectFill {
            fill: #ff6426;
            stroke: none;
          }
        }
      }
      > span {
        margin-top: 10px;
        font-size: 1rem;
      }
    }

    @media ${breakPoints.tablet} {
      .categoryColumn {
        > svg {
          height: 8vw !important;
        }
      }
    }
    @media ${breakPoints.mobile} {
      padding: 35px 10px 30px;

      .swiper-wrapper {
        height: 70px;
      }
      .categoryColumn {
        > svg {
          /* height: 10vw !important; */
        }
        > span {
          font-size: 0.8rem !important;
        }
      }
    }
  }
`
