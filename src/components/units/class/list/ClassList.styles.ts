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
