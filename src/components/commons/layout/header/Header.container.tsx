import { useState, useRef, useEffect, useCallback } from 'react'
import { useRouter } from 'next/router'
import LayoutHeaderUI from './Header.presenter'
import { useMutation, useQuery } from '@apollo/client'
import {
  IMutation,
  IQuery,
  IUser,
} from '../../../../commons/types/generated/types'
import { FETCH_USER, LOGOUT } from './Header.queries'

export default function LayoutHeader() {
  const router = useRouter()
  const [value, setValue] = useState(0)
  // const [scrolled, setScrolled] = useState(false)
  const [isTop, setIsTop] = useState(true)
  const [modalOpen, setModalOpen] = useState(false)
  const { data } = useQuery<Pick<IQuery, 'fetchUser'>, IUser>(FETCH_USER)
  const [logout] = useMutation<Pick<IMutation, 'logout'>>(LOGOUT)
  const handleOpen = () => setModalOpen(true)
  const handleClose = () => setModalOpen(false)

  const onClickMoveToHome = () => {
    router.push('/')
  }
  const onClickMoveToClass = () => {
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
      alert('다음에 다시 만나요!.')
      router.push(`/home`)
    } catch (error) {
      alert(`${error.message}`)
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

  return (
    <LayoutHeaderUI
      data={data}
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
    />
  )
}
