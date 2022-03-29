import * as CH from './ClassDetail.styles'
import StarRoundedIcon from '@mui/icons-material/StarRounded'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import { Rate } from 'antd'
import { Link } from 'react-scroll'
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1'

export default function classNameDetailUI(props) {
  const getPrice = (price) => {
    return String(price).replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }
  return (
    <>
      <CH.ClassBanner>
        <CH.BannerWrapper>
          <CH.ClassImg>
            <img src="/images/mentor.jpeg" />
          </CH.ClassImg>
          <CH.DetailTop>
            <div>
              <p className="category">카테고리</p>
              <p className="title">
                클래스클래스클래스클래클래스클래스클래스클래스클래스
              </p>
              <CH.FlexEnd>
                <CH.Star>
                  <Rate allowHalf defaultValue={2.5} />
                  <span>4.5 (평가자 수)</span>
                </CH.Star>
                <span>112개의 수강평</span>
              </CH.FlexEnd>
              <CH.FlexEnd>
                <PersonOutlineIcon />
                <span style={{ fontWeight: '600' }}>mentor</span>
              </CH.FlexEnd>
              <p style={{ marginBottom: '0px', fontWeight: '600' }}>
                2000. 02. 02
              </p>
            </div>
          </CH.DetailTop>
        </CH.BannerWrapper>

        <div>
          <CH.ClassInfo>
            <div>
              <CH.PriceBox>
                <div>
                  <span>{getPrice(20000)}</span>
                  <span>원</span>
                </div>
                <div className="priceDivision">
                  <span>월 </span> <span> {getPrice(Number('20000') / 5)}</span>
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
                <p>멘토 이름</p>
                <div>
                  <span>회사명</span>
                  <span> / </span>
                  <span>부서</span>
                </div>
                <p>업무파트</p>
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
                <div>
                  <span>✓</span>
                  <span>카테고리</span>
                </div>
                <div>
                  <span>✓</span>
                  <span>카테고리</span>
                </div>
              </div>
            </CH.ClassCategoryBorder>
            <p>클래스 소개</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              blanditiis, eos obcaecati asperiores distinctio adipisci magni ad
              quod consectetur molestias, earum aspernatur assumenda alias sequi
              enim rem odio omnis repellat!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              blanditiis, eos obcaecati asperiores distinctio adipisci magni ad
              quod consectetur molestias, earum aspernatur assumenda alias sequi
              enim rem odio omnis repellat!
            </p>
          </CH.DetailClassIntro>

          <CH.DetailCurriculum id="classCurriculum">
            <p>커리큘럼</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              blanditiis, eos obcaecati asperiores distinctio adipisci magni ad
              quod consectetur molestias, earum aspernatur assumenda alias sequi
              enim rem odio omnis repellat!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              blanditiis, eos obcaecati asperiores distinctio adipisci magni ad
              quod consectetur molestias, earum aspernatur assumenda alias sequi
              enim rem odio omnis repellat!
            </p>
          </CH.DetailCurriculum>

          <CH.DetailReview id="classReview">
            <div className="reviewTop">
              <p>클래스 후기</p>
              <div className="star" style={{ alignItems: 'flex-end' }}>
                <StarRoundedIcon style={{ color: 'gold' }} />
                <span>4.5 (평가자 수)</span>
              </div>
            </div>
            <CH.ReviewWrapper>
              <CH.ReviewUser>
                <div className="userImg">
                  <img src="/images/profile.png" />
                </div>
                <div className="userDetail">
                  <div className="profile">
                    <CH.Star>
                      <Rate disabled defaultValue={3} />
                      <span>4.5</span>
                    </CH.Star>
                    <span>◯◯◯</span>
                  </div>
                </div>
              </CH.ReviewUser>
              <div className="contents">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Veniam, totam fuga sit delectus neque expedita, iusto
                reprehenderit voluptatibus laboriosam quisquam obcaecati id
                minus assumenda architecto rerum deserunt iure possimus
                reiciendis?
              </div>
              <span className="reviewName">2000-02-02</span>
            </CH.ReviewWrapper>
            <CH.ReviewWrapper>
              <CH.ReviewUser>
                <div className="userImg">
                  <img src="/images/profile.png" />
                </div>
                <div className="userDetail">
                  <div className="profile">
                    <CH.Star>
                      <Rate disabled defaultValue={3} />
                      <span>4.5</span>
                    </CH.Star>
                    <span>◯◯◯</span>
                  </div>
                </div>
              </CH.ReviewUser>
              <div className="contents">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Veniam, totam fuga sit delectus neque expedita, iusto
                reprehenderit voluptatibus laboriosam quisquam obcaecati id
                minus assumenda architecto rerum deserunt iure possimus
                reiciendis?
              </div>
              <span className="reviewName">2000-02-02</span>
            </CH.ReviewWrapper>
            <CH.ReviewWrapper>
              <CH.ReviewUser>
                <div className="userImg">
                  <img src="/images/profile.png" />
                </div>
                <div className="userDetail">
                  <div className="profile">
                    <CH.Star>
                      <Rate disabled defaultValue={3} />
                      <span>4.5</span>
                    </CH.Star>
                    <span>◯◯◯</span>
                  </div>
                </div>
              </CH.ReviewUser>
              <div className="contents">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Veniam, totam fuga sit delectus neque expedita, iusto
                reprehenderit voluptatibus laboriosam quisquam obcaecati id
                minus assumenda architecto rerum deserunt iure possimus
                reiciendis?
              </div>
              <span className="reviewName">2000-02-02</span>
            </CH.ReviewWrapper>
          </CH.DetailReview>
        </CH.ClassDetail>

        <CH.ClassContent>
          <div>
            <CH.ClassInfo>
              <div>
                <p className="title">클래스 제목</p>
                <p className="startDate">2000. 02. 02</p>
                <CH.PriceBox>
                  <div>
                    <span>{getPrice(20000)}</span>
                    <span>원</span>
                  </div>
                  <div className="priceDivision">
                    <span>월 </span>{' '}
                    <span> {getPrice(Number('20000') / 5)}</span>
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
                  <p>멘토 이름</p>
                  <div>
                    <span>회사명</span>
                    <span> / </span>
                    <span>부서</span>
                  </div>
                  <p>업무파트</p>
                </div>
              </CH.MentorContent>
            </CH.FlexRow>
          </CH.MentorWrapper>
        </CH.ClassContent>
      </CH.Wrapper>
    </>
  )
}
