import { useRouter } from 'next/router'
import BoardWrite from '../../../../src/components/units/boards/write/BoardWrite.container'

export default function BoardEditPage() {
  const router = useRouter()

  return <BoardWrite />
}
