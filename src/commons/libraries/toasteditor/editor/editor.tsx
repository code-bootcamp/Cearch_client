import 'prismjs/themes/prism.css'
import '@toast-ui/editor/dist/toastui-editor.css'
import 'tui-color-picker/dist/tui-color-picker.css'
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css'
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css'

import Prism from 'prismjs'
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight'
import colorSyntax from '@toast-ui/editor-plugin-color-syntax'
import { useRef, useState } from 'react'
import uml from '@toast-ui/editor-plugin-uml'
import { Editor } from '@toast-ui/react-editor'

export default function BoardWriteEditor() {
  const editorRef = useRef<Editor>(null)
  const [contents, setContents] = useState('')

  const onClickConsole = () => {
    const editorInstance = editorRef.current.getInstance()
    const getContentMarkdown = editorInstance.getMarkdown()
    console.log(getContentMarkdown)
    const getContentHTML = editorInstance.getHTML()
    console.log(getContentHTML)
    setContents(getContentMarkdown)
  }
  const onClicktest = () => {
    alert(contents)
  }

  return (
    <div>
      <Editor
        previewStyle="tab"
        plugins={[
          uml,
          colorSyntax,
          [codeSyntaxHighlight, { highlighter: Prism }],
        ]}
        onChange={onClickConsole}
        ref={editorRef}
      />
      <button onClick={onClicktest}>click</button>
    </div>
  )
}
