import { IMyClassesUIProps } from './MyClasses.types'
import * as CH from './MyClasses.styles'
import AppliedClasses from './appliedClasses/AppliedClasses.container'
import PaidClasses from './paidClasses/PaidClasses.container'
import CreatedClasses from './createdClasses/CreatedClasses.container'

export default function MyClassesUI(props: IMyClassesUIProps) {
  return (
    <CH.Wrapper>
      <CH.HeadTitle>나의 클래스</CH.HeadTitle>
      <CH.TabMenu>
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
      </CH.TabMenu>
      <CH.Contents>{props.menuArr[props.currentTab].content}</CH.Contents>
    </CH.Wrapper>
  )
}
