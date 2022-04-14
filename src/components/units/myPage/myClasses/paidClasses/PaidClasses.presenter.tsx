import { IPaidClassesProps } from './PaidClasses.types'
import * as CH from './PaidClasses.styles'
import ClosedClasses from './closed/ClosedClasses'

export default function PaidClassesUI(props: IPaidClassesProps) {
  return (
    <div>
      <CH.TakingClasses>
        <CH.TitleLabel>강의가 진행 중인 클래스</CH.TitleLabel>
        {props.PaidClassesData?.fetchLectureWithMentee?.map(
          (el: any, index: number) => (
            <CH.ClassContents key={index}>
              <CH.ClassContentsLeft>
                <CH.ClassImage></CH.ClassImage>
                <CH.ClassContentsList>
                  <CH.ClassContentsListTop>
                    <CH.ClassCategory>
                      <span className="Categories">
                        {
                          el.joinproductandproductcategory[0]
                            .lectureproductcategory.categoryname
                        }
                      </span>
                      {el.joinproductandproductcategory[1] && (
                        <span className="Categories">
                          {
                            el.joinproductandproductcategory[1]
                              .lectureproductcategory.categoryname
                          }
                        </span>
                      )}
                    </CH.ClassCategory>
                    <CH.ClassTitle>{el.classTitle}</CH.ClassTitle>
                  </CH.ClassContentsListTop>
                  <CH.ClassDate>{el.classStartDate}</CH.ClassDate>
                </CH.ClassContentsList>
              </CH.ClassContentsLeft>
              <CH.ClassButton>수강하기</CH.ClassButton>
            </CH.ClassContents>
          )
        )}
      </CH.TakingClasses>
      <CH.EndedClasses>
        <CH.TitleLabel>종료된 클래스</CH.TitleLabel>
        {props.PaidClassesData?.fetchLectureWithMentee.map(
          (el: any, index: number) => {
            return (
              <ClosedClasses key={index} el={el} />
              // <CH.ClassContents key={index}>
              //   <CH.ClassContentsLeft>
              //     <CH.ClassImage>
              //       <img src="https://cloudspoint.xyz/wp-content/uploads/2020/02/CODE-1.jpg" />
              //     </CH.ClassImage>
              //     <CH.ClassContentsList>
              //       <CH.ClassContentsListTop>
              //         <CH.ClassCategory>
              //           {el.category.map((el, index) => (
              //             <span className="Categories" key={index}>
              //               {el}
              //             </span>
              //           ))}
              //         </CH.ClassCategory>
              //         <CH.ClassTitle>{el.title}</CH.ClassTitle>
              //       </CH.ClassContentsListTop>
              //       <CH.ClassDate>{el.date}</CH.ClassDate>
              //     </CH.ClassContentsList>
              //   </CH.ClassContentsLeft>
              //   <CH.ClassButton>후기쓰기</CH.ClassButton>
              // </CH.ClassContents>
            )
          }
        )}
      </CH.EndedClasses>
    </div>
  )
}
