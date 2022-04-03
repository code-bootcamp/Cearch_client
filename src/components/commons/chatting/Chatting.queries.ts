import { gql } from '@apollo/client'

export const CREATE_ROOM = gql`
  mutation createRoom($roomName: String!) {
    createRoom(roomName: $roomName) {
      roomName
      roomId
      userId
      userName
      ishost
      created
    }
  }
`
