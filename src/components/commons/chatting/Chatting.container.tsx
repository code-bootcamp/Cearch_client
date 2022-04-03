import { useMutation } from '@apollo/client'
import { IMutation } from '../../../commons/types/generated/types'
import ChattingUI from './Chatting.presenter'
import { CREATE_ROOM } from './Chatting.queries'
import { notification } from 'antd'
import { useRouter } from 'next/router'

export default function Chatting() {
  const router = useRouter()
  const [createRoom] = useMutation(CREATE_ROOM)
  const createChatRoom = async () => {
    try {
      const result = await createRoom({
        variables: {
          memberQtInput: {
            roomName: 'test',
          },
        },
      })
      notification.success({
        message: '게시글 작성을 완료했어요!',
        top: 80,
      })
      router.push(`/boards/${result?.data?.createQtBoard?.id}`)
    } catch (error) {
      notification.error({ message: `${error.message}`, top: 80 })
    }
  }
  const onClickCreateChatRoom = () => {}
  return <ChattingUI />
}
