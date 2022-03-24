import Prism from 'prismjs'
// 여기 css를 수정해서 코드 하이라이팅 커스텀 가능
import 'prismjs/themes/prism.css'

import '@toast-ui/editor/dist/toastui-editor.css'
import { Viewer } from '@toast-ui/react-editor'

import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css'
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight'

// const Viewer = dynamic(
//   () => import('@toast-ui/react-editor').then((module) => module.Viewer),
//   {
//     ssr: false,
//   }
// )
export default function BoardWriteViewer() {
  return <Viewer plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]} />
}
