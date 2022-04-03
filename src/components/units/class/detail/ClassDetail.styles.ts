import styled from '@emotion/styled'
import { breakPoints } from '../../../../commons/styles/media'

export const ClassBanner = styled.div`
  width: 100%;
  height: 380px;
  background: #997655;
  display: flex;
  justify-content: center;

  > div:last-of-type {
    display: none;
  }

  @media ${breakPoints.tablet}, ${breakPoints.mobile} {
    flex-direction: column;
    height: auto;
    padding: 20px;
    background: linear-gradient(
      180deg,
      #997655 0%,
      #997655 50%,
      rgba(255, 255, 255, 1) 50%,
      rgba(255, 255, 255, 1) 100%
    );
    > div:last-of-type {
      display: block;
    }
  }
`
export const BannerWrapper = styled.div`
  width: 1200px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  @media ${breakPoints.tablet}, ${breakPoints.mobile} {
    padding: 0px;
    width: 100%;
    margin: auto;
    flex-direction: column;
    > div:first-of-type {
      order: 2;
    }
    > div:last-of-type {
      order: 1;
      margin-bottom: 3vw;
    }
  }
`
export const Wrapper = styled.div`
  width: 1200px;
  margin: 0px auto;
  padding: 50px 0;
  position: relative;
  display: grid;
  grid-template-columns: 6.5fr 3.5fr;
  grid-column-gap: 30px;
  @media ${breakPoints.tablet}, ${breakPoints.mobile} {
    display: block;
    width: 90%;
    padding: 30px 0;
  }
`

export const Star = styled.div`
  display: flex;
  align-items: flex-end;
  > span {
    margin-left: 10px;
  }
  .ant-rate-star:not(:last-child) {
    margin-right: 0;
  }

  @media ${breakPoints.tablet}, ${breakPoints.mobile} {
    > span {
      font-size: 0.875rem;
    }
  }
`
export const FlexEnd = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 10px;
  > span {
    margin-left: 10px;
  }

  @media ${breakPoints.tablet}, ${breakPoints.mobile} {
    margin-bottom: 8px;
    > span {
      font-size: 0.875rem;
    }
  }
`
export const FlexRow = styled.div`
  display: flex;
  align-items: center;
  span {
    font-size: 1.2rem;
    font-weight: 700;
    color: #852600;
  }
  > svg {
    margin-left: 5px;
  }
`
export const ClassDetail = styled.div`
  width: 720px;
  padding: 0 20px;
  > * {
    margin-bottom: 70px;
    &:first-of-type {
      padding-top: 0px;
    }
    &:last-of-type {
      padding-bottom: 0px;
    }
  }
  @media ${breakPoints.tablet}, ${breakPoints.mobile} {
    width: 100%;
    padding: 0;
  }
`
export const DetailTop = styled.div`
  width: 60%;
  padding: 30px;
  display: flex;
  align-items: flex-start;
  color: #fff;

  .category {
    font-size: 0.875rem;
    margin-bottom: 10px;
  }
  .title {
    font-size: 1.8rem;
    font-weight: 700;
    margin-bottom: 20px;
  }
  @media ${breakPoints.tablet}, ${breakPoints.mobile} {
    width: 100%;
    padding: 0;
    .title {
      font-size: 1.5rem;
      margin-bottom: 0px;
    }
    .category {
      margin-bottom: 5px;
    }
  }
  @media ${breakPoints.mobile} {
    .title {
      font-size: 1.2rem;
      margin-bottom: 0px;
    }
  }
`
export const ClassMenu = styled.div`
  width: 100%;
  border-bottom: 1px solid #f2f2f2;
  > div {
    width: 1200px;
    height: 50px;
    display: flex;
    align-items: center;
    margin: 0 auto;
    span {
      color: #abb0b5;
      margin: 0 30px 0 20px;
      font-size: 1rem;
      :hover {
        color: #222;
      }
    }
  }
  @media ${breakPoints.tablet}, ${breakPoints.mobile} {
    border-top: 10px solid #f2f2f2;
    > div {
      width: 90%;
      span {
        margin: 0;
        margin-right: 30px;
      }
    }
  }
`
export const ClassCategoryBorder = styled.div`
  border: 1px solid rgb(235, 235, 235);
  border-radius: 10px;
  padding: 40px 0;
  margin-bottom: 50px;
  display: flex;
  align-items: center;
  > div {
    &:first-of-type {
      padding: 0 70px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 1.2rem;
      > span {
        font-size: 1.2rem;
        line-height: 1.5rem;
      }
    }
    &:last-of-type {
      display: flex;
      span:first-of-type {
        color: #ff6426;
        font-size: 1.5rem;
        margin-right: 10px;
      }
    }
  }
  @media ${breakPoints.mobile} {
    margin-bottom: 30px;
    padding: 30px 0;
    > div {
      &:first-of-type {
        padding: 0 60px;
        > span {
          font-size: 1.1rem;
        }
      }
    }
  }
`
export const ClassImg = styled.div`
  width: 440px;
  height: 286px;
  border-radius: 10px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media ${breakPoints.tablet}, ${breakPoints.mobile} {
    width: 525px;
    height: 340px;
  }
  @media ${breakPoints.mobile} {
    width: 100%;
    height: 65vw;
  }
`
export const DetailClassIntro = styled.div`
  > p:first-of-type {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 15px;
  }
  > p:last-of-type {
    margin-bottom: 0;
  }
`
export const DetailCurriculum = styled.div`
  > p:last-of-type {
    margin-bottom: 0;
  }
  > p:first-of-type {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 15px;
  }
`
export const DetailReview = styled.div`
  .reviewTop {
    display: flex;
    align-items: center;
    > p:first-of-type {
      width: 150px;
      font-size: 1.2rem;
      font-weight: 600;
      margin-bottom: 0;
    }
    @media ${breakPoints.mobile} {
      justify-content: space-between;
    }
  }

  .star {
    display: flex;
    align-items: center;
    align-items: baseline;
    font-size: 0.875rem;

    > span {
      line-height: 1.2rem;
      margin-left: 5px;
      padding-left: 5px;
      font-weight: 600;
    }
  }
`
export const ReviewWrapper = styled.div`
  padding: 25px 0;
  border-bottom: 1px solid #f1f1f1;
  .contents {
    margin-bottom: 15px;
  }
  .reviewName {
    color: #adb5bd;
    font-size: 0.875rem;
  }
  &:last-of-type {
    border: 0;
  }
`
export const ReviewUser = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 20px;

  .userImg {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .userDetail {
    display: flex;
    .profile {
      display: flex;
      flex-direction: column;
      justify-content: end;
      margin-left: 15px;
      > span:first-of-type {
        display: inline-block;
        width: 90px;
        font-weight: 600;
        margin-right: 15px;
      }
    }
  }
`
export const ClassInfo = styled.div`
  @media ${breakPoints.tablet}, ${breakPoints.mobile} {
    > div:last-of-type {
      .peopleBox {
        border-radius: 0 !important;
      }
    }
  }
  > div:last-of-type {
    .category,
    .startDate {
      font-size: 0.875rem;
    }
    .title {
      font-size: 1.5rem;
      font-weight: 700;
      margin-bottom: 0px;
    }
    .peopleBox {
      width: 100%;
      padding: 15px 0;
      border-radius: 20px;
      margin-bottom: 30px;
      background-color: #ffebdb;
      display: flex;
      justify-content: center;
      align-items: center;
      > span {
        font-size: 2rem;
        padding-right: 20px;
      }
      > div {
        > span {
          font-size: 0.875rem;
          &:first-of-type {
            margin-right: 5px;
          }
          &:nth-of-type(2) {
            font-size: 1.2rem;
            color: #782401;
            font-weight: 700;
          }
        }
      }
      p {
        font-size: 0.875rem;
        margin-bottom: 0;
      }
    }
  }
`
export const PriceBox = styled.div`
  width: 100%;
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: left;

  > div:first-of-type,
  .installment {
    span {
      font-size: 0.8rem;
      font-weight: 700;
    }
  }
  .priceDivision {
    span {
      font-size: 1.5rem;
      font-weight: 700;
      color: #852600;
      &:first-of-type {
        margin-right: 5px;
      }
    }
  }

  @media ${breakPoints.tablet}, ${breakPoints.mobile} {
    .priceDivision {
      span {
        font-size: 1.3rem;
      }
    }
  }
`
export const ClassContent = styled.div`
  @media ${breakPoints.tablet}, ${breakPoints.mobile} {
    display: none;
  }

  > div:first-of-type {
    padding: 40px 35px;
    margin: 0 25px 30px 0px;
    border-radius: 10px;
    box-shadow: 0px 0px 3px 1px rgb(235, 235, 235);
  }
`
export const MentorWrapper = styled.div`
  box-shadow: 0px 0px 3px 1px rgb(235, 235, 235);
  border-radius: 10px;
  padding: 15px 15px 25px;
  margin: 0 25px 30px 0px;
  display: flex;
  flex-direction: column;
  display: block;
  @media ${breakPoints.tablet}, ${breakPoints.mobile} {
    display: none;
  }
`
export const MobileMentorWrapper = styled.div`
  display: none;
  @media ${breakPoints.tablet}, ${breakPoints.mobile} {
    display: block;
    padding-bottom: 30px;
    margin-bottom: 20px;
    border-bottom: 1px solid rgb(235, 235, 235);
    display: flex;
    flex-direction: column;
  }
`
export const MentorImg = styled.div`
  position: relative;
  top: 0;
  left: 0;
  margin: 0 20px;

  > div:first-of-type {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .follow {
    z-index: 99;
    position: absolute;
    right: -3px;
    bottom: -3px;
    background: #fff;
    border-radius: 50%;
    padding: 6px;
    box-shadow: 0px 0px 3px 1px rgb(235, 235, 235);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    svg {
      font-size: 1.3rem;
      fill: #852600;
    }
  }
`
export const MentorContent = styled.div`
  width: 100%;
  margin-left: 10px;

  p {
    margin-bottom: 0;
  }
  > div:last-of-type {
    > p {
      &:first-of-type {
        font-size: 1rem;
        font-weight: 600;
      }
    }
    > div {
      span {
        font-size: 0.875rem;
      }
    }
  }
`

export const ClassButton = styled.div`
  text-align: center;
  border-radius: 5px;
  width: 100%;
  height: 50px;
  line-height: 50px;
  margin: auto;
  cursor: pointer;
  background: #ffa24b;
  color: #fff;
  font-weight: 700;

  &:hover {
    background-color: #e09045;
  }
`

export const MentorCategory = styled.div`
  span {
    font-weight: 600;
    color: #222;
    font-size: 0.875rem;
    margin-right: 8px;
  }
`
