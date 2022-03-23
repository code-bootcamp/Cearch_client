import * as CH from './ClassPermissionList.styles'
import { v4 as uuidv4 } from "uuid";

export default function ClassPermissionListUI(){
    const testCode = [
        {
            name: '이름 이름 이름',
          className: '클래스명 클래스명 클래스명',
          category:'Java, C++, Python, React',
          createAt: '2022-03-21',
        },
        {
            name: '이름 이름 이름',
            className: '클래스명 클래스명 클래스명',
          category:'Java, C++, Python, React',
          createAt: '2022-03-21',
        },
        {
            name: '이름 이름 이름',
            className: '클래스명 클래스명 클래스명',
          category:'Java, C++, Python, React',
          createAt: '2022-03-21',
        },
        {
            name: '이름 이름 이름',
            className: '클래스명 클래스명 클래스명',
          category:'Java, C++, Python, React',
          createAt: '2022-03-21',
        },
        {
            name: '이름 이름 이름',
            className: '클래스명 클래스명 클래스명',
          category:'Java, C++, Python, React',
          createAt: '2022-03-21',
        },
        {
            name: '이름 이름 이름',
            className: '클래스명 클래스명 클래스명',
          category:'Java, C++, Python, React',
          createAt: '2022-03-21',
        },
        {
            name: '이름 이름 이름',
            className: '클래스명 클래스명 클래스명',
          category:'Java, C++, Python, React',
          createAt: '2022-03-21',
        },
        {
            name: '이름 이름 이름',
            className: '클래스명 클래스명 클래스명',
          category:'Java, C++, Python, React',
          createAt: '2022-03-21',
        },
        {
            name: '이름 이름 이름',
            className: '클래스명 클래스명 클래스명',
          category:'Java, C++, Python, React',
          createAt: '2022-03-21',
        },
        {
            name: '이름 이름 이름',
            className: '클래스명 클래스명 클래스명',
          category:'Java, C++, Python, React',
          createAt: '2022-03-21',
        },
      ]
    return (
    <CH.Wrapper>
        <CH.ClassPermission__Header>
            <h2>멘토 클래스 개설 신청 리스트</h2>
            
        </CH.ClassPermission__Header>
        <CH.ClassPermission__Body>
            <CH.Body__Header>
                <span>NO.</span>
                <span>클래스명</span>
                <span>분야</span>
                <span>멘토이름</span>
            </CH.Body__Header>
            <CH.Body__Body>
            {testCode.map((el, index) => (
                <CH.ListWrapper key={uuidv4()}>
                    <div>{index + 1}</div>
                    <CH.ClassName>{el.className}</CH.ClassName>
                    <CH.MentorCategory>{el.category}</CH.MentorCategory>
                    <CH.MentorName>{el.name}</CH.MentorName>
                </CH.ListWrapper>
        
            ))}
            </CH.Body__Body>
        </CH.ClassPermission__Body>
        <CH.ClassPermission__Footer>
            <div> {`< 1 2 3 4 5 6 >`}</div>
        </CH.ClassPermission__Footer>
    </CH.Wrapper>
    )
}

