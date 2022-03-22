import * as CH from './MentorPermissionList.styles'
import { v4 as uuidv4 } from "uuid";

export default function MentorPermissionListUI(){
    const testCode = [
        {
          division: '멘토신청',
          name: '이름 이름 이름',
          category:'Java, C++, Python, React',
          createAt: '2022-03-21',
        },
        {
          division: '멘토신청',
          name: '이름 이름 이름',
          category:'Java, C++, Python, React',
          createAt: '2022-03-21',
        },
        {
          division: '멘토신청',
          name: '이름 이름 이름',
          category:'Java, C++, Python, React Java, C++, Python, React Java, C++, Python, React Java, C++, Python, React',
          createAt: '2022-03-21',
        },
        {
          division: '멘토신청',
          name: '이름 이름 이름',
          category:'Java, C++, Python, React',
          createAt: '2022-03-21',
        },
        {
          division: '멘토신청',
          name: '이름 이름 이름',
          category:'Java, C++, Python, React',
          createAt: '2022-03-21',
        },
        {
          division: '멘토신청',
          name: '이름 이름 이름',
          category:'Java, C++, Python, React',
          createAt: '2022-03-21',
        },
        {
          division: '멘토신청',
          name: '이름 이름 이름',
          category:'Java, C++, Python, React',
          createAt: '2022-03-21',
        },
        {
          division: '멘토신청',
          name: '이름 이름 이름',
          category:'Java, C++, Python, React',
          createAt: '2022-03-21',
        },
        {
          division: '멘토신청',
          name: '이름 이름 이름',
          category:'Java, C++, Python, React',
          createAt: '2022-03-21',
        },
        {
          division: '멘토신청',
          name: '이름 이름 이름',
          category:'Java, C++, Python, React',
          createAt: '2022-03-21',
        },
      ]
    return (
    <CH.Wrapper>
        <CH.MentorPermission__Header>
            <h2>멘토 신청 리스트</h2>
            
        </CH.MentorPermission__Header>
        <CH.MentorPermission__Body>
            <CH.Body__Header>
                <span>NO.</span>
                <span>이름</span>
                <span>분야</span>
                <span>신청일</span>
            </CH.Body__Header>
            <CH.Body__Body>
            {testCode.map((el, index) => (
                <CH.ListWrapper key={uuidv4()}>
                    <div>{index + 1}</div>
                    <CH.MentorName>{el.name}</CH.MentorName>
                    <CH.MentorCategory>{el.category}</CH.MentorCategory>
                    <CH.MentorCreatedAt>{el.createAt}</CH.MentorCreatedAt>
                </CH.ListWrapper>
        
            ))}
            </CH.Body__Body>
        </CH.MentorPermission__Body>
        <CH.MentorPermission__Footer>
            <div> {`< 1 2 3 4 5 6 >`}</div>
        </CH.MentorPermission__Footer>
    </CH.Wrapper>
    )
}
