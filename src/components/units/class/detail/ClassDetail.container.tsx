import { useRouter } from 'next/router'
import ClassDetailUI from './ClassDetail.presenter'

export default function ClassDetail() {
  const router = useRouter()

  const onClickClassRequest = () => {
    router.push(`/class/${router.query.detail}/new`)
  }
  return <ClassDetailUI onClickClassRequest={onClickClassRequest} />
}
