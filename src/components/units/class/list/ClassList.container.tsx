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
  const [fetchlectureProducts] = useLazyQuery(FETCH_LECTURE_PRODUCTS)

  // const { data } = useQuery(FETCH_SELECTED_TAG_LECTURES)

  console.log('checkedCategory : ', checkedCategory)

  const router = useRouter()
  const AAA = async () => {
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
    AAA()
  }, [checkedCategory])
  console.log('data')
  console.log(data)
  // const { data: ClassCategoryData } = useQuery(FETCH_SELECTED_TAG_LECTURES, {
  //   variables: { lectureproductcategoryname: checkedCategory },
  // })
  // console.log(checkedCategory)

  // console.log(ClassCategoryData)

  // const { data } = useQuery<
  //   Pick<IQuery, 'fetchlectureProducts'>,
  //   IQueryFetchLectureProductArgs
  // >(FETCH_LECTURE_PRODUCTS)

  const onClickMoveToClassDetail = (e: MouseEvent<HTMLDivElement>) => {
    router.push(`/class/${e.currentTarget.id}`)
  }
  return (
    <ClassListUI
      data={data}
      onClickMoveToClassDetail={onClickMoveToClassDetail}
    />
  )
}
