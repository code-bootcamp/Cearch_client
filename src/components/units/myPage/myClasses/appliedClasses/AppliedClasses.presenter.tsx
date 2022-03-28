import { IAppliedClassesProps } from './AppliedClasses.types'
import * as CH from './AppliedClasses.styles'

export default function AppliedClassesUI(props: IAppliedClassesProps) {
  return (
    <div>
      {props.appliedClasses.map((el: any, index: number) => {
        return (
          <CH.ClassContents key={index}>
            <CH.ClassContentsLeft>
              <CH.ClassImage>
                <img src="https://cloudspoint.xyz/wp-content/uploads/2020/02/CODE-1.jpg" />
              </CH.ClassImage>
              <CH.ClassContentsList>
                <CH.ClassContentsListTop>
                  <CH.ClassCategory>
                    {el.category.map((el, index) => (
                      <span className="Categories" key={index}>
                        {el}
                      </span>
                    ))}
                  </CH.ClassCategory>
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
