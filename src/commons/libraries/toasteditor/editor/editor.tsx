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
import styled from '@emotion/styled'

const Wrapper = styled.div`
  width: 100%;
  > div {
    height: 400px !important;
  }
`

export default function BoardWriteEditor(props) {
  const editorRef = useRef<Editor>(null)

  const onChangeContents = () => {
    const editorInstance = editorRef.current.getInstance()
    // const getContentMarkdown = editorInstance.getMarkdown()
    // const getContentHTML = editorInstance.getHTML()
    props.setContents(editorInstance.getMarkdown())

    if (props.defaultValue) props.setContents(editorInstance.getMarkdown())
  }

  return (
    <Wrapper>
      <Editor
        previewStyle="tab"
        plugins={[
          uml,
          colorSyntax,
          [codeSyntaxHighlight, { highlighter: Prism }],
        ]}
        onChange={onChangeContents}
        placeholder="궁금한 내용이 무엇인가요?"
        ref={editorRef}
        initialValue={props.defaultValue}
      />
    </Wrapper>
  )
}
