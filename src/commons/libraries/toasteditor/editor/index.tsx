import dynamic from 'next/dynamic'

const ToastEditor = dynamic(() => import('./editor'), {
  ssr: false,
})

export default function ToastEditorPage() {
  return <ToastEditor />
}
