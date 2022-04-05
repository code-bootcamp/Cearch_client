import styled from '@emotion/styled'
import { breakPoints } from '../../../../commons/styles/media'
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined'
import { MessageOutlined } from '@ant-design/icons'
import { ChatIcon } from '@chakra-ui/icons'
import { useState } from 'react'
import Chatting from '../../chatting/Chatting.container'
import { textAlign } from '@mui/system'
import ChattingRoom from '../../chattingroom/ChattingRoom.container'

export const ChattingSticker = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  position: sticky;
  margin-right: 25px;
  bottom: 80px;
  .chattingSticker {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    border: none;
    background-color: #ffa24b;

    @media ${breakPoints.mobile} {
      width: 50px;
      height: 50px;
    }
    .chattingPage {
      width: auto;
      display: grid;
      grid-template-columns: 2fr 4fr;
      /* overflow: scroll; */
      position: absolute;
      right: 10px;
      bottom: 100px;
      /* width: 300px;
      height: 500px; */
    }
  }
`

export default function SideBarPage() {
  const [openChat, setOpenChat] = useState(false)
  const onClickOpenChat = () => {
    setOpenChat((prev) => !prev)
  }
  return (
    <ChattingSticker>
      <div className="chattingSticker">
        {openChat ? (
          <>
            <div className="chattingPage">
              <Chatting />

              <ChattingRoom />
            </div>

            <ChatIcon
              type="button"
              style={{ fontSize: '30px', color: 'white' }}
              onClick={onClickOpenChat}
            />
          </>
        ) : (
          <ChatIcon
            type="button"
            style={{ fontSize: '30px', color: 'white' }}
            onClick={onClickOpenChat}
          />
        )}
      </div>
    </ChattingSticker>
  )
}
