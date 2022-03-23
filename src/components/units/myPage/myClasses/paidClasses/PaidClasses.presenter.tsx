import { IPaidClassesProps } from './PaidClasses.types'
import * as CH from './PaidClasses.styles'
import ReviewModal from './paidClasses.modal'

export default function PaidClassesUI(props: IPaidClassesProps) {
  return (
    <div>
      <CH.TakingClasses>
        <CH.TitleLabel>강의가 진행 중인 클래스</CH.TitleLabel>
        {props.paidClasses.map((el: any, index: number) => {
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
              <CH.ClassButton>수강하기</CH.ClassButton>
            </CH.ClassContents>
          )
        })}
      </CH.TakingClasses>
      <CH.EndedClasses>
        <CH.TitleLabel>종료된 클래스</CH.TitleLabel>
        {props.paidClasses.map((el: any, index: number) => {
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
              <CH.ClassButton>후기작성</CH.ClassButton>
            </CH.ClassContents>
          )
        })}
      </CH.EndedClasses>
    </div>
  )
}
