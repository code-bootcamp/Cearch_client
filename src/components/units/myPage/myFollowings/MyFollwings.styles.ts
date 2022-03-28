import styled from '@emotion/styled'
import { breakPoints } from '../../../../commons/styles/media'

export const HeadTitle = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
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
export const Mentor = styled.div`
  animation: fadein 1s ease-in-out;
  @keyframes fadein {
    0% {
      opacity: 0;
      transform: translateY(10px);
    }
    100% {
      opacity: 1;
      transform: none;
    }
  }
  margin: 30px 0px 100px 0px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  grid-row-gap: 50px;
  @media ${breakPoints.tablet} {
    grid-template-columns: repeat(3, 1fr);
  }
  @media ${breakPoints.mobile} {
    grid-template-columns: repeat(2, 1fr);
  }
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
