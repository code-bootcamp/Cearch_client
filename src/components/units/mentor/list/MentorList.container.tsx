import { useRouter } from 'next/router'
import MentorListUI from './MentorList.presenter'

export default function MentorList() {
  const router = useRouter()
  const onClickMoveToMentorDetail = (e) => {
    router.push(`/mentor/${e.currentTarget.id}`)
  }
  return <MentorListUI onClickMoveToMentorDetail={onClickMoveToMentorDetail} />
}
