import { IMyQAsUIProps } from './MyQAs.types'
import * as CH from './MyQAs.styles'

export default function MyQAsUI(props: IMyQAsUIProps) {
  return (
    <CH.Wrapper>
      <CH.Head>
        <CH.HeadTitle>나의 질문/답변 내역</CH.HeadTitle>
        <CH.HeadMenu>
          {props.menuArr.map((el: any, index: number) => {
            return (
              <CH.Menu
                key={index}
                className={props.currentTab === index ? 'focused' : 'submenu'}
                onClick={() => props.selectMenuHandler(index)}
              >
                {el.name}
              </CH.Menu>
            )
          })}
        </CH.HeadMenu>
      </CH.Head>
      {props.menuArr[props.currentTab].content}
    </CH.Wrapper>
  )
}
