import * as CH from './Home.styles'
import { SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import 'swiper/css/navigation'
import 'swiper/css'
import Tooltip from '@mui/material/Tooltip'

import { DateToString } from '../../../commons/libraries/utils/utils'
import SwiperCategory from '../../commons/category/Category'
import PopularClass from './PopularClass'
import NewClass from './NewClass'

export default function HomeUI(props) {
  return (
    <CH.Wrapper>
      <article>
        <section>
          <p>클래스 바로가기</p>
          <SwiperCategory />
        </section>

        <section>
          <p>인기 멘토</p>
          <CH.Mentor>
            {props.MentorRecommendData?.fetchMostRecommendMentor?.map((el) => (
              <div key={el.id}>
                <div className="mentorCardFront">
                  <div className="profileImg">
                    <div>
                      <img src="/images/profile.png" />
                    </div>
                  </div>
                  <CH.MentorInfo>
                    <div className="workPart">
                      <div>
                        <p>{el.companyName}</p>
                        <p>{el.department}</p>
                      </div>
                      <div>
                        {el.work?.slice(0, 2).map((categoryEl) => (
                          <span key={el.id}>
                            {categoryEl.category.categoryname}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="blank"></div>
                    <div className="mentorName">
                      <p>{el.user?.name}</p>
                    </div>
                  </CH.MentorInfo>
                </div>
                <div
                  className="mentorCardBack"
                  id={el.id}
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
                  <div>{el.selfIntro}</div>
                </div>
              </div>
            ))}
          </CH.Mentor>
        </section>

        <section>
          <p>답변률 높은 멘토</p>
          <CH.Mentor>
            {props.MentorAnswerData?.fetchMostAnswerMentor?.map((el) => (
              <div key={el.id}>
                <div className="mentorCardFront">
                  <div className="profileImg">
                    <div>
                      <img src="/images/profile.png" />
                    </div>
                  </div>
                  <CH.MentorInfo>
                    <div className="workPart">
                      <div>
                        <p>{el.companyName}</p>
                        <p>{el.department}</p>
                      </div>
                      <div>
                        {el.work?.slice(0, 2).map((categoryEl) => (
                          <span key={el.id}>
                            {categoryEl.category.categoryname}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="blank"></div>
                    <div className="mentorName">
                      <p>{el.user?.name}</p>
                    </div>
                  </CH.MentorInfo>
                </div>
                <div
                  className="mentorCardBack"
                  id={el.id}
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
                  <div>{el.selfIntro}</div>
                </div>
              </div>
            ))}
          </CH.Mentor>
        </section>

        <section>
          <p>최근 등록된 클래스</p>
          <CH.Class>
            {props.NewClassData?.fetchNewClasses
              ?.slice(0, 8)
              .map((el, index) => (
                <div
                  key={el.id}
                  id={el.id}
                  onClick={props.onClickMoveToClassDetail}
                >
                  <NewClass index={index} el={el} />
                </div>
              ))}
          </CH.Class>
        </section>

        <section>
          <p>인기있는 클래스</p>
          <CH.Class>
            {props.PopularClassData?.fetchPopularClass?.map((el) => (
              <div
                key={el.id}
                id={el.id}
                onClick={props.onClickMoveToClassDetail}
              >
                <PopularClass el={el} />
              </div>
            ))}
          </CH.Class>
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
            breakpoints={{
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              750: {
                slidesPerView: 2,
                spaceBetween: 25,
              },
              500: {
                slidesPerView: 1,
                spaceBetween: 40,
              },
              0: {
                slidesPerView: 1,
                spaceBetween: 40,
              },
            }}
            modules={[Navigation]}
            navigation={{
              nextEl: '.swiper-button-next-n1',
              prevEl: '.swiper-button-prev-n1',
            }}
            /* onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)} */
          >
            {props.LikeBoardsData?.fetchLikePost?.map((el) => {
              return (
                <SwiperSlide key={el.id}>
                  <CH.BoardTop>
                    <div>
                      <img src="images/profileDefault.png" />
                    </div>
                    <span>{el.name}</span>
                  </CH.BoardTop>
                  <CH.BoardBottom>
                    <p className="title">{el.title}</p>
                    <p className="contents">{el.contents}</p>
                    <div className="icon">
                      <div>
                        <img src="/images/comment-dots-regular.svg" />
                        <span> {el.commentsCount}</span>
                      </div>
                      <div>
                        <img src="/images/heart-solid.svg" />
                        <span> {el.likescount}</span>
                      </div>
                    </div>
                    <div className="date">{DateToString(el.createdAt)}</div>
                  </CH.BoardBottom>
                </SwiperSlide>
              )
            })}
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
            breakpoints={{
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              750: {
                slidesPerView: 2,
                spaceBetween: 25,
              },
              500: {
                slidesPerView: 1,
                spaceBetween: 40,
              },
              0: {
                slidesPerView: 1,
                spaceBetween: 40,
              },
            }}
            modules={[Navigation]}
            navigation={{
              nextEl: '.swiper-button-next-n2',
              prevEl: '.swiper-button-prev-n2',
            }}
            /* onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)} */
          >
            {props.NewBoardsData?.fetchQtBoards?.slice(0, 8).map((el) => {
              return (
                <SwiperSlide key={el.id}>
                  <CH.BoardTop>
                    <div>
                      <img src="images/profileDefault.png" />
                    </div>
                    <span>{el.name}</span>
                  </CH.BoardTop>
                  <CH.BoardBottom>
                    <p className="title">{el.title}</p>
                    <p className="contents">{el.contents}</p>
                    <div className="icon">
                      <div>
                        <img src="/images/comment-dots-regular.svg" />
                        <span> {el.commentsCount}</span>
                      </div>
                      <div>
                        <img src="/images/heart-solid.svg" />
                        <span> {el.likescount}</span>
                      </div>
                    </div>
                    <div className="date">{DateToString(el.createdAt)}</div>
                  </CH.BoardBottom>
                </SwiperSlide>
              )
            })}
          </CH.BoardList>
        </section>
      </article>
    </CH.Wrapper>
  )
}
