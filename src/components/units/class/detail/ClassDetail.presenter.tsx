import * as CH from './ClassDetail.styles'
import StarRoundedIcon from '@mui/icons-material/StarRounded'

export default function classNameDetailUI(props) {
  return (
    <CH.Wrapper>
      <CH.ClassDetail>
        <CH.DetailTop>
          <CH.ClassImg>
            <img src="/images/mentor.jpeg" />
          </CH.ClassImg>

          <div>
            <p className="category">카테고리</p>
            <p className="title">클래스 제목</p>
          </div>
        </CH.DetailTop>

        <CH.DetailClassIntro>
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

        <CH.DetailCurriculum>
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

        <CH.DetailComment>
          <div className="commentTop">
            <p>참여자들의 후기</p>
            <div className="star">
              <StarRoundedIcon style={{ color: 'gold' }} />
              <span>4.5 (평가자 수)</span>
            </div>
          </div>
          <div className="commentList">
            <div className="commentDetail">
              <div className="userImg">
                <img src="/images/profile.png" />
              </div>
              <div className="profile">
                <span>◯◯◯</span>
                <div className="star">
                  <StarRoundedIcon style={{ color: 'gold' }} />
                  <span>4.5</span>
                </div>
                <span>2000. 02. 02</span>
              </div>
            </div>
            <div className="contents">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam,
              totam fuga sit delectus neque expedita, iusto reprehenderit
              voluptatibus laboriosam quisquam obcaecati id minus assumenda
              architecto rerum deserunt iure possimus reiciendis?
            </div>
          </div>
          <div className="commentList">
            <div className="commentDetail">
              <div className="userImg">
                <img src="/images/profile.png" />
              </div>
              <div className="profile">
                <span>◯◯◯</span>
                <div className="star">
                  <StarRoundedIcon style={{ color: 'gold' }} />
                  <span>4.5</span>
                </div>
                <span>2000. 02. 02</span>
              </div>
            </div>
            <div className="contents">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam,
              totam fuga sit delectus neque expedita, iusto reprehenderit
              voluptatibus laboriosam quisquam obcaecati id minus assumenda
              architecto rerum deserunt iure possimus reiciendis?
            </div>
          </div>
          <div className="commentList">
            <div className="commentDetail">
              <div className="userImg">
                <img src="/images/profile.png" />
              </div>
              <div className="profile">
                <span>◯◯◯</span>
                <div className="star">
                  <StarRoundedIcon style={{ color: 'gold' }} />
                  <span>4.5</span>
                </div>
                <span>2000. 02. 02</span>
              </div>
            </div>
            <div className="contents">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam,
              totam fuga sit delectus neque expedita, iusto reprehenderit
              voluptatibus laboriosam quisquam obcaecati id minus assumenda
              architecto rerum deserunt iure possimus reiciendis?
            </div>
          </div>
        </CH.DetailComment>
      </CH.ClassDetail>

      <CH.ClassContent>
        <div>
          <div className="classInfo">
            <CH.ClassMobileImg>
              <img src="/images/mentor.jpeg" />
            </CH.ClassMobileImg>
            <div>
              <p className="category">카테고리</p>
              <p className="title">클래스 제목</p>
              <p className="startDate">2000. 02. 02</p>
              <div className="peopleBox">
                <p>최대 수강 가능 인원</p>
                <p>수강신청 가능인원</p>
              </div>
              <div className="price">
                <span>수강료</span>
                <span>99,999원</span>
              </div>
            </div>
          </div>
          <div className="button" onClick={props.onClickClassRequest}>
            수강 신청
          </div>
        </div>
        <div className="mentor">
          <div>
            <div>
              <img src="/images/profile.png" />
            </div>
            <div className="follow">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                <path d="M224 256c70.7 0 128-57.31 128-128S294.7 0 224 0C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3C0 496.5 15.52 512 34.66 512h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304zM616 200h-48v-48C568 138.8 557.3 128 544 128s-24 10.75-24 24v48h-48C458.8 200 448 210.8 448 224s10.75 24 24 24h48v48C520 309.3 530.8 320 544 320s24-10.75 24-24v-48h48C629.3 248 640 237.3 640 224S629.3 200 616 200z" />
              </svg>
            </div>
          </div>
          <div>멘토소개</div>
        </div>
      </CH.ClassContent>
    </CH.Wrapper>
  )
}
