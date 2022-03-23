import { Swiper, SwiperSlide } from 'swiper/react'
import styled from '@emotion/styled'

/* export const SlickSlider = styled(Slider)`
  padding-bottom: 7vw;
`

export const SliderGroup = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex !important;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  & > img {
    width: 100%;
  }
` */

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
        margin-bottom: 50px;
      }
    }
    // 카테고리
    section:nth-of-type(1) {
      margin: 30px 0 100px;

      li {
        text-align: center;
        display: inline-block;
        border: 1px solid black;
        padding: 5px 50px;
        margin: 0 20px 20px 0;
        border-radius: 20px;
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
    box-shadow: 0px 0px 10px 2px rgb(225, 225, 225);
    border-radius: 10px;
    overflow: hidden;
    > * {
      margin: 5px 0s;
    }
    .profileImg {
      width: 100%;
      height: 150px;
      background: #eee;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 45%;
        border-radius: 50%;
      }
    }
  }
`
export const MentorInfo = styled.div`
  padding: 15px;
  .workPart {
    margin-bottom: 10px;

    > div:nth-of-type(1) {
      display: flex;
      align-items: end;
      margin-bottom: 5px;
      p {
        font-size: 0.875em;
      }
      p:nth-of-type(2) {
        margin-left: 5px;
      }
    }
  }
  .blank {
    height: 40px;
  }
  .mentorName {
    display: flex;
    justify-content: right;
    margin-bottom: 5px;

    > p {
      font-size: 1rem;
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

export const BoardList = styled(Swiper)`
  width: 100%;
  padding: 10px 10px 10px;
  position: static;

  > div {
    width: 100%;
    .swiper-slide {
      margin-right: 10px;
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
  .button {
    width: 100%;
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    border: 1px solid black;
    /* height: 30px; */

    .swiper-button-next {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: brown;
      border-radius: 10px;
      padding: 10px 20px;
    }

    .swiper-button-prev {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: brown;
      border-radius: 10px;
      padding: 10px 20px;
    }

    .swiper-button-prev::after,
    .swiper-button-next::after {
      font-size: 1.5rem;
      /* font-weight: 900; */
    }
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
  padding: 20px 10px;
  /* background: #eee; */
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
    margin-bottom: 15px;
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
