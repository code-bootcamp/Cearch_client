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
