import { IAppliedClassesProps } from './AppliedClasses.types'
import * as CH from './AppliedClasses.styles'

export default function AppliedClassesUI(props: IAppliedClassesProps) {
  return (
    <div>
      {props.appliedClasses.map((el: any, index: number) => {
        return (
          <CH.ClassContents key={index}>
            <CH.ClassContentsLeft>
              <CH.ClassImage></CH.ClassImage>
              <CH.ClassContentsList>
                <CH.ClassContentsListTop>
                  <CH.ClassCategory>{el.category}</CH.ClassCategory>
                  <CH.ClassTitle>{el.title}</CH.ClassTitle>
                </CH.ClassContentsListTop>
                <CH.ClassDate>{el.date}</CH.ClassDate>
              </CH.ClassContentsList>
            </CH.ClassContentsLeft>
            <CH.ClassContentsRight>{el.price} 원</CH.ClassContentsRight>
            <CH.ClassPayButton>결제하기</CH.ClassPayButton>
          </CH.ClassContents>
        )
      })}
    </div>
  )
}
