import { gql, useQuery } from '@apollo/client'
import { useContext } from 'react'
import { GlobalContext } from '../../../../pages/_app'
import SearchUI from './Search.presenter'

export const FETCH_SEARCH_AUTO = gql`
  query fetchSearchAuto($search: String!) {
    fetchSearchAuto(search: $search) {
      id
      name
      companyName
      department
      classTitle
      classDescription
      rating
    }
  }
`
export const FETCH_HOME_SEARCH = gql`
  query fetchHomeSearch($search: String!) {
    fetchHomeSearch(search: $search) {
      id
      name
      companyName
      department
      selfIntro
    }
  }
`

export default function Search() {
  const { search } = useContext(GlobalContext)
  const { data: lectureData } = useQuery(FETCH_SEARCH_AUTO, {
    variables: { search: String(search) },
  })
  const { data: mentorData } = useQuery(FETCH_HOME_SEARCH, {
    variables: { search: String(search) },
  })

  return <SearchUI lectureData={lectureData} mentorData={mentorData} />
}
