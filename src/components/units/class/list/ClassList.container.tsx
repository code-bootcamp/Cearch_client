import { useLazyQuery, useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import { MouseEvent, useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../../../../../pages/_app'
import {
  IQuery,
  IQueryFetchLectureProductArgs,
} from '../../../../commons/types/generated/types'
import ClassListUI from './ClassList.presenter'
import {
  FETCH_LECTURE_PRODUCTS,
  FETCH_SELECTED_TAG_LECTURES,
} from './ClassList.queries'

export default function ClassList() {
  const { checkedCategory } = useContext(GlobalContext)
  const [data, setData] = useState([])
  const [fetchSelectedTagLectures] = useLazyQuery(FETCH_SELECTED_TAG_LECTURES)
  const [fetchlectureProducts, { refetch }] = useLazyQuery(
    FETCH_LECTURE_PRODUCTS,
    {
      variables: { page: 1 },
    }
  )

  const router = useRouter()
  const category = async () => {
    if (checkedCategory) {
      const classCategoryData = await fetchSelectedTagLectures({
        variables: { lectureproductcategoryname: checkedCategory, page: 1 },
      })

      setData(classCategoryData)
    } else {
      const classListData = await fetchlectureProducts({
        variables: { page: 1 },
      })

      setData(classListData)
    }
  }

  useEffect(() => {
    category()
  }, [checkedCategory])

  const onClickMoveToClassDetail = (e: MouseEvent<HTMLDivElement>) => {
    router.push(`/class/${e.currentTarget.id}`)
  }
  return (
    <ClassListUI
      data={data}
      refetch={refetch}
      onClickMoveToClassDetail={onClickMoveToClassDetail}
    />
  )
}
