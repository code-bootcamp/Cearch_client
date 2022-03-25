import dynamic from 'next/dynamic'

const ToastViewer = dynamic(() => import('./viewer'), {
  ssr: false,
})

export default function ToastViewerPage() {
  const testCode = ''
  return <ToastViewer />
}
