import { useRouter } from 'next/router'
import BoardListUI from './BoardList.presenter'

export default function BoardList() {
  const router = useRouter()

  const onClickBoardWrite = () => {
    router.push('/boards/new')
  }

  return <BoardListUI onClickBoardWrite={onClickBoardWrite} />
}
