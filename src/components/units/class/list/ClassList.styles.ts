import styled from '@emotion/styled'

export const Wrapper = styled.div`
  width: 1200px;
  margin: 0 auto;

  article {
    width: 100%;
    padding: 20px 0;
    section {
      width: 100%;
      margin-bottom: 150px;

      > p {
        font-size: 1.5rem;
        font-weight: 600;
        margin-bottom: 30px;
      }
    }
    // 카테고리
    section:nth-of-type(1) {
      margin: 30px 0 100px;

      #mainCategory {
        padding: 40px 30px 30px;
        border: 1px solid gray;
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

export const Class = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, calc((100% - 35px * 3) / 4));
  grid-gap: 35px;
  grid-row-gap: 65px;
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
`
export const InfoTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.875rem;

  > div:first-of-type {
    display: flex;
    align-items: end;
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
      background: #83b3d6;
      color: #fff;
      padding: 5px 10px 3px;
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
