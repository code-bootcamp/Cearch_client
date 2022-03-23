import styled from '@emotion/styled'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { ReactChild } from 'react'
import LayoutFooter from './footer'
import LayoutHeader from './header'

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
    '/login/emailcertification',
    '/login/join',
    '/login/login',
    '/login/mentorrequest',
    '/login/passwordreset',
    '/admin',
  ]

  const isHiddenHeader = HIDDEN_HEADER.includes(router.asPath)
  const isHiddenFooter = HIDDEN_FOOTER.includes(router.asPath)

  return (
    <>
      {!isHiddenHeader && <LayoutHeader />}
      <LayoutBody>
        <Head>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          {/* <link rel="icon" href="/favicon.ico" /> */}
        </Head>
        {props.children}
      </LayoutBody>
      {!isHiddenFooter && <LayoutFooter />}
    </>
  )
}
