import { useState, useRef, useEffect, useCallback } from 'react'
import { useRouter } from 'next/router'
import LayoutHeaderUI from './Header.presenter'

export default function LayoutHeader() {
  const router = useRouter()
  const [value, setValue] = useState(0)
  // const [scrolled, setScrolled] = useState(false)
  const [isTop, setIsTop] = useState(true)
  const [modalOpen, setModalOpen] = useState(false)
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

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (!scrolled && window.scrollY > 30) {
  //       setScrolled(true)
  //     } else if (scrolled && window.scrollY <= 30) setScrolled(false)
  //   }

  //   window.addEventListener('scroll', handleScroll)

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll)
  //   }
  // }, [scrolled])
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
      modalOpen={modalOpen}
      value={value}
      isTop={isTop}
      setValue={setValue}
      handleOpen={handleOpen}
      handleClose={handleClose}
      onClickMoveToHome={onClickMoveToHome}
      onClickMoveToClass={onClickMoveToClass}
      onClickMoveToMentor={onClickMoveToMentor}
      onClickMoveToBoards={onClickMoveToBoards}
      onClickMoveToLogin={onClickMoveToLogin}
    />
  )
}
