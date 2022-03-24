import * as CH from './../styles/styled'
import { v4 as uuidv4 } from 'uuid'
import { useRouter } from 'next/router'
import { SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import mentorList from './mentorList.json'
import classList from './classList.json'
import boardList from './boardList.json'
import StarRoundedIcon from '@mui/icons-material/StarRounded'

export default function Home() {
  const router = useRouter()

  const onClickMoveToMentorDetail = () => {
    router.push(`/mentor/${router.query.id}`)
  }
  const onClickMoveToClassDetail = () => {
    router.push(`/class/${router.query.id}`)
  }

  const newMentorList = mentorList.map((el) => {
    return (
      <div key={uuidv4()} /* onClick={onClickMoveToMentorDetail} */>
        <div className="profileImg">
          <img src={el.profileImg} />
        </div>
        <CH.MentorInfo>
          <div className="workPart">
            <div>
              <p>{el.company}</p>
              <p>{el.department}</p>
            </div>
            <p>{el.part}</p>
          </div>
          <div className="blank"></div>
          <div className="mentorName">
            <p>{el.name}</p>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z" />
              </svg>
            </div>
          </div>
        </CH.MentorInfo>
      </div>
    )
  })
  const newClassList = classList.map((el) => {
    return (
      <div
        key={uuidv4()}
        // onClick={onClickMoveToClassDetail}
      >
        <CH.ClassImg>
          <img src="/images/mentor.jpeg" />
          <p>{el.name}</p>
          <p>{el.company}</p>
        </CH.ClassImg>
        <CH.ClassInfo>
          <CH.InfoTop>
            <div>
              <StarRoundedIcon />{' '}
              <span>
                {el.ratingAverage} ({el.peopleNum})
              </span>
            </div>
            <div>{el.classState}</div>
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
    <>
      {/* <CH.SlickSlider {...settings}>
        <CH.SliderGroup>
          <img src="/images/banner.jpg" />
        </CH.SliderGroup>
        <CH.SliderGroup>
          <img src="/images/banner.jpg" />
        </CH.SliderGroup>
        <CH.SliderGroup>
          <img src="/images/banner.jpg" />
        </CH.SliderGroup>
      </CH.SlickSlider> */}

      <CH.Wrapper>
        <article>
          <section>
            <p>클래스 바로가기</p>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JAVASCRIPT</li>
              <li>REACT</li>
              <li>TYPESCRIPT</li>
              <li>PYTHON</li>
              <li>C#</li>
              <li>PHP</li>
              <li>NODE.js</li>
              <li>MYSQL</li>
              <li>C</li>
              <li>DOCKER</li>
              <li>라이브러리</li>
            </ul>
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
            <CH.BoardList
              spaceBetween={20}
              slidesPerView={3}
              modules={[Navigation]}
              // navigation
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <div className="button">
                <div className="swiper-button-prev"></div>
              </div>
              <div className="button">
                <div className="swiper-button-next"></div>
              </div>

              {newBoardList}
            </CH.BoardList>
          </section>

          <section style={{ position: 'relative' }}>
            <p>최근 작성된 질문</p>
            <CH.BoardList
              spaceBetween={20}
              slidesPerView={3}
              modules={[Navigation]}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <div className="button">
                <div className="swiper-button-next"></div>
              </div>
              <div className="button">
                <div className="swiper-button-prev"></div>
              </div>
              {newBoardList}
            </CH.BoardList>
          </section>
        </article>
      </CH.Wrapper>
    </>
  )
}
