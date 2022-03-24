import dynamic from 'next/dynamic'

const BoardWriteViewer = dynamic(() => import('./viewer'), {
  ssr: false,
})

export default function BoardWriteViewerPage() {
  const testCode = ''
  return <BoardWriteViewer />
}
