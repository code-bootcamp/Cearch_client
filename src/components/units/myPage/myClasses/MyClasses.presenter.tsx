import { IMyClassesUIProps } from './MyClasses.types'
import * as CH from './MyClasses.styles'
import ClassCreate from './classCreate/ClassCreate.container'

export default function MyClassesUI(props: IMyClassesUIProps) {
  return (
    <CH.Wrapper>
      <CH.Row>
        <CH.HeadTitle>나의 클래스</CH.HeadTitle>
        <CH.CreateButton onClick={props.onClickModal}>
          + 클래스 개설하기
        </CH.CreateButton>
      </CH.Row>
      {props.isModalOpen && <ClassCreate />}
      {props.isModalOpen || (
        <div>
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
        </div>
      )}
    </CH.Wrapper>
  )
}
