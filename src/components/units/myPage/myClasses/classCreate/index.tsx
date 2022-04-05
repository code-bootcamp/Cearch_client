import dynamic from 'next/dynamic'

const ToastEditor = dynamic(() => import('./editor'), {
  ssr: false,
})

export default function ToastEditorPage(props) {
  return (
    <ToastEditor
      description={props.description}
      curriculum={props.curriculum}
      setDescription={props.setDescription}
      setCurriculum={props.setCurriculum}
    />
  )
}
