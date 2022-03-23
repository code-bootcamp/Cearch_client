import * as CH from './ClassList.styled'
import { v4 as uuidv4 } from 'uuid'
import classList from './classList.json'
import StarRoundedIcon from '@mui/icons-material/StarRounded'

export default function ClassListUI() {
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

  return (
    <CH.Wrapper>
      <article>
        <section>
          <p>클래스 카테고리</p>
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
