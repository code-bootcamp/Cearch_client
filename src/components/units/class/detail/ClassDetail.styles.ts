import styled from '@emotion/styled'

export const Wrapper = styled.div`
  width: 1200px;
  margin: 0px auto;
  padding: 80px 0;
  position: relative;
  display: grid;
  grid-template-columns: 6.5fr 3.5fr;
  grid-column-gap: 30px;
  > div {
    width: 100%;
  }
`

export const ClassDetail = styled.div`
  padding: 30px 0;
  > * {
    margin-bottom: 50px;
  }
`
export const DetailTop = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 80px;

  > div:first-of-type {
    width: 150px;
    height: 200px;
    border-radius: 15px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  > div:last-of-type {
    margin-left: 20px;
    .category {
      font-size: 0.875rem;
      margin-bottom: 10px;
    }
    .title {
      font-size: 1.5rem;
    }
  }
`
export const DetailClassIntro = styled.div`
  > p:first-of-type {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 15px;
  }
`
export const DetailCurriculum = styled.div`
  > p:first-of-type {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 15px;
  }
`
export const DetailComment = styled.div`
  .star {
    display: flex;
    align-items: center;
    font-size: 0.875rem;
    .checked {
      font-size: 15px;
      color: orange;
      margin-right: 5px;
    }
  }
  .commentTop {
    display: flex;
    align-items: center;
    > p:first-of-type {
      width: 150px;
      font-size: 1.2rem;
      font-weight: 600;
    }
  }
  .commentList {
    margin-bottom: 10px;
    .commentDetail {
      display: flex;
      align-items: center;
      padding: 20px 0;
      .userImg {
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
      .profile {
        display: flex;
        align-items: center;
        margin-left: 15px;
        > * {
          margin-right: 15px;
        }
        > span:first-of-type {
          display: inline-block;
          width: 90px;
          font-weight: 600;
        }
        > span:last-of-type {
          font-size: 0.875rem;
        }
      }
    }
  }
`

export const ClassContent = styled.div`
  > * {
    border-radius: 20px;
    box-shadow: 0px 0px 10px 2px rgb(225, 225, 225);
    margin-bottom: 30px;
  }

  > div:first-of-type {
    padding: 45px 35px;
    .category,
    .startDate {
      font-size: 0.875rem;
      margin-bottom: 15px;
    }
    .title {
      font-size: 1.5rem;
      margin-bottom: 5px;
    }
    .peopleBox {
      width: 100%;
      height: 150px;
      margin: 20px 0;
      border-radius: 20px;
      background: #c2dceb;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .price {
      width: 100%;
      height: 80px;
      margin: 20px 0;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      span:last-of-type {
        color: #224fe1;
        font-weight: 700;
      }
    }
    .button {
      text-align: center;
      border: 1px solid gray;
      border-radius: 20px;
      width: 110px;
      height: 35px;
      line-height: 35px;
      margin: auto;
    }
  }

  .mento {
    padding: 30px;
    display: flex;
    align-items: center;
    > div:first-of-type {
      position: relative;
      top: 0;
      left: 0;

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
        right: 0;
        bottom: 0;
        background: #fff;
        border-radius: 50%;
        padding: 1px 5px;
        svg {
          width: 12px;
          fill: #224fe1;
        }
      }
    }
    > div:last-of-type {
      width: 100%;
      text-align: center;
    }
  }
`
