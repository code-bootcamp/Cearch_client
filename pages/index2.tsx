import * as CH from './../styles/styled'
import { v4 as uuidv4 } from 'uuid'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'

export default function Home() {
  const router = useRouter()

  const onClickMoveToMentorDetail = () => {
    router.push(`/mentor/${router.query.id}`)
  }
  const onClickMoveToClassDetail = () => {
    router.push(`/class/${router.query.id}`)
  }

  const mentorList = [
    {
      profileImg: 'images/profile.png',
      company: '회사명',
      department: '부서명',
      part: '업무파트',
      name: '◯◯◯ 멘토',
      title: '안녕하세요. 답변드립니다. 안녕하세요. 답변드립니다.',
      createAt: '2022-03-21',
    },
    {
      profileImg: 'images/profile.png',
      company: '회사명',
      department: '부서명',
      part: '업무파트',
      name: '◯◯◯ 멘토',
      title: '안녕하세요. 답변드립니다. 안녕하세요. 답변드립니다.',
      createAt: '2022-03-21',
    },
    {
      profileImg: 'images/profile.png',
      company: '회사명',
      department: '부서명',
      part: '업무파트',
      name: '◯◯◯ 멘토',
      title: '안녕하세요. 답변드립니다. 안녕하세요. 답변드립니다.',
      createAt: '2022-03-21',
    },
    {
      profileImg: 'images/profile.png',
      company: '회사명',
      department: '부서명',
      part: '업무파트',
      name: '◯◯◯ 멘토',
      title: '안녕하세요. 답변드립니다. 안녕하세요. 답변드립니다.',
      createAt: '2022-03-21',
    },
    {
      profileImg: 'images/profile.png',
      company: '회사명',
      department: '부서명',
      part: '업무파트',
      name: '◯◯◯ 멘토',
      title: '안녕하세요. 답변드립니다. 안녕하세요. 답변드립니다.',
      createAt: '2022-03-21',
    },
    {
      profileImg: 'images/profile.png',
      company: '회사명',
      department: '부서명',
      part: '업무파트',
      name: '◯◯◯ 멘토',
      title: '안녕하세요. 답변드립니다. 안녕하세요. 답변드립니다.',
      createAt: '2022-03-21',
    },
    {
      profileImg: 'images/profile.png',
      company: '회사명',
      department: '부서명',
      part: '업무파트',
      name: '◯◯◯ 멘토',
      title: '안녕하세요. 답변드립니다. 안녕하세요. 답변드립니다.',
      createAt: '2022-03-21',
    },
    {
      profileImg: 'images/profile.png',
      company: '회사명',
      department: '부서명',
      part: '업무파트',
      name: '◯◯◯ 멘토',
      title: '안녕하세요. 답변드립니다. 안녕하세요. 답변드립니다.',
      createAt: '2022-03-21',
    },
    {
      profileImg: 'images/profile.png',
      company: '회사명',
      department: '부서명',
      part: '업무파트',
      name: '◯◯◯ 멘토',
      title: '안녕하세요. 답변드립니다. 안녕하세요. 답변드립니다.',
      createAt: '2022-03-21',
    },
    {
      profileImg: 'images/profile.png',
      company: '회사명',
      department: '부서명',
      part: '업무파트',
      name: '◯◯◯ 멘토',
      title: '안녕하세요. 답변드립니다. 안녕하세요. 답변드립니다.',
      createAt: '2022-03-21',
    },
  ]
  const classList = [
    {
      profileImg: '/images/mentor.jpeg',
      ratingAverage: '4.0',
      peopleNum: '121',
      name: '◯◯◯ 멘토',
      company: '회사명',
      classState: '진행',
      category: 'HTML',
      title: '클래스 제목',
      createdAt: '2022. 03. 21',
    },
    {
      profileImg: '/images/mentor.jpeg',
      ratingAverage: '3.8',
      peopleNum: '222',
      name: '◯◯◯ 멘토',
      company: '회사명',
      classState: '진행',
      category: 'CSS',
      title: '클래스 제목',
      createdAt: '2022. 03. 21',
    },
    {
      profileImg: '/images/mentor.jpeg',
      ratingAverage: '4.3',
      peopleNum: '1234',
      name: '◯◯◯ 멘토',
      company: '회사명',
      classState: '진행',
      category: 'HTML',
      title: '클래스 제목',
      createdAt: '2022. 03. 21',
    },
    {
      profileImg: '/images/mentor.jpeg',
      ratingAverage: '4.1',
      peopleNum: '23',
      name: '◯◯◯ 멘토',
      company: '회사명',
      classState: '진행',
      category: 'JAVA',
      title: '클래스 제목',
      createdAt: '2022. 03. 21',
    },
    {
      profileImg: '/images/mentor.jpeg',
      ratingAverage: '4.5',
      peopleNum: '455',
      name: '◯◯◯ 멘토',
      company: '회사명',
      classState: '진행',
      category: 'PHP',
      title: '클래스 제목',
      createdAt: '2022. 03. 21',
    },
    {
      profileImg: '/images/mentor.jpeg',
      ratingAverage: '4.8',
      peopleNum: '122',
      name: '◯◯◯ 멘토',
      company: '회사명',
      classState: '진행',
      category: 'JAVASCRIPT',
      title: '클래스 제목',
      createdAt: '2022. 03. 21',
    },
    {
      profileImg: '/images/mentor.jpeg',
      ratingAverage: '4.0',
      peopleNum: '11',
      name: '◯◯◯ 멘토',
      company: '회사명',
      classState: '진행',
      category: 'NODE.js',
      title: '클래스 제목',
      createdAt: '2022. 03. 21',
    },
    {
      profileImg: '/images/mentor.jpeg',
      ratingAverage: '3.9',
      peopleNum: '76',
      name: '◯◯◯ 멘토',
      company: '회사명',
      classState: '진행',
      category: '라이브러리',
      title: '클래스 제목',
      createdAt: '2022. 03. 21',
    },
  ]
  const boardList = [
    {
      writer: '작성자',
      title: '클래스클래스클래스클래스클래스 제목',
      contents:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem facilis, vel nisi distinctio facere, pariatur sint odit esse quam mollitia cupiditate. Excepturi voluptatibus architecto, harum corporis tenetur veniam molestiae beatae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, quia officiis quidem facilis officia aliquid. Consectetur odit blanditiis, iure odio eveniet voluptates sit assumenda in minus quisquam consequatur, est suscipit? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor laborum cumque in hic molestias labore ex magni. Dolorum veniam hic eos, facere, in commodi sequi optio ex iste porro delectus!',
      comment: '5',
      like: '10',
      createdAt: '2022. 03. 21',
    },
    {
      writer: '작성자',
      title: '클래스 제목',
      contents:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem facilis, vel nisi distinctio facere, pariatur sint odit esse quam mollitia cupiditate. Excepturi voluptatibus architecto, harum corporis tenetur veniam molestiae beatae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, quia officiis quidem facilis officia aliquid. Consectetur odit blanditiis, iure odio eveniet voluptates sit assumenda in minus quisquam consequatur, est suscipit?',
      comment: '5',
      like: '10',
      createdAt: '2022. 03. 21',
    },
    {
      writer: '작성자',
      title: '클래스 제목 클래스 제목 클래스 제목 클래스 제목',
      contents:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, quia officiis quidem facilis officia aliquid. Consectetur odit blanditiis, iure odio eveniet voluptates sit assumenda in minus quisquam consequatur, est suscipit? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor laborum cumque in hic molestias labore ex magni. Dolorum veniam hic eos, facere, in commodi sequi optio ex iste porro delectus!',
      comment: '5',
      like: '10',
      createdAt: '2022. 03. 21',
    },
    {
      writer: '작성자',
      title: '클래스 제목',
      contents:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem facilis, vel nisi distinctio facere, pariatur sint odit esse quam mollitia cupiditate. Excepturi voluptatibus architecto, harum corporis tenetur veniam molestiae beatae.',
      comment: '5',
      like: '10',
      createdAt: '2022. 03. 21',
    },
    {
      writer: '작성자',
      title: '제목제목제목제목제목제목제목제목',
      contents:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor laborum cumque in hic molestias labore ex magni. Dolorum veniam hic eos, facere, in commodi sequi optio ex iste porro delectus!',
      comment: '5',
      like: '10',
      createdAt: '2022. 03. 21',
    },
    {
      writer: '작성자',
      title: '클래스 제목',
      contents:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem facilis, vel nisi distinctio facere, pariatur sint odit esse quam mollitia cupiditate. Excepturi voluptatibus architecto, harum corporis tenetur veniam molestiae beatae. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor laborum cumque in hic molestias labore ex magni. Dolorum veniam hic eos, facere, in commodi sequi optio ex iste porro delectus!',
      comment: '5',
      like: '10',
      createdAt: '2022. 03. 21',
    },
  ]

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </Head>
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
            <CH.Mentor>
              {mentorList.map((el, index) => (
                <div
                  key={uuidv4()}
                  id={el.index}
                  onClick={onClickMoveToMentorDetail}
                >
                  <div className="profileImg">
                    <img src={el.profileImg} />
                  </div>
                  <div className="bottom">
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
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </CH.Mentor>
          </section>

          <section>
            <p>답변률 높은 멘토</p>
            <CH.Mentor>
              {mentorList.map((el, index) => (
                <div
                  key={uuidv4()}
                  id={el.index}
                  onClick={onClickMoveToMentorDetail}
                >
                  <div className="profileImg">
                    <img src={el.profileImg} />
                  </div>
                  <div className="bottom">
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
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </CH.Mentor>
          </section>

          <section>
            <p>최근 등록된 클래스</p>
            <CH.Class>
              {classList.map((el, index) => (
                <div
                  key={uuidv4()}
                  id={el.index}
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
                        <span className="fa fa-star checked" />{' '}
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
              ))}
            </CH.Class>
          </section>

          <section>
            <p>인기있는 클래스</p>
            <CH.Class>
              {classList.map((el, index) => (
                <div
                  key={uuidv4()}
                  id={el.index}
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
                        <span className="fa fa-star checked" />{' '}
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
              ))}
            </CH.Class>
          </section>

          <section>
            <p>좋아요가 많은 질문</p>
            <CH.BoardList
              spaceBetween={20}
              slidesPerView={3}
              modules={[Navigation]}
              /* navigation={{
                prevEl: navPrevButton.current,
                nextEl: navNextButton.current,
              }} */
              /* navigation={{
                prevEl: '.prev',
                nextEl: '.next',
              }} */
              navigation /* ={{
                prevEl: prevRef?.current,
                nextEl: nextRef?.current,
              }} */
              /* onSwiper={setSwiper} */
              // onBeforeInit={onBeforeInit}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <p>최근 작성된 질문</p>
              {/* <div ref={navPrevButton} />
              <div ref={navNextButton} /> */}

              {/* <div className="prev"></div>
              <div className="next"></div> */}
              {boardList.map((el) => (
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
              ))}
              {/* <div className="prev"></div>
              <div className="next"></div> */}
            </CH.BoardList>
          </section>

          <section style={{ position: 'relative' }}>
            {/* <div className="swiper-button" ref={prevRef}>
              prev
            </div> */}
            <p>최근 작성된 질문</p>

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
                <div className="swiper-button-next"></div>
              </div>
              <div className="button">
                <div className="swiper-button-prev"></div>
              </div>
              {boardList.map((el) => (
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
              ))}
            </CH.BoardList>
          </section>
        </article>
      </CH.Wrapper>
    </>
  )
}
