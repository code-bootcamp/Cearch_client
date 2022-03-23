import { AppProps } from 'next/app'
import { Global } from '@emotion/react'
import { globalStyles } from '../src/commons/styles/globalStyles'
import Layout from '../src/components/commons/layout'
/* import { createUploadLink } from 'apollo-upload-client'
import { ApolloClient, ApolloLink, InMemoryCache } from '@apollo/client' */

function MyApp({ Component, pageProps }: AppProps) {
  /*  const uploadLink = createUploadLink({
    uri: 'https://backend05.codebootcamp.co.kr/graphql',
    headers: { Authorization: `Bearer ${accessToken}` },
    credentials: 'include',
  })

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink as unknown as ApolloLink]),
    cache: new InMemoryCache(),
  }) */

  return (
    <>
      <Global styles={globalStyles} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
