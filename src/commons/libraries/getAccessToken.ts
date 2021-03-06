import { gql } from '@apollo/client'
import { GraphQLClient } from 'graphql-request'

const REFRESH_ACCESS_TOKEN = gql`
  mutation refreshAccessToken {
    refreshAccessToken
  }
`

export async function getAccessToken() {
  try {
    const graphqlClient = new GraphQLClient('http://localhost:3000/graphql', {
      credentials: 'include',
    })
    const result = await graphqlClient.request(REFRESH_ACCESS_TOKEN)
    const newAccessToken = result.refreshAccessToken

    return newAccessToken
  } catch (error: any) {
    console.log(error.message)
  }
}

export const A = getAccessToken()
