import { useRouter } from 'next/router'
import ClassListUI from './ClassList.presenter'

export default function ClassList() {
  const router = useRouter()

  const onClickMoveToClassDetail = (e) => {
    router.push(`/class/${e.currentTarget.id}`)
  }
  return <ClassListUI onClickMoveToClassDetail={onClickMoveToClassDetail} />
}
