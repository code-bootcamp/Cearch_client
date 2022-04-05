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
import * as CH from './ClassCreate.styles'

export default function BoardWriteEditor(props) {
  const editorRef = useRef()
  const editorRef2 = useRef()

  const onChangeDescription = () => {
    console.log(editorRef)
    props.setDescription(editorRef.current.getInstance().getMarkdown())
  }
  const onChangeCurriculum = () => {
    props.setCurriculum(editorRef2.current.getInstance().getMarkdown())
  }
  return (
    <>
      <CH.RowLabel>강의 소개</CH.RowLabel>
      <CH.EditorWrapper>
        <Editor onChange={onChangeDescription} ref={editorRef} />
      </CH.EditorWrapper>
      <CH.RowLabel>커리큘럼</CH.RowLabel>
      <CH.EditorWrapper>
        <Editor onChange={onChangeCurriculum} ref={editorRef2} />
      </CH.EditorWrapper>
    </>
  )
}
