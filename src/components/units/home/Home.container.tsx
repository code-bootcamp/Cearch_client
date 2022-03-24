import HomeUI from './Home.presenter'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()

  const onClickMoveToMentorDetail = (e) => {
    router.push(`/mentor/${e.currentTarget.id}`)
  }
  const onClickMoveToClassDetail = (e) => {
    router.push(`/class/${e.currentTarget.id}`)
  }
  return (
    <HomeUI
      onClickMoveToMentorDetail={onClickMoveToMentorDetail}
      onClickMoveToClassDetail={onClickMoveToClassDetail}
    />
  )
}
