import * as CH from './ClassList.styles'
import { v4 as uuidv4 } from 'uuid'
import classList from './classList.json'
import StarRoundedIcon from '@mui/icons-material/StarRounded'
import SwiperCategory from '../../../commons/category/Category'

export default function ClassListUI(props) {
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

  return (
    <CH.Wrapper>
      <article>
        <section>
          <p>클래스 카테고리</p>
          <SwiperCategory />
        </section>

        <section>
          <p>클래스 리스트</p>
          <CH.Class>{newClassList}</CH.Class>
        </section>

        {/* <div class="pagination">
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
