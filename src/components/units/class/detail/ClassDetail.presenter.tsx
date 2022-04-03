import * as CH from './ClassDetail.styles'
import StarRoundedIcon from '@mui/icons-material/StarRounded'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import { Rate } from 'antd'
import { Link } from 'react-scroll'
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1'
import {
  getPrice,
  ratingRound,
} from '../../../../commons/libraries/utils/utils'

export default function classNameDetailUI(props) {
  return (
    <>
      <CH.ClassBanner>
        <CH.BannerWrapper>
          <CH.ClassImg>
            <img src="/images/mentor.jpeg" />
          </CH.ClassImg>
          <CH.DetailTop>
            <div>
              <p className="category">
                {props.data?.fetchLectureProduct?.joinproductandproductcategory.map(
                  (el) => (
                    <span key={el.id} style={{ marginRight: '8px' }}>
                      {el.lectureproductcategory.categoryname}
                    </span>
                  )
                )}
              </p>
              <p className="title">
                {props.data?.fetchLectureProduct?.classTitle}
              </p>
              <CH.FlexEnd>
                <CH.Star>
                  <Rate
                    allowHalf
                    value={props.data?.fetchLectureProduct?.rating}
                    disabled
                  />
                  <span>
                    {props.data?.fetchLectureProduct?.rating === 0
                      ? 0
                      : ratingRound(
                          props.data?.fetchLectureProduct?.rating
                        )}{' '}
                    (
                    {props.data?.fetchLectureProduct?.rating === 0
                      ? 0
                      : props.data?.fetchLectureReviews?.length}
                    )
                  </span>
                </CH.Star>
                <span>
                  {props.data?.fetchLectureProduct?.rating === 0
                    ? 0
                    : props.data?.fetchLectureProduct?.reviews?.length}
                  개의 수강평
                </span>
              </CH.FlexEnd>
              <CH.FlexEnd>
                <PersonOutlineIcon />
                <span style={{ fontWeight: '600' }}>
                  {props.data?.fetchLectureProduct?.mentor.user.name}
                </span>
              </CH.FlexEnd>
              <p style={{ marginBottom: '0px', fontWeight: '600' }}>
                <span style={{ marginRight: '8px' }}>
                  {props.data?.fetchLectureProduct?.classStartDate}
                </span>
                <span>{props.data?.fetchLectureProduct?.classStartTime}</span>
              </p>
            </div>
          </CH.DetailTop>
        </CH.BannerWrapper>

        <div>
          <CH.ClassInfo>
            <div>
              <CH.PriceBox>
                <div>
                  <span>
                    {getPrice(props.data?.fetchLectureProduct?.classPrice)}
                  </span>
                  <span>원</span>
                </div>
                <div className="priceDivision">
                  <span>월 </span>{' '}
                  <span>
                    {' '}
                    {getPrice(props.data?.fetchLectureProduct?.classPrice / 5)}
                  </span>
                  <span>원</span>
                </div>
                <div className="installment">
                  <span>5개월 할부 시</span>
                </div>
              </CH.PriceBox>
              <div className="peopleBox">
                <span>🔥</span>
                <div>
                  <span>마감까지</span>{' '}
                  <span>
                    {console.log(
                      props.data?.fetchLectureProduct?.classMaxUser - 10
                    )}
                    {console.log(props.data?.fetchLectureProduct?.appliedUser)}
                    {props.data?.fetchLectureProduct?.classMaxUser -
                      props.data?.fetchLectureProduct?.appliedUser}
                  </span>
                  <span>자리 남음</span>
                  <p>다시 오지 않은 최저가, 바로 지금이에요!</p>
                </div>
              </div>
            </div>
          </CH.ClassInfo>
          <CH.ClassButton onClick={props.onClickClassRequest}>
            수강신청 하기
          </CH.ClassButton>
        </div>
      </CH.ClassBanner>
      <CH.ClassMenu>
        <div>
          <Link to="classIntro" spy={true} smooth={true}>
            <span>클래스소개</span>
          </Link>
          <Link to="classCurriculum" spy={true} smooth={true}>
            <span>커리큘럼</span>
          </Link>
          <Link to="classReview" spy={true} smooth={true}>
            <span>수강평</span>
          </Link>
        </div>
      </CH.ClassMenu>
      <CH.Wrapper>
        <CH.MobileMentorWrapper>
          <CH.FlexRow style={{ marginBottom: '10px' }}>
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.79083 6.8584L4.57178 8.11228L5.79083 9.29649"
                stroke="#FFA24B"
                strokeWidth="0.761905"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.3625 9.29687L11.5815 8.043L10.3625 6.85878"
                stroke="#FFA24B"
                strokeWidth="0.761905"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.83826 5.79199L7.31445 10.3634"
                stroke="#FFA24B"
                strokeWidth="0.761905"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle
                cx="8"
                cy="8"
                r="7.08571"
                stroke="#FFA24B"
                strokeWidth="1.82857"
              />
              <path
                d="M13.1055 13.1045L15.9245 15.9235"
                stroke="#FFA24B"
                strokeWidth="1.82857"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>멘토소개</span>
          </CH.FlexRow>
          <CH.FlexRow>
            <CH.MentorImg>
              <div>
                <img src="/images/profile.png" />
              </div>
              <div className="follow">
                <PersonAddAlt1Icon />
              </div>
            </CH.MentorImg>
            <CH.MentorContent>
              <div>
                <p>{props.data?.fetchLectureProduct?.mentor.user.name}</p>
                <div>
                  <span>
                    {props.data?.fetchLectureProduct?.mentor.companyName}
                  </span>
                  <span> / </span>
                  <span>
                    {props.data?.fetchLectureProduct?.mentor.department}
                  </span>
                </div>
                <CH.MentorCategory>
                  {props.data?.fetchLectureProduct?.mentor.work.map((el) => (
                    <span key={el.id}>{el.category.categoryname}</span>
                  ))}
                </CH.MentorCategory>
              </div>
            </CH.MentorContent>
          </CH.FlexRow>
        </CH.MobileMentorWrapper>
        <CH.ClassDetail>
          <CH.DetailClassIntro id="classIntro">
            <CH.ClassCategoryBorder>
              <div>
                <span>✍️</span>
                <span>이런 걸</span>
                <span>배워요!</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {props.data?.fetchLectureProduct?.joinproductandproductcategory.map(
                  (el) => (
                    <div key={el.id}>
                      <span>✓</span>
                      <span>{el.lectureproductcategory.categoryname}</span>
                    </div>
                  )
                )}
              </div>
            </CH.ClassCategoryBorder>
            <p>클래스 소개</p>
            <p>{props.data?.fetchLectureProduct?.classDescription}</p>
          </CH.DetailClassIntro>

          <CH.DetailCurriculum id="classCurriculum">
            <p>커리큘럼</p>
            <p>{props.data?.fetchLectureProduct?.classCurriculum}</p>
          </CH.DetailCurriculum>

          <CH.DetailReview id="classReview">
            <div className="reviewTop">
              <p>클래스 후기</p>
              <div className="star" style={{ alignItems: 'flex-end' }}>
                <StarRoundedIcon style={{ color: 'gold' }} />
                <span>
                  {props.data?.fetchLectureProduct?.rating} (
                  {props.data?.fetchLectureProduct?.rating === 0
                    ? 0
                    : props.data?.fetchLectureReviews?.length}
                  )
                </span>
              </div>
            </div>
            {props.data?.fetchLectureProduct?.reviews?.map((el) => (
              <CH.ReviewWrapper key={el.id}>
                <CH.ReviewUser>
                  <div className="userImg">
                    <img src="/images/profile.png" />
                  </div>
                  <div className="userDetail">
                    <div className="profile">
                      <CH.Star>
                        <Rate disabled defaultValue={el.starRating} />
                        <span>{el.starRating}</span>
                      </CH.Star>
                      <span>{el.user.name}</span>
                    </div>
                  </div>
                </CH.ReviewUser>
                <div className="contents">{el.reviewContents}</div>
                <span className="reviewName">{el.createdAt}</span>
              </CH.ReviewWrapper>
            ))}
          </CH.DetailReview>
        </CH.ClassDetail>

        <CH.ClassContent>
          <div>
            <CH.ClassInfo>
              <div>
                <p className="title">
                  {props.data?.fetchLectureProduct.classTitle}
                </p>
                <p className="startDate">
                  {props.data?.fetchLectureProduct.classStartDate}
                </p>
                <CH.PriceBox>
                  <div>
                    <span>
                      {getPrice(props.data?.fetchLectureProduct?.classPrice)}
                    </span>
                    <span>원</span>
                  </div>
                  <div className="priceDivision">
                    <span>월 </span>{' '}
                    <span>
                      {' '}
                      {getPrice(
                        props.data?.fetchLectureProduct?.classPrice / 5
                      )}
                    </span>
                    <span>원</span>
                  </div>
                  <div className="installment">
                    <span>5개월 할부 시</span>
                  </div>
                </CH.PriceBox>
                <div className="peopleBox">
                  <span>🔥</span>
                  <div>
                    <span>마감까지</span> <span>9</span>
                    <span>자리 남음</span>
                    <p>다시 오지 않은 최저가, 바로 지금이에요!</p>
                  </div>
                </div>
              </div>
            </CH.ClassInfo>
            <CH.ClassButton onClick={props.onClickClassRequest}>
              수강신청 하기
            </CH.ClassButton>
          </div>
          <CH.MentorWrapper>
            <CH.FlexRow style={{ marginBottom: '10px' }}>
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.79083 6.8584L4.57178 8.11228L5.79083 9.29649"
                  stroke="#FFA24B"
                  strokeWidth="0.761905"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.3625 9.29687L11.5815 8.043L10.3625 6.85878"
                  stroke="#FFA24B"
                  strokeWidth="0.761905"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.83826 5.79199L7.31445 10.3634"
                  stroke="#FFA24B"
                  strokeWidth="0.761905"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle
                  cx="8"
                  cy="8"
                  r="7.08571"
                  stroke="#FFA24B"
                  strokeWidth="1.82857"
                />
                <path
                  d="M13.1055 13.1045L15.9245 15.9235"
                  stroke="#FFA24B"
                  strokeWidth="1.82857"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>멘토소개</span>
            </CH.FlexRow>
            <CH.FlexRow>
              <CH.MentorImg>
                <div>
                  <img src="/images/profile.png" />
                </div>
                <div className="follow">
                  <PersonAddAlt1Icon />
                </div>
              </CH.MentorImg>
              <CH.MentorContent>
                <div>
                  <p>{props.data?.fetchLectureProduct?.mentor.user.name}</p>
                  <div>
                    <span>
                      {props.data?.fetchLectureProduct?.mentor.companyName}
                    </span>
                    <span> / </span>
                    <span>
                      {props.data?.fetchLectureProduct?.mentor.department}
                    </span>
                  </div>
                  <CH.MentorCategory>
                    {props.data?.fetchLectureProduct?.mentor.work.map((el) => (
                      <span key={el.id}>{el.category.categoryname}</span>
                    ))}
                  </CH.MentorCategory>
                </div>
              </CH.MentorContent>
            </CH.FlexRow>
          </CH.MentorWrapper>
        </CH.ClassContent>
      </CH.Wrapper>
    </>
  )
}
