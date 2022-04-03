import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import { breakPoints } from '../../../../commons/styles/media'

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 300px;
  background: #eee;
  text-align: center;
  font-size: 16px;
  padding: 60px 120px;
  @media ${breakPoints.tablet} {
    width: 100%;
    height: 200px;
    padding: 20px 50px;
  }
  @media ${breakPoints.mobile} {
    width: 100%;
    height: 200px;
    padding: 15px 40px;
  }
`
const Contents = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding-bottom: 30px;
  border-bottom: 1px solid #bdbdbd;
  text-align: start;
  font-weight: 400;
  @media ${breakPoints.tablet} {
    padding-bottom: 0px;
  }
  @media ${breakPoints.mobile} {
    flex-direction: column;
    padding-bottom: 5px;
  }

  .logo {
    width: 38%;
    :hover {
      cursor: pointer;
    }
  }
  .introduce {
    width: 17%;
    @media ${breakPoints.tablet} {
      font-size: 13px;
    }
    @media ${breakPoints.mobile} {
      font-size: 10px;
      width: 100%;
    }
  }
  .apply {
    width: 14%;
    @media ${breakPoints.tablet} {
      font-size: 13px;
    }
    @media ${breakPoints.mobile} {
      font-size: 10px;
      width: 100%;
    }
  }
  .menu {
    width: 14%;
    display: flex;
    flex-direction: column;
    > span {
      padding-bottom: 20px;
      @media ${breakPoints.tablet} {
        font-size: 13px;
        padding-bottom: 10px;
      }
      @media ${breakPoints.mobile} {
        display: none;
      }
      :hover {
        cursor: pointer;
      }
    }
  }
  .customer {
    width: 17%;
    display: flex;
    flex-direction: column;
    @media ${breakPoints.mobile} {
      width: 100%;
    }
    > span {
      padding-bottom: 20px;
      @media ${breakPoints.tablet} {
        font-size: 13px;
        padding-bottom: 10px;
      }
      @media ${breakPoints.mobile} {
        padding: 0px;
        font-size: 10px;
      }
    }
  }
`

const Bottom = styled.div`
  font-size: 15px;
  font-weight: 500;
  text-align: start;
  margin-top: 20px;
  color: #999999;
  @media ${breakPoints.mobile}, ${breakPoints.tablet} {
    margin-top: 2px;
    font-size: 7px;
  }
`

export default function LayoutFooter() {
  const router = useRouter()
  const footerMenuArr = [
    { menu: '클래스', push: '/class' },
    { menu: '멘토', push: '/mentor' },
    { menu: '질문게시판', push: '/boards' },
    { menu: '마이페이지', push: '/mypage' },
  ]

  const onClickMoveMenu = (index: number) => {
    router.push(`${footerMenuArr[index].push}`)
  }

  return (
    <Footer>
      <Contents>
        <div className="logo">
          <svg
            width="111"
            height="27"
            viewBox="0 0 182 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M163.446 11.1211L161.469 13.1544L163.446 15.0747"
              stroke="#000000"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M170.859 15.0742L172.836 13.0409L170.859 11.1206"
              stroke="#000000"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M168.388 9.39062L165.917 16.8037"
              stroke="#000000"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle
              cx="167.027"
              cy="12.9729"
              r="11.3229"
              stroke="#000000"
              strokeWidth="3.3"
            />
            <path
              d="M175.305 21.251L179.876 25.8224"
              stroke="#000000"
              strokeWidth="3.3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M24.2241 8.56465C25.4476 7.5663 26.2066 6.16682 26.3416 4.66018H24.1155V0H30.2781V3.8289C30.1753 5.08863 29.7338 6.30435 28.994 7.36488C28.2541 8.42542 27.2395 9.29694 26.043 9.89973L24.2241 8.56465Z"
              fill="#000000"
            />
            <path
              d="M18.7874 10.0764C18.1553 9.29432 17.3355 8.65951 16.3931 8.22228C15.4507 7.78506 14.4115 7.55743 13.3578 7.55743C12.4268 7.53886 11.5019 7.70192 10.643 8.03605C9.85851 8.33803 9.14758 8.78351 8.55262 9.34593C7.94456 9.91091 7.47265 10.5892 7.16807 11.336C6.80797 12.1329 6.63224 12.9911 6.65226 13.855C6.63925 14.7183 6.81471 15.5752 7.16807 16.374C7.47971 17.1174 7.95074 17.7944 8.55262 18.364C9.1608 18.9297 9.87944 19.3827 10.6702 19.6991C11.5028 20.0237 12.4009 20.1783 13.3035 20.1525C14.3496 20.1152 15.3751 19.8712 16.3114 19.4368C17.2477 19.0024 18.0734 18.3876 18.7331 17.6335V24.7875L18.0816 25.0142C17.1978 25.3145 16.2901 25.5503 15.3668 25.7195C14.5347 25.8681 13.6894 25.944 12.842 25.9462C11.2395 25.9668 9.64689 25.7105 8.1454 25.1905C6.57654 24.6182 5.14611 23.7619 3.93745 22.6715C2.78384 21.5629 1.86316 20.2644 1.22265 18.8426C0.417491 17.2861 -3.44143e-05 15.5815 0.000983544 13.855C-0.0214349 12.1994 0.339632 10.5586 1.05976 9.04365C1.70225 7.63779 2.62309 6.35614 3.77456 5.26513C5.0474 4.18358 6.53084 3.33719 8.1454 2.7713C9.6653 2.20477 11.2856 1.90579 12.9235 1.88965C13.8992 1.89324 14.8722 1.98605 15.8283 2.16674C16.84 2.39257 17.8298 2.69589 18.7874 3.07359V10.0764Z"
              fill="#000000"
            />
            <path
              d="M49.5499 7.55756H41.9755V11.3361H49.1426V16.3741H41.9755V20.3038H49.5499V25.3418H35.5686V2.51953H49.5499V7.55756Z"
              fill="#000000"
            />
            <path
              d="M69.1951 21.3637H60.0734L58.6074 25.3186H51.7932L61.1321 2.64746H68.1092L77.4753 25.4446H70.5797L69.1951 21.3637ZM67.4848 16.8547L64.6342 9.29766L61.7566 16.8547H67.4848Z"
              fill="#000000"
            />
            <path
              d="M100.693 25.319H92.7385L86.6574 16.5528V25.319H80.2776V2.52189H90.2138C91.4352 2.49598 92.651 2.68399 93.7973 3.07607C94.747 3.4161 95.6076 3.93992 96.3221 4.61267C96.9866 5.25247 97.4958 6.01693 97.8152 6.85459C98.1578 7.72635 98.3324 8.64723 98.3311 9.57513C98.3986 11.0788 97.9206 12.56 96.9736 13.7819C95.9651 14.9278 94.5509 15.7045 92.9829 15.9734L100.693 25.319ZM86.6574 12.5979H87.8519C88.8773 12.6641 89.8977 12.4163 90.7567 11.8926C91.0902 11.6425 91.3551 11.3226 91.5297 10.9592C91.7043 10.5958 91.7836 10.1992 91.7612 9.80184C91.7836 9.4045 91.7043 9.00788 91.5297 8.64446C91.3551 8.28105 91.0902 7.96118 90.7567 7.71106C89.901 7.17849 88.8803 6.9218 87.8519 6.98054H86.6574V12.5979Z"
              fill="#000000"
            />
            <path
              d="M121.051 10.0764C120.418 9.29432 119.599 8.65951 118.656 8.22228C117.714 7.78506 116.675 7.55743 115.621 7.55743C114.69 7.53581 113.764 7.69898 112.906 8.03605C112.117 8.34379 111.398 8.78836 110.789 9.34593C110.199 9.92426 109.729 10.599 109.404 11.336C109.066 12.1382 108.9 12.9938 108.915 13.855C108.907 14.7156 109.073 15.5701 109.404 16.374C109.735 17.1141 110.214 17.7893 110.816 18.364C111.419 18.9234 112.128 19.3759 112.906 19.6991C113.763 20.0384 114.689 20.2017 115.621 20.1777C116.667 20.1404 117.693 19.8964 118.629 19.462C119.565 19.0276 120.391 18.4128 121.051 17.6587V24.7875L120.399 25.0142C119.516 25.3166 118.608 25.5525 117.684 25.7195C116.861 25.8686 116.025 25.9445 115.187 25.9462C111.836 25.9928 108.599 24.8168 106.173 22.6715C105.037 21.5506 104.118 20.2551 103.459 18.8426C102.741 17.3091 102.381 15.6525 102.4 13.9809C102.377 12.3253 102.739 10.6845 103.459 9.1696C104.44 7.03003 106.072 5.20206 108.154 3.90917C110.237 2.61629 112.681 1.91452 115.187 1.88965C116.153 1.8919 117.118 1.98473 118.064 2.16674C119.086 2.38853 120.085 2.69194 121.051 3.07359V10.0764Z"
              fill="#000000"
            />
            <path
              d="M131.473 11.3109H140.703V2.51953H147.083V25.3166H140.703V15.9207H131.473V25.3166H125.093V2.51953H131.473V11.3109Z"
              fill="#000000"
            />
          </svg>
        </div>
        <div className="introduce">C’EARCH 소개</div>
        <div className="apply">멘토 신청</div>
        <div className="menu">
          {footerMenuArr.map((el, index) => (
            <span onClick={() => onClickMoveMenu(index)} key={index}>
              {el.menu}
            </span>
          ))}
        </div>
        <div className="customer">
          <span>고객센터</span>
          <span>자주하는 질문</span>
        </div>
      </Contents>
      <Bottom>Copyright © 2022 C’earch. All Rights Reserved.</Bottom>
    </Footer>
  )
}
