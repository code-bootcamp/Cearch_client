import * as CH from './ClassList.styles'
import StarRoundedIcon from '@mui/icons-material/StarRounded'
import SwiperCategory from '../../../commons/category/Category'
import { useContext } from 'react'
import { GlobalContext } from '../../../../../pages/_app'
import ClassList from './ClassList'

export default function ClassListUI(props) {
  const { checkedCategory } = useContext(GlobalContext)
  console.log(props.data)

  return (
    <CH.Wrapper>
      <article>
        <section>
          <p>클래스 카테고리</p>
          <SwiperCategory />
        </section>

        <section>
          <p>클래스 리스트</p>
          <CH.Class>
            {props.data?.data?.fetchSelectedTagLectures?.map((el) => (
              <div
                key={el.id}
                id={el.id}
                onClick={props.onClickMoveToClassDetail}
              >
                <ClassList el={el} />
              </div>
            ))}
            {props.data?.data?.fetchlectureProducts?.map((el) => (
              <div
                key={el.id}
                id={el.id}
                onClick={props.onClickMoveToClassDetail}
              >
                <ClassList el={el} />
              </div>
            ))}
          </CH.Class>
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
