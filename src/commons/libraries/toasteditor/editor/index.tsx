import dynamic from 'next/dynamic'

const ToastEditor = dynamic(() => import('./editor'), {
  ssr: false,
})

export default function ToastEditorPage(props) {
  return (
    <ToastEditor contents={props.contents} setContents={props.setContents} />
  )
}
