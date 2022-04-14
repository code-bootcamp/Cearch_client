import * as CH from './ClassList.styles'
import StarRoundedIcon from '@mui/icons-material/StarRounded'
import SwiperCategory from '../../../commons/category/Category'
import { useContext } from 'react'
import { GlobalContext } from '../../../../../pages/_app'
import ClassList from './ClassList'
import Pagination from '../../../commons/pagination/pagination'

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

        <Pagination
          refetch={props.refetch}
          counts={props.mentorCount?.fetchAllMentorCount}
        />
      </article>
    </CH.Wrapper>
  )
}
