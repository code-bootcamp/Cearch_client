import * as CH from './Search.styles'

export default function SearchUI(props) {
  return (
    <CH.Wrapper>
      <CH.Title>MENTOR</CH.Title>
      <CH.Line />
      {props.mentorData?.fetchHomeSearch.map((el) => (
        <CH.BorderBottom key={el.id}>
          <div>
            <CH.UserWrapper>
              <span className="mentorName">{el.name}</span>{' '}
              <span className="companyName">{el.companyName}</span>{' '}
              <span className="smallFont">{el.department}</span>
            </CH.UserWrapper>
            <div>
              <p className="description">{el.selfIntro}</p>
            </div>
          </div>
        </CH.BorderBottom>
      ))}
      <CH.Title>CLASS</CH.Title>
      <CH.Line />
      {props.lectureData?.fetchSearchAuto.map((el) => (
        <CH.BorderBottom key={el.id}>
          <div>
            <CH.UserWrapper>
              <span className="mentorName">{el.name}</span>{' '}
              <span className="companyName">{el.companyName}</span>{' '}
              <span className="smallFont">{el.department}</span>
            </CH.UserWrapper>
            <div>
              <span>{el.classTitle}</span>
              <p className="description">{el.classDescription}</p>
            </div>
            <span className="smallFont">클래스 평정 : {el.rating}</span>
          </div>
        </CH.BorderBottom>
      ))}
    </CH.Wrapper>
  )
}
