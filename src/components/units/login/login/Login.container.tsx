import { useRouter } from 'next/router'
import LoginUI from './Login.presenter'

export default function Login() {
  const router = useRouter()

  const onClickJoin = () => {
    router.push('/login/join')
  }
  const onClickSearchMembership = () => {
    router.push('/login/searchmembership/userconfirm')
  }

  return (
    <LoginUI
      onClickJoin={onClickJoin}
      onClickSearchMembership={onClickSearchMembership}
    />
  )
}
