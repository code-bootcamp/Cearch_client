import * as CH from './Home.styles'
import StarRoundedIcon from '@mui/icons-material/StarRounded'
import { gql, useLazyQuery, useQuery } from '@apollo/client'
import {
  IQuery,
  IQueryFetchLectureReviewsArgs,
} from '../../../commons/types/generated/types'
import { FETCH_LECTURE_REVIEWS } from './Home.queries'
import { ratingRound } from '../../../commons/libraries/utils/utils'

import { v4 as uuid } from 'uuid'
import { useEffect } from 'react'

export default function NewClass(props) {
  const { data: ClassReviewsData } = useQuery<
    Pick<IQuery, 'fetchLectureReviews'>,
    IQueryFetchLectureReviewsArgs
  >(FETCH_LECTURE_REVIEWS, {
    variables: {
      lectureId: props.el.id,
    },
  })

  /*   useEffect(()=>{
    const asd = async() => {
      await fetchLectureProducts()
    }
    asd();
    console.log(data?.fetchlectureProducts)
  },[]) */

  // console.log(props.el.joinproductandproductcategory)

  const aaa = () => {
    console.log(props.el)
    if (props.el.joinproductandproductcategory) {
      const ellength = props.el.joinproductandproductcategory.length
      const result = []
      for (let i = 0; i < ellength; i++) {
        result.push(
          props.el.joinproductandproductcategory[i].lectureproductcategory
            .categoryname
        )
      }

      return result
    }
    return []
  }

  return (
    <>
      <CH.ClassImg>
        <img src="/images/mentor.jpeg" />
        <span>{props.el.mentor?.user?.name}</span>
        <span>{props.el.mentor?.companyName}</span>
      </CH.ClassImg>

      <CH.ClassInfo>
        <CH.InfoTop>
          <div>
            <StarRoundedIcon style={{ color: 'gold' }} />{' '}
            <span>
              {ratingRound(props.el.rating)} ({' '}
              {props.el.rating === 0
                ? 0
                : ClassReviewsData?.fetchLectureReviews?.length}{' '}
              )
            </span>
          </div>
          <div className="classState">
            {props.el.classStartDate ? '진행' : '종료'}
          </div>
        </CH.InfoTop>
        <CH.InfoBottom>
          <div className="classCategory">
            {/* {console.log(props.index, props.el.joinproductandproductcategory)} */}
            {props.el.joinproductandproductcategory?.map((mapEl) => (
              <span key={mapEl.id} style={{ marginRight: '8px' }}>
                {String(mapEl.lectureproductcategory?.categoryname)}
              </span>
            ))}
            {/* {console.log(aaa())} */}
            {/* {aaa()} */}
            {/* <span>asd</span> */}
          </div>
          <div className="classTitle">{props.el.classTitle}</div>
          <div className="classDate">{props.el.classStartDate}</div>
        </CH.InfoBottom>
      </CH.ClassInfo>
    </>
  )
}
