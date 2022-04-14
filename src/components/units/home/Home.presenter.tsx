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
    <>
      <CH.Banner>
        <img src="/images/banner.png" />
      </CH.Banner>
      <CH.Wrapper>
        <article>
          <section>
            <p>클래스 바로가기</p>
            <SwiperCategory />
          </section>

          <section>
            <p>인기 멘토</p>
            <CH.Mentor>
              {props.MentorRecommendData?.fetchMostRecommendMentor?.map(
                (el) => (
                  <div key={el.id}>
                    <div className="mentorCardFront">
                      <div className="profileImg">
                        <div>
                          <img
                            src={
                              el.user?.imageUrl === null
                                ? '/images/profileDefault.png'
                                : el.user?.imageUrl
                            }
                            onError={(e) => {
                              e.currentTarget.src = '/images/profileDefault.png'
                            }}
                          />
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
                      <p className="mentorName">{el.user?.name} 멘토</p>
                      <div className="backTop">
                        <span>{el.companyName}</span>
                        <div className="line"></div>
                        <span>{el.department}</span>
                      </div>
                      <div className="backBottom">
                        <div className="answerWrapper">
                          <svg
                            width="11"
                            height="11"
                            viewBox="0 0 11 11"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M0.916016 2.74967C0.916016 2.24341 1.32642 1.83301 1.83268 1.83301H9.16602C9.67228 1.83301 10.0827 2.24341 10.0827 2.74967V7.79134C10.0827 8.2976 9.67228 8.70801 9.16602 8.70801H7.0642L5.82344 9.94877C5.64445 10.1278 5.35425 10.1278 5.17526 9.94877L3.9345 8.70801H1.83268C1.32642 8.70801 0.916016 8.2976 0.916016 7.79134V2.74967ZM9.16602 2.74967H1.83268V7.79134H4.12435C4.24591 7.79134 4.36249 7.83963 4.44844 7.92558L5.49935 8.97649L6.55026 7.92558C6.63621 7.83963 6.75279 7.79134 6.87435 7.79134H9.16602V2.74967Z"
                              fill="#0D0D0D"
                            />
                            <path
                              d="M6.18685 5.27051C6.18685 5.6502 5.87904 5.95801 5.49935 5.95801C5.11965 5.95801 4.81185 5.6502 4.81185 5.27051C4.81185 4.89081 5.11965 4.58301 5.49935 4.58301C5.87904 4.58301 6.18685 4.89081 6.18685 5.27051Z"
                              fill="#0D0D0D"
                            />
                            <path
                              d="M8.02018 5.27051C8.02018 5.6502 7.71238 5.95801 7.33268 5.95801C6.95299 5.95801 6.64518 5.6502 6.64518 5.27051C6.64518 4.89081 6.95299 4.58301 7.33268 4.58301C7.71238 4.58301 8.02018 4.89081 8.02018 5.27051Z"
                              fill="#0D0D0D"
                            />
                            <path
                              d="M4.35352 5.27051C4.35352 5.6502 4.04571 5.95801 3.66602 5.95801C3.28632 5.95801 2.97852 5.6502 2.97852 5.27051C2.97852 4.89081 3.28632 4.58301 3.66602 4.58301C4.04571 4.58301 4.35352 4.89081 4.35352 5.27051Z"
                              fill="#0D0D0D"
                            />
                          </svg>
                          답변수{' '}
                          <span className="orange">
                            {!el.user?.comments?.id
                              ? 0
                              : el.user?.comments?.id.length}
                          </span>{' '}
                          건
                        </div>
                        <div className="followerWrapper">
                          <svg
                            width="11"
                            height="11"
                            viewBox="0 0 11 11"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M4.58268 1.83366C3.57016 1.83366 2.74935 2.65447 2.74935 3.66699C2.74935 4.67951 3.57016 5.50033 4.58268 5.50033C5.5952 5.50033 6.41602 4.67951 6.41602 3.66699C6.41602 2.65447 5.5952 1.83366 4.58268 1.83366ZM1.83268 3.66699C1.83268 2.14821 3.0639 0.916992 4.58268 0.916992C6.10147 0.916992 7.33268 2.14821 7.33268 3.66699C7.33268 5.18578 6.10147 6.41699 4.58268 6.41699C3.0639 6.41699 1.83268 5.18578 1.83268 3.66699ZM7.71238 1.72245C7.89137 1.54346 8.18157 1.54346 8.36056 1.72245C9.4345 2.79639 9.4345 4.53759 8.36056 5.61154C8.18157 5.79053 7.89137 5.79053 7.71238 5.61154C7.53339 5.43255 7.53339 5.14234 7.71238 4.96335C8.42834 4.24739 8.42834 3.08659 7.71238 2.37063C7.53339 2.19164 7.53339 1.90144 7.71238 1.72245ZM8.03387 7.68083C8.09526 7.43526 8.3441 7.28595 8.58968 7.34734C9.19831 7.4995 9.58356 7.88867 9.80513 8.33181C10.0195 8.76061 10.0827 9.23901 10.0827 9.62533C10.0827 9.87846 9.87748 10.0837 9.62435 10.0837C9.37122 10.0837 9.16602 9.87846 9.16602 9.62533C9.16602 9.32414 9.11459 9.00046 8.98524 8.74176C8.86306 8.4974 8.67539 8.31365 8.36735 8.23664C8.12178 8.17525 7.97247 7.9264 8.03387 7.68083ZM2.97852 8.25033C2.40126 8.25033 1.83268 8.80653 1.83268 9.62533C1.83268 9.87846 1.62748 10.0837 1.37435 10.0837C1.12122 10.0837 0.916016 9.87846 0.916016 9.62533C0.916016 8.41907 1.78385 7.33366 2.97852 7.33366H6.18685C7.38151 7.33366 8.24935 8.41908 8.24935 9.62533C8.24935 9.87846 8.04415 10.0837 7.79102 10.0837C7.53789 10.0837 7.33268 9.87846 7.33268 9.62533C7.33268 8.80653 6.7641 8.25033 6.18685 8.25033H2.97852Z"
                              fill="#0D0D0D"
                            />
                          </svg>
                          팔로워 <span className="orange">{el.follower}</span>{' '}
                          명
                        </div>
                      </div>
                      <div className="line"></div>
                      <div className="selfIntro">
                        {'"'}
                        {el.selfIntro}
                        {'"'}
                      </div>
                    </div>
                  </div>
                )
              )}
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
                        <img
                          src={
                            el.user?.imageUrl === null
                              ? '/images/profileDefault.png'
                              : el.user?.imageUrl
                          }
                          onError={(e) => {
                            e.currentTarget.src = '/images/profileDefault.png'
                          }}
                        />
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
                    <p className="mentorName">{el.user?.name} 멘토</p>
                    <div className="backTop">
                      <span>{el.companyName}</span>
                      <div className="line"></div>
                      <span>{el.department}</span>
                    </div>
                    <div className="backBottom">
                      <div className="answerWrapper">
                        <svg
                          width="11"
                          height="11"
                          viewBox="0 0 11 11"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0.916016 2.74967C0.916016 2.24341 1.32642 1.83301 1.83268 1.83301H9.16602C9.67228 1.83301 10.0827 2.24341 10.0827 2.74967V7.79134C10.0827 8.2976 9.67228 8.70801 9.16602 8.70801H7.0642L5.82344 9.94877C5.64445 10.1278 5.35425 10.1278 5.17526 9.94877L3.9345 8.70801H1.83268C1.32642 8.70801 0.916016 8.2976 0.916016 7.79134V2.74967ZM9.16602 2.74967H1.83268V7.79134H4.12435C4.24591 7.79134 4.36249 7.83963 4.44844 7.92558L5.49935 8.97649L6.55026 7.92558C6.63621 7.83963 6.75279 7.79134 6.87435 7.79134H9.16602V2.74967Z"
                            fill="#0D0D0D"
                          />
                          <path
                            d="M6.18685 5.27051C6.18685 5.6502 5.87904 5.95801 5.49935 5.95801C5.11965 5.95801 4.81185 5.6502 4.81185 5.27051C4.81185 4.89081 5.11965 4.58301 5.49935 4.58301C5.87904 4.58301 6.18685 4.89081 6.18685 5.27051Z"
                            fill="#0D0D0D"
                          />
                          <path
                            d="M8.02018 5.27051C8.02018 5.6502 7.71238 5.95801 7.33268 5.95801C6.95299 5.95801 6.64518 5.6502 6.64518 5.27051C6.64518 4.89081 6.95299 4.58301 7.33268 4.58301C7.71238 4.58301 8.02018 4.89081 8.02018 5.27051Z"
                            fill="#0D0D0D"
                          />
                          <path
                            d="M4.35352 5.27051C4.35352 5.6502 4.04571 5.95801 3.66602 5.95801C3.28632 5.95801 2.97852 5.6502 2.97852 5.27051C2.97852 4.89081 3.28632 4.58301 3.66602 4.58301C4.04571 4.58301 4.35352 4.89081 4.35352 5.27051Z"
                            fill="#0D0D0D"
                          />
                        </svg>
                        답변수{' '}
                        <span className="orange">
                          {!el.user?.comments?.id
                            ? 0
                            : el.user?.comments?.id.length}
                        </span>{' '}
                        건
                      </div>
                      <div className="followerWrapper">
                        <svg
                          width="11"
                          height="11"
                          viewBox="0 0 11 11"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4.58268 1.83366C3.57016 1.83366 2.74935 2.65447 2.74935 3.66699C2.74935 4.67951 3.57016 5.50033 4.58268 5.50033C5.5952 5.50033 6.41602 4.67951 6.41602 3.66699C6.41602 2.65447 5.5952 1.83366 4.58268 1.83366ZM1.83268 3.66699C1.83268 2.14821 3.0639 0.916992 4.58268 0.916992C6.10147 0.916992 7.33268 2.14821 7.33268 3.66699C7.33268 5.18578 6.10147 6.41699 4.58268 6.41699C3.0639 6.41699 1.83268 5.18578 1.83268 3.66699ZM7.71238 1.72245C7.89137 1.54346 8.18157 1.54346 8.36056 1.72245C9.4345 2.79639 9.4345 4.53759 8.36056 5.61154C8.18157 5.79053 7.89137 5.79053 7.71238 5.61154C7.53339 5.43255 7.53339 5.14234 7.71238 4.96335C8.42834 4.24739 8.42834 3.08659 7.71238 2.37063C7.53339 2.19164 7.53339 1.90144 7.71238 1.72245ZM8.03387 7.68083C8.09526 7.43526 8.3441 7.28595 8.58968 7.34734C9.19831 7.4995 9.58356 7.88867 9.80513 8.33181C10.0195 8.76061 10.0827 9.23901 10.0827 9.62533C10.0827 9.87846 9.87748 10.0837 9.62435 10.0837C9.37122 10.0837 9.16602 9.87846 9.16602 9.62533C9.16602 9.32414 9.11459 9.00046 8.98524 8.74176C8.86306 8.4974 8.67539 8.31365 8.36735 8.23664C8.12178 8.17525 7.97247 7.9264 8.03387 7.68083ZM2.97852 8.25033C2.40126 8.25033 1.83268 8.80653 1.83268 9.62533C1.83268 9.87846 1.62748 10.0837 1.37435 10.0837C1.12122 10.0837 0.916016 9.87846 0.916016 9.62533C0.916016 8.41907 1.78385 7.33366 2.97852 7.33366H6.18685C7.38151 7.33366 8.24935 8.41908 8.24935 9.62533C8.24935 9.87846 8.04415 10.0837 7.79102 10.0837C7.53789 10.0837 7.33268 9.87846 7.33268 9.62533C7.33268 8.80653 6.7641 8.25033 6.18685 8.25033H2.97852Z"
                            fill="#0D0D0D"
                          />
                        </svg>
                        팔로워 <span className="orange">{el.follower}</span> 명
                      </div>
                    </div>
                    <div className="line"></div>
                    <div className="selfIntro">
                      {'"'}
                      {el.selfIntro}
                      {'"'}
                    </div>
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
            >
              {props.LikeBoardsData?.fetchLikePost?.map((el) => {
                return (
                  <SwiperSlide key={el.id}>
                    <CH.BoardTop>
                      <div>
                        <img src={'/images/profileDefault.png'} />
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
            >
              {props.NewBoardsData?.fetchQtBoards?.slice(0, 8).map((el) => {
                return (
                  <SwiperSlide key={el.id}>
                    <CH.BoardTop>
                      <div>
                        <img src={'/images/profileDefault.png'} />
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
    </>
  )
}
