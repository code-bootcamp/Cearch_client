// 여기 css를 수정해서 코드 하이라이팅 커스텀 가능
import 'prismjs/themes/prism.css'
import '@toast-ui/editor/dist/toastui-editor.css'
import 'tui-color-picker/dist/tui-color-picker.css'
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css'
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css'
import Prism from 'prismjs'
import { Viewer } from '@toast-ui/react-editor'
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight'
import colorSyntax from '@toast-ui/editor-plugin-color-syntax'
import { useRef } from 'react'

export default function ToastViewer() {
  const editorRef = useRef<Viewer>(null)
  const testCode = '```<div> <p>HeadLine</p><div>``` 가나다라'

  const onClickConsole = () => {
    const editorInstance = editorRef.current.getInstance()
    const getContentMarkdown = editorInstance.setMarkdown(testCode)
    // const getContentHTML = editorInstance.getHTML()
    // props.setContents(editorInstance.getHTML())
    // console.log(props.contents)
    return getContentMarkdown
  }
  return (
    <Viewer
      initialValue={testCode}
      plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]}
    />
  )
}
