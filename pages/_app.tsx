import { AppProps } from 'next/app'
import { Global } from '@emotion/react'
import { globalStyles } from '../src/commons/styles/globalStyles'
import Layout from '../src/components/commons/layout'
import 'antd/dist/antd.css'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  ApolloLink,
} from '@apollo/client'
import { onError } from '@apollo/client/link/error'
import { createUploadLink } from 'apollo-upload-client'
import { getAccessToken } from '../src/commons/libraries/getAccessToken'
import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from 'react'
import { io } from 'socket.io-client'
interface IGlobalContext {
  socket?: any
  accessToken?: String
  setAccessToken?: Dispatch<SetStateAction<string>>
  checkedCategory?: String
  setCheckedCategory?: Dispatch<SetStateAction<string>>
}

export const GlobalContext = createContext<IGlobalContext>({})

function MyApp({ Component, pageProps }: AppProps) {
  const [accessToken, setAccessToken] = useState('')
  const [checkedCategory, setCheckedCategory] = useState('')
  const value = {
    accessToken,
    setAccessToken,
    checkedCategory,
    setCheckedCategory,
  }

  useEffect(() => {
    getAccessToken().then((newAccessToken) => {
      setAccessToken(newAccessToken)
    })
  }, [])

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        if (err.extensions.code === 'UNAUTHENTICATED') {
          getAccessToken().then((newAccessToken) => {
            setAccessToken(newAccessToken)

            operation.setContext({
              headers: {
                ...operation.getContext().headers,
                Authorization: `Bearer ${newAccessToken}`,
              },
            })
            return forward(operation)
          })
        }
      }
    }
  })

  const uploadLink = createUploadLink({
    uri: 'http://localhost:3000/graphql',
    headers: { Authorization: `Bearer ${accessToken}` },
    credentials: 'include',
  })

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink as unknown as ApolloLink]),
    cache: new InMemoryCache(),
  })

  return (
    <>
      <GlobalContext.Provider value={value}>
        <ApolloProvider client={client}>
          <Global styles={globalStyles} />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ApolloProvider>
      </GlobalContext.Provider>
    </>
  )
}

export default MyApp
