import { useRouter } from 'next/router'
import BoardListUI from './BoardList.presenter'

export default function BoardList() {
  const router = useRouter()

  const onClickBoardWrite = () => {
    router.push('/boards/new')
  }
  const onClickBoardDetail = () => {
    router.push('/boards/[datail]')
  }

  return (
    <BoardListUI
      onClickBoardWrite={onClickBoardWrite}
      onClickBoardDetail={onClickBoardDetail}
    />
  )
}
