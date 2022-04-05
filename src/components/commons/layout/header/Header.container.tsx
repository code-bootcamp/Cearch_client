import {
  useState,
  useEffect,
  useCallback,
  useContext,
  ChangeEvent,
} from 'react'
import { useRouter } from 'next/router'
import LayoutHeaderUI from './Header.presenter'
import { useMutation, useQuery } from '@apollo/client'
import {
  IMutation,
  IQuery,
  IUser,
} from '../../../../commons/types/generated/types'
import { FETCH_USER, LOGOUT } from './Header.queries'
import { notification } from 'antd'
import { GlobalContext } from '../../../../../pages/_app'

export default function LayoutHeader() {
  const router = useRouter()
  const [value, setValue] = useState(0)
  const { accessToken, search, setSearch, setKeyword } =
    useContext(GlobalContext)
  const [isTop, setIsTop] = useState(true)
  const [modalOpen, setModalOpen] = useState(false)
  const { data } = useQuery<Pick<IQuery, 'fetchUser'>>(FETCH_USER)

  const [logout] = useMutation<Pick<IMutation, 'logout'>>(LOGOUT)
  const handleOpen = () => setModalOpen(true)
  const handleClose = () => setModalOpen(false)

  const onClickMoveToHome = () => {
    router.push('/')
  }
  const onClickMoveToClass = () => {
    localStorage.setItem('class', '/class')
    router.push('/class')
  }
  const onClickMoveToMentor = () => {
    router.push('/mentor')
  }
  const onClickMoveToBoards = () => {
    router.push('/boards')
  }
  const onClickMoveToLogin = () => {
    router.push('/login/login')
  }
  const onClickMoveToMyPage = () => {
    router.push('/mypage')
  }
  const onClickLogout = async () => {
    try {
      const result = await logout()
      notification.success({
        message: '다음에 다시 만나요!',
        top: 80,
      })
      router.push(`/`)
    } catch (error) {
      notification.error({ message: `${error.message}`, top: 80 })
    }
  }

  const handleFollow = useCallback(() => {
    if (window.pageYOffset === 0) setIsTop(true)
    if (window.pageYOffset > 0) setIsTop(false)
    // setIsFirst(false);
  }, [isTop])

  useEffect(() => {
    const watch = () => {
      window.addEventListener('scroll', handleFollow)
    }
    watch()
    return () => {
      window.removeEventListener('scroll', handleFollow)
    }
  }, [isTop])

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event?.target.value)
  }
  const onClickSearch = () => {
    setKeyword(String(search))
    router.push('/search')
  }

  return (
    <LayoutHeaderUI
      data={data}
      accessToken={accessToken}
      modalOpen={modalOpen}
      value={value}
      isTop={isTop}
      setValue={setValue}
      handleOpen={handleOpen}
      handleClose={handleClose}
      onClickLogout={onClickLogout}
      onClickMoveToHome={onClickMoveToHome}
      onClickMoveToClass={onClickMoveToClass}
      onClickMoveToMentor={onClickMoveToMentor}
      onClickMoveToBoards={onClickMoveToBoards}
      onClickMoveToLogin={onClickMoveToLogin}
      onClickMoveToMyPage={onClickMoveToMyPage}
      onChangeSearch={onChangeSearch}
      onClickSearch={onClickSearch}
    />
  )
}
