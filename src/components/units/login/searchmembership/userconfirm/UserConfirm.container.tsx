import { useRouter } from 'next/router'
import UserConfirmUI from './UserConfirm.presenter'

export default function UserConfirm() {
  const router = useRouter()

  const onClickMoveToPasswordReset = () => {
    router.push('/login/searchmembership/passwordreset')
  }
  return (
    <UserConfirmUI onClickMoveToPasswordReset={onClickMoveToPasswordReset} />
  )
}
