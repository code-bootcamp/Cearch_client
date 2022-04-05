import { IAppliedClassesProps } from './AppliedClasses.types'
import * as CH from './AppliedClasses.styles'
import { getPrice } from '../../../../../commons/libraries/utils/utils'

export default function AppliedClassesUI(props: IAppliedClassesProps) {
  const onClickId = (event) => {
    props.setLectureId(event.currentTarget.id)

    props.onClickPayment()
  }
  return (
    <div>
      {props.data?.fetchlectureRegistrations.map((el: any) => {
        return (
          <CH.ClassContents key={el.id}>
            <CH.ClassContentsLeft>
              <CH.ClassImage></CH.ClassImage>
              <CH.ClassContentsList>
                <CH.ClassContentsListTop>
                  <CH.ClassCategory>
                    <span className="Categories">
                      {
                        el.product.joinproductandproductcategory[0]
                          .lectureproductcategory.categoryname
                      }
                    </span>
                    {el.product.joinproductandproductcategory[1] && (
                      <span className="Categories">
                        {
                          el.product.joinproductandproductcategory[1]
                            .lectureproductcategory.categoryname
                        }
                      </span>
                    )}
                  </CH.ClassCategory>
                  <CH.ClassTitle>{el.product.classTitle}</CH.ClassTitle>
                </CH.ClassContentsListTop>
                <CH.ClassDate>{el.product.classStartDate}</CH.ClassDate>
              </CH.ClassContentsList>
            </CH.ClassContentsLeft>
            <CH.ClassContentsRight>
              {getPrice(el.product.classPrice)} 원
            </CH.ClassContentsRight>
            <CH.ClassPayButton id={el.id} onClick={onClickId}>
              결제하기
            </CH.ClassPayButton>
          </CH.ClassContents>
        )
      })}
    </div>
  )
}
