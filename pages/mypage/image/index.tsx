import { gql, useMutation, useQuery } from '@apollo/client'
import axios from 'axios'
import { useState } from 'react'

const GET_SIGNED_URL_USER = gql`
  query getSignedUrlUser {
    getSignedUrlUser
  }
`
const PUT_SIGNED_URL_USER = gql`
  query putSignedUrlUser($fileNames: [String!]!) {
    putSignedUrlUser(fileNames: $fileNames)
  }
`
const URL_TO_DB_USER = gql`
  mutation urlToDbUser($filePaths: [String!]!) {
    urlToDbUser(filePaths: $filePaths) {
      name
      imageUrl
    }
  }
`

export default function SignedUrlUpload() {
  const [file, setFile] = useState([])
  console.log(file)
  const { data: geturl } = useQuery(GET_SIGNED_URL_USER)
  console.log('get signedUrl', geturl?.getSignedUrlUser)

  const { data: puturl } = useQuery(PUT_SIGNED_URL_USER, {
    variables: { fileNames: [file?.name] },
  })
  console.log('put signedUrl', puturl?.putSignedUrlUser[0])

  const [urlToDbUser] = useMutation(URL_TO_DB_USER)

  const onChangeFileInput = async (event) => {
    setFile(event.target.files?.[0])
  }

  const uploadImage = async () => {
    try {
      const getUrlData = await axios.get(geturl?.getSignedUrlUser, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      console.log(getUrlData)
      const options = {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      }
      const putUrlData = await axios
        .put(puturl?.putSignedUrlUser[0], file, options)
        .then((response) => console.log(response))
      console.log(putUrlData)

      const filePaths = putUrlData?.putSignedUrlUser[0].split('-')[0]

      const urlToDbUserResult = await urlToDbUser({
        variables: {
          filePaths,
        },
      })
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <input type="file" onChange={onChangeFileInput} />
      <button onClick={uploadImage}>업로드</button>
    </>
  )
}
