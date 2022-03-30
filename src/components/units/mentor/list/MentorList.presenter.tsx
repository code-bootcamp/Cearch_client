import * as CH from './MentorList.styles'
import { v4 as uuidv4 } from 'uuid'
import mentorList from './mentorList.json'
import Tooltip from '@mui/material/Tooltip'
import SwiperCategory from '../../../commons/category/Category'

export default function MentorListUI(props) {
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

  return (
    <CH.Wrapper>
      <article>
        <section>
          <p>멘토 카테고리</p>
          <SwiperCategory />
        </section>

        <section>
          <p>멘토 리스트</p>
          <CH.Mentor>{newMentorList}</CH.Mentor>
        </section>

        {/* <div className="pagination">
        <span><</span>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
        <span>6</span>
        <span>7</span>
        <span>8</span>
        <span>9</span>
        <span>10</span>
        <span>></span>
      </div> */}
      </article>
    </CH.Wrapper>
  )
}
