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

export const Mentor = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 20px;
  grid-row-gap: 50px;
  > div {
    box-shadow: 0px 0px 10px 2px rgb(225, 225, 225);
    border-radius: 10px;
    overflow: hidden;
    cursor: pointer;
    position: relative;

    .badge {
      /* position: absolute;
      top: 10px;
      left: 10px; */
      margin-bottom: 15px;
      span {
        /* font-size: 1.5rem; */
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
