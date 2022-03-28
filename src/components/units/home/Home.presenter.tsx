import * as CH from './Home.styles'
import { v4 as uuidv4 } from 'uuid'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import Tooltip from '@mui/material/Tooltip'

import mentorList from './mentorList.json'
import classList from './classList.json'
import boardList from './boardList.json'
import StarRoundedIcon from '@mui/icons-material/StarRounded'

export default function HomeUI(props) {
  const newMentorList = mentorList.map((el, index) => {
    return (
      <div key={uuidv4()}>
        <div className="mentorCardFront">
          <div className="profileImg">
            <div>
              <img src={el.profileImg} />
            </div>
          </div>
          <CH.MentorInfo>
            <div className="workPart">
              <div>
                <p>{el.company}</p>
                <p>{el.department}</p>
              </div>
              <div>
                {new Array(el.part.length)
                  .fill(el.part)
                  .filter((filterEl, index) => {
                    if (index < 2) return filterEl
                  })
                  .map((el, index) => (
                    <span key={uuidv4()}>{el[index]}</span>
                  ))}
              </div>
            </div>
            <div className="blank"></div>
            <div className="mentorName">
              <p>{el.name}</p>
              {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z" />
              </svg> */}
            </div>
          </CH.MentorInfo>
        </div>
        <div
          className="mentorCardBack"
          id={String(index)}
          onClick={props.onClickMoveToMentorDetail}
        >
          <div className="badge">
            <Tooltip title="30분이내 답변" placement="top">
              <img src="/images/medal1.png" />
            </Tooltip>
            <Tooltip title="답변률 90%" placement="top">
              <img src="/images/medal2.png" />
            </Tooltip>
          </div>
        </div>
      </div>
    )
  })
  const newClassList = classList.map((el, index) => {
    return (
      <div
        key={uuidv4()}
        id={String(index)}
        onClick={props.onClickMoveToClassDetail}
      >
        <CH.ClassImg>
          <img src="/images/mentor.jpeg" />
          <p>{el.name}</p>
          <p>{el.company}</p>
        </CH.ClassImg>
        <CH.ClassInfo>
          <CH.InfoTop>
            <div>
              <StarRoundedIcon style={{ color: 'gold' }} />{' '}
              <span>
                {el.ratingAverage} ({el.peopleNum})
              </span>
            </div>
            <div className="classState">{el.classState}</div>
          </CH.InfoTop>
          <CH.InfoBottom>
            <div className="classCategory">
              <span>{el.category}</span>
            </div>
            <div className="classTitle">{el.title}</div>
            <div className="classDate">{el.createdAt}</div>
          </CH.InfoBottom>
        </CH.ClassInfo>
      </div>
    )
  })
  const newBoardList = boardList.map((el, index) => {
    return (
      <SwiperSlide key={uuidv4()}>
        <CH.BoardTop>
          <div>
            <img src="/images/profile.png" />
          </div>
          <span>{el.writer}</span>
        </CH.BoardTop>
        <CH.BoardBottom>
          <p className="title">{el.title}</p>
          <p className="contents">{el.contents}</p>
          <div className="icon">
            <div>
              <img src="/images/comment-dots-regular.svg" />
              <span> {el.comment}</span>
            </div>
            <div>
              <img src="/images/heart-solid.svg" />
              <span> {el.like}</span>
            </div>
          </div>
          <div className="date">{el.createdAt}</div>
        </CH.BoardBottom>
      </SwiperSlide>
    )
  })

  return (
    <CH.Wrapper>
      <article>
        <section>
          <p>클래스 바로가기</p>
          <Swiper
            spaceBetween={15}
            slidesPerView={8}
            navigation
            modules={[Navigation]}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            style={{ textAlign: 'center' }}
            id="mainCategory"
          >
            <SwiperSlide className="categoryColumn">
              <svg
                width="53"
                height="58"
                viewBox="0 0 53 58"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M51.0382 2H2L6.43785 48.5974L27.7395 56.1418L46.6004 48.5974L51.0382 2Z"
                  stroke="black"
                  strokeWidth="2.21892"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M42.3869 13.9844H13.9846L14.8722 25.5228H39.5023L37.5052 40.8334L27.9638 44.8274L17.0911 40.8334L15.9817 35.0642"
                  stroke="black"
                  strokeWidth="2.21892"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>HTML</span>
            </SwiperSlide>
            <SwiperSlide className="categoryColumn">
              <svg
                width="53"
                height="58"
                viewBox="0 0 53 58"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M51.0382 2H2L6.43785 48.5974L27.7395 56.1418L46.6004 48.5974L51.0382 2Z"
                  stroke="black"
                  strokeWidth="2.21892"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.5367 35.0642L16.6462 40.8334L27.5189 44.8274L37.0603 40.8334L39.0573 25.5228H14.6491L41.2762 13.9844L12.6521 13.9844"
                  stroke="black"
                  strokeWidth="2.21892"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>CSS</span>
            </SwiperSlide>
            <SwiperSlide className="categoryColumn">
              <svg
                width="53"
                height="58"
                viewBox="0 0 53 58"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M51.0382 2H2L6.43785 48.5974L27.7395 56.1418L46.6004 48.5974L51.0382 2Z"
                  stroke="black"
                  strokeWidth="2.21892"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.5382 35.0634L16.6476 40.8326L25.3014 43.2734V13.7617H10.8784"
                  stroke="black"
                  strokeWidth="2.21892"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M29.9568 43.4953L37.0573 40.8326L39.2763 27.9628H29.9568V13.7617H41.7171L40.6076 18.4215"
                  stroke="black"
                  strokeWidth="2.21892"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>JAVASCRIPT</span>
            </SwiperSlide>
            <SwiperSlide className="categoryColumn">
              <svg
                width="56"
                height="50"
                viewBox="0 0 56 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.6429 2.03337C4.21891 11.9844 27.5182 50.3715 40.1631 47.508C51.0382 39.4988 28.6271 -0.885089 14.6429 2.03337Z"
                  stroke="black"
                  strokeWidth="2.21892"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M40.82 2.33743C26.9901 -1.71445 5.39553 37.6568 14.1979 47.1759C26.5716 52.5894 50.3395 12.9889 40.82 2.33743Z"
                  stroke="black"
                  strokeWidth="2.21892"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M53.7169 25.0756C50.311 11.0726 5.41716 12.0568 1.57461 24.4394C3.07319 37.8621 49.2522 38.6455 53.7169 25.0756Z"
                  stroke="black"
                  strokeWidth="2.21892"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle
                  cx="27.5186"
                  cy="24.8533"
                  r="4.88164"
                  fill="black"
                  className="circleFill"
                />
              </svg>
              <span>REACT</span>
            </SwiperSlide>
            <SwiperSlide className="categoryColumn">
              <svg
                width="51"
                height="54"
                viewBox="0 0 51 54"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M41.9893 36.5978C40.8309 33.6024 35.0617 33.6024 34.6156 36.9767C34.3958 41.1927 41.9403 38.0386 41.9893 42.3022C42.0244 45.3617 34.396 45.8056 34.396 42.3022"
                  stroke="black"
                  strokeWidth="2.21892"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 2H49.2631V52.1477H2V11.9852V2Z"
                  stroke="black"
                  strokeWidth="2.21892"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21.0842 34.3965H25.5221M29.9599 34.3965H25.5221M25.5221 34.3965V44.6035"
                  stroke="black"
                  strokeWidth="2.21892"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>TYPESCRIPT</span>
            </SwiperSlide>
            <SwiperSlide className="categoryColumn">
              <svg
                width="51"
                height="54"
                viewBox="0 0 51 54"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.0872 23.9679V17.7549H30.1789V23.9679M30.1789 23.9679V32.3998H20.4156V40.8317M30.1789 23.9679H38.3889V40.8317H26.8505H33.5072V47.4885H20.4156V40.8317M23.5221 23.9679H12.2056V40.8317H20.4156"
                  stroke="black"
                  strokeWidth="2.21892"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M20.4146 20.6387H21.7459"
                  stroke="black"
                  strokeWidth="1.33136"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M29.0701 44.6016H30.4014"
                  stroke="black"
                  strokeWidth="1.33136"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 2H49.2631V52.1477H2V11.9852V2Z"
                  stroke="black"
                  strokeWidth="2.21892"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 12.4287H49.2631"
                  stroke="black"
                  strokeWidth="2.21892"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>PYTHON</span>
            </SwiperSlide>
            <SwiperSlide className="categoryColumn">
              <svg
                width="45"
                height="52"
                viewBox="0 0 45 52"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 13.9822L22.636 2L43.4939 13.9822V37.7247L22.636 49.9288L2 37.7247V13.9822Z"
                  stroke="black"
                  strokeWidth="2.21892"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M29.1683 33.6101C29.6514 34.1788 29.5859 35.0395 28.9626 35.4499C27.5864 36.3564 26.0204 36.9481 24.3767 37.1749C22.2851 37.4636 20.1547 37.1494 18.2355 36.2693C16.3163 35.3893 14.688 33.9798 13.542 32.2066C12.396 30.4333 11.7797 28.3698 11.7656 26.2585C11.7515 24.1472 12.3402 22.0757 13.4624 20.2873C14.5847 18.4989 16.194 17.0679 18.1013 16.1622C20.0085 15.2566 22.1346 14.914 24.2298 15.1747C25.8764 15.3796 27.4502 15.9504 28.8384 16.8384C29.4671 17.2405 29.5441 18.1002 29.0686 18.6753C28.5931 19.2504 27.7455 19.3201 27.1016 18.943C26.122 18.3692 25.032 17.9977 23.8962 17.8564C22.3113 17.6592 20.7031 17.9184 19.2604 18.6034C17.8177 19.2884 16.6004 20.3709 15.7515 21.7237C14.9025 23.0765 14.4573 24.6434 14.4679 26.2405C14.4786 27.8375 14.9447 29.3984 15.8116 30.7397C16.6785 32.0811 17.9102 33.1472 19.3619 33.8129C20.8136 34.4786 22.4252 34.7163 24.0073 34.4979C25.1411 34.3415 26.2261 33.9555 27.1979 33.3687C27.8367 32.983 28.6851 33.0414 29.1683 33.6101Z"
                  fill="black"
                  className="pathFill"
                />
                <path
                  d="M25.5159 24.1924H31.9508"
                  stroke="black"
                  strokeWidth="2.21892"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M30.6189 22.8594L30.6189 29.2943"
                  stroke="black"
                  strokeWidth="2.21892"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M25.5159 27.9619H31.9508"
                  stroke="black"
                  strokeWidth="2.21892"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M26.8491 22.8594L26.8491 29.2943"
                  stroke="black"
                  strokeWidth="2.21892"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>C#</span>
            </SwiperSlide>
            <SwiperSlide className="categoryColumn">
              <svg
                width="48"
                height="58"
                viewBox="0 0 48 58"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.2011 2L2 16.2011M16.2011 2H42.1625V31.2898M16.2011 2V16.2011H2M2 16.2011V56.3637H42.1625V48.5974"
                  stroke="black"
                  strokeWidth="2.21892"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M35.9524 45.0479L35.9524 39.7224M35.9524 34.397L35.9524 39.7224M35.9524 39.7224L29.9613 39.7224M29.9613 45.0479L29.9613 34.397"
                  stroke="black"
                  strokeWidth="2.21892"
                  strokeLinecap="round"
                />
                <path
                  d="M20.1975 39.0545C21.7508 39.2766 24.8573 39.0993 24.8573 36.6141C24.8573 34.1289 21.9726 34.4069 20.1975 34.4049V45.0473"
                  stroke="black"
                  strokeWidth="2.21892"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M41.4956 39.0545C43.0489 39.2766 46.1553 39.0993 46.1553 36.6141C46.1553 34.1289 43.2707 34.4069 41.4956 34.4049V45.0473"
                  stroke="black"
                  strokeWidth="2.21892"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>PHP</span>
            </SwiperSlide>
            <SwiperSlide className="categoryColumn">
              <svg
                width="45"
                height="52"
                viewBox="0 0 45 52"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.3136 17.7544C15.3136 24.4111 15.7573 37.8973 15.3136 39.2779C13.3165 45.4909 5.69821 40.6833 2 37.7247V13.9822L22.636 2L43.4939 13.9822V37.7247L22.636 49.9288L16.6449 46.3785"
                  stroke="black"
                  strokeWidth="2.21892"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M34.838 20.9513C32.807 15.6994 22.6918 15.6995 21.9098 21.6158C21.5244 29.0076 34.7522 23.4776 34.838 30.9529C34.8995 36.3171 21.5247 37.0955 21.5247 30.9529"
                  stroke="black"
                  strokeWidth="2.21892"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>NODE.js</span>
            </SwiperSlide>
            <SwiperSlide className="categoryColumn">
              <svg
                width="56"
                height="58"
                viewBox="0 0 56 58"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M49.2642 42.2109V52.1961H54.1458"
                  stroke="black"
                  strokeWidth="2.21892"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M41.4956 49.5322L44.6021 52.8606"
                  stroke="black"
                  strokeWidth="2.21892"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.2056 7.5953C12.2056 0.493529 43.9362 -0.215316 43.9362 7.5953M12.2056 7.5953C12.2056 16.2479 43.9362 16.1169 43.9362 7.5953M12.2056 7.5953V30.8928C12.2056 39.5455 43.9362 39.4145 43.9362 30.8928V7.5953M12.2056 15.3604C12.2056 24.013 43.9362 23.882 43.9362 15.3604M12.2056 23.1266C12.2056 31.7792 43.9362 31.6482 43.9362 23.1266"
                  stroke="black"
                  strokeWidth="2.21892"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 51.5262V41.541L5.55028 45.9789L9.32245 41.541V51.5262"
                  stroke="black"
                  strokeWidth="2.21892"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14.2024 46.4268L16.8651 50.8646L19.3059 46.4268L14.2024 56.6338"
                  stroke="black"
                  strokeWidth="2.21892"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M31.7837 44.2745C30.6253 41.2791 24.8561 41.2792 24.4101 44.6535C24.1903 48.8694 31.7348 45.7154 31.7837 49.9789C31.8188 53.0384 24.1904 53.4824 24.1904 49.9789"
                  stroke="black"
                  strokeWidth="2.21892"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M44.1601 44.6508C44.1601 41.3212 36.6157 41.3205 36.6157 44.6508V50.4188C36.6157 53.5253 44.1601 53.5253 44.1601 50.4188V44.6508Z"
                  stroke="black"
                  strokeWidth="2.21892"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>MYSQL</span>
            </SwiperSlide>
            <SwiperSlide className="categoryColumn">
              <svg
                width="45"
                height="52"
                viewBox="0 0 45 52"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 13.9822L22.636 2L43.4939 13.9822V37.7247L22.636 49.9288L2 37.7247V13.9822Z"
                  stroke="black"
                  strokeWidth="2.21892"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M29.1683 33.3914C29.6514 33.9601 29.5859 34.8207 28.9626 35.2312C27.5864 36.1376 26.0204 36.7294 24.3767 36.9562C22.2851 37.2448 20.1547 36.9306 18.2355 36.0506C16.3163 35.1705 14.688 33.7611 13.542 31.9878C12.396 30.2145 11.7797 28.1511 11.7656 26.0398C11.7515 23.9285 12.3402 21.8569 13.4624 20.0685C14.5847 18.2801 16.194 16.8491 18.1013 15.9435C20.0085 15.0379 22.1346 14.6953 24.2298 14.956C25.8764 15.1609 27.4502 15.7316 28.8384 16.6196C29.4671 17.0217 29.5441 17.8814 29.0686 18.4565C28.5931 19.0316 27.7455 19.1014 27.1016 18.7242C26.122 18.1505 25.032 17.779 23.8962 17.6377C22.3113 17.4405 20.7031 17.6996 19.2604 18.3847C17.8177 19.0697 16.6004 20.1522 15.7515 21.5049C14.9025 22.8577 14.4573 24.4247 14.4679 26.0217C14.4786 27.6188 14.9447 29.1796 15.8116 30.521C16.6785 31.8623 17.9102 32.9284 19.3619 33.5942C20.8136 34.2599 22.4252 34.4975 24.0073 34.2792C25.1411 34.1227 26.2261 33.7367 27.1979 33.1499C27.8367 32.7642 28.6851 32.8226 29.1683 33.3914Z"
                  fill="black"
                  className="pathFill"
                />
              </svg>
              <span>C</span>
            </SwiperSlide>
            <SwiperSlide className="categoryColumn">
              <svg
                width="47"
                height="47"
                viewBox="0 0 47 47"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="23.2987"
                  cy="23.2987"
                  r="22.1893"
                  stroke="black"
                  strokeWidth="2.21892"
                  className="circleStroke"
                />
                <path
                  d="M7.63813 23.3671C6.8121 32.6878 11.5885 37.2398 18.6491 36.8063C25.7098 36.3728 32.787 33.9884 35.9021 25.5345C38.228 25.5345 41.0938 24.4509 41.7169 22.4998C40.8862 21.1995 38.6018 20.3324 36.5251 20.9825C36.3174 19.6822 35.9021 18.1648 34.033 16.8643C32.9947 17.37 31.3333 19.8989 32.787 23.3671H7.65655"
                  stroke="black"
                  strokeWidth="2.21892"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <rect
                  x="22.1904"
                  y="10.2061"
                  width="3.55028"
                  height="3.10649"
                  fill="black"
                  className="rectFill"
                />
                <rect
                  x="22.1904"
                  y="14.1992"
                  width="3.55028"
                  height="3.10649"
                  fill="black"
                  className="rectFill"
                />
                <rect
                  x="22.1904"
                  y="18.1973"
                  width="3.55028"
                  height="3.10649"
                  fill="black"
                  className="rectFill"
                />
                <rect
                  x="13.3118"
                  y="18.1973"
                  width="3.55028"
                  height="3.10649"
                  fill="black"
                  className="rectFill"
                />
                <rect
                  x="13.3118"
                  y="14.1992"
                  width="3.55028"
                  height="3.10649"
                  fill="black"
                  className="rectFill"
                />
                <rect
                  x="8.87842"
                  y="18.1973"
                  width="3.55028"
                  height="3.10649"
                  fill="black"
                  className="rectFill"
                />
                <rect
                  x="26.6296"
                  y="18.1973"
                  width="3.55028"
                  height="3.10649"
                  fill="black"
                  className="rectFill"
                />
                <rect
                  x="17.751"
                  y="18.1973"
                  width="3.55028"
                  height="3.10649"
                  fill="black"
                  className="rectFill"
                />
                <rect
                  x="17.751"
                  y="14.1992"
                  width="3.55028"
                  height="3.10649"
                  fill="black"
                  className="rectFill"
                />
              </svg>
              <span>DOCKER</span>
            </SwiperSlide>
            <SwiperSlide className="categoryColumn">
              <svg
                width="45"
                height="58"
                viewBox="0 0 45 58"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.2011 2L2 16.2011M16.2011 2H42.1625V31.2898M16.2011 2V16.2011H2M2 16.2011V56.3637H42.1625V48.5974"
                  stroke="black"
                  strokeWidth="2.21892"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M27.0759 35.7285L23.3037 39.7226L27.0759 43.4948"
                  stroke="black"
                  strokeWidth="2.21892"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M39.72 43.7148L43.4922 39.7208L39.72 35.9486"
                  stroke="black"
                  strokeWidth="2.21892"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M35.7251 33.0635L30.8435 46.377"
                  stroke="black"
                  strokeWidth="2.21892"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>LIBRARY</span>
            </SwiperSlide>
          </Swiper>
        </section>

        <section>
          <p>인기 멘토</p>
          <CH.Mentor>{newMentorList}</CH.Mentor>
        </section>

        <section>
          <p>답변률 높은 멘토</p>
          <CH.Mentor>{newMentorList}</CH.Mentor>
        </section>

        <section>
          <p>최근 등록된 클래스</p>
          <CH.Class>{newClassList}</CH.Class>
        </section>

        <section>
          <p>인기있는 클래스</p>
          <CH.Class>{newClassList}</CH.Class>
        </section>

        <section style={{ position: 'relative' }}>
          <p>좋아요가 많은 질문</p>
          <CH.ArrowButton>
            <div className="swiper-button-next-n1">
              <div className="arrow-left icon"></div>
            </div>
            <div className="swiper-button-prev-n1">
              <div className="arrow-right icon"></div>
            </div>
          </CH.ArrowButton>
          <CH.BoardList
            spaceBetween={30}
            slidesPerView={3}
            modules={[Navigation]}
            navigation={{
              nextEl: '.swiper-button-next-n1',
              prevEl: '.swiper-button-prev-n1',
            }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {newBoardList}
          </CH.BoardList>
        </section>

        <section style={{ position: 'relative' }}>
          <p>최근 작성된 질문</p>
          <CH.ArrowButton>
            <div className="swiper-button-next-n2">
              <div className="arrow-left icon"></div>
            </div>
            <div className="swiper-button-prev-n2">
              <div className="arrow-right icon"></div>
            </div>
          </CH.ArrowButton>
          <CH.BoardList
            spaceBetween={30}
            slidesPerView={3}
            modules={[Navigation]}
            navigation={{
              nextEl: '.swiper-button-next-n2',
              prevEl: '.swiper-button-prev-n2',
            }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {newBoardList}
          </CH.BoardList>
        </section>
      </article>
    </CH.Wrapper>
  )
}
