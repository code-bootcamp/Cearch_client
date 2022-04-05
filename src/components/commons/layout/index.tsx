import styled from '@emotion/styled'
import { ReactChild, useContext } from 'react'
import LayoutFooter from './footer'
import { useRouter } from 'next/router'
import LayoutHeader from './header/Header.container'
import { gql, useQuery } from '@apollo/client'
import { GlobalContext } from '../../../../pages/_app'

const LayoutBody = styled.div`
  width: 100%;
  height: 100%;
`

interface IProps {
  children: ReactChild
}

export default function Layout(props: IProps) {
  const router = useRouter()

  const HIDDEN_HEADER = ['/admin']
  const HIDDEN_FOOTER = [
    '/login/join',
    '/login/login',
    '/login/searchmembership/userconfirm',
    '/login/searchmembership/passwordreset',
    '/admin',
  ]

  const isHiddenHeader = HIDDEN_HEADER.includes(router.asPath)
  const isHiddenFooter = HIDDEN_FOOTER.includes(router.asPath)

  return (
    <>
      {!isHiddenHeader && <LayoutHeader />}
      <LayoutBody>{props.children}</LayoutBody>
      {!isHiddenFooter && <LayoutFooter />}
    </>
  )
}
