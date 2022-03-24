import * as CH from './BoardList.styles'
import { v4 as uuidv4 } from 'uuid'

export default function BoardListUI(props) {
  const testCode = [
    {
      division: '공지',
      title:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus neque nibh, rutrum ut tortor ut, varius fringilla arcu. Suspendisse rutrum nec erat nec mollis. Quisque ex libero, fringilla at odio at, mollis condimentum felis. Sed sit amet facilisis dui. Vestibulum a pharetra turpis. In a rhoncus sapien.',
      contents:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus neque nibh, rutrum ut tortor ut, varius fringilla arcu. Suspendisse rutrum nec erat nec mollis. Quisque ex libero, fringilla at odio at, mollis condimentum felis. Sed sit amet facilisis dui. Vestibulum a pharetra turpis. In a rhoncus sapien. Ut ac rhoncus lacus, ac lacinia tortor.',
      writer: 'goranii',
      createAt: '2022-03-21',
    },
    {
      division: '공지',
      title:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus neque nibh, rutrum ut tortor ut, varius fringilla arcu. Suspendisse rutrum nec erat nec mollis. Quisque ex libero, fringilla at odio at, mollis condimentum felis. Sed sit amet facilisis dui. Vestibulum a pharetra turpis. In a rhoncus sapien.',
      contents:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus neque nibh, rutrum ut tortor ut, varius fringilla arcu. Suspendisse rutrum nec erat nec mollis. Quisque ex libero, fringilla at odio at, mollis condimentum felis. Sed sit amet facilisis dui. Vestibulum a pharetra turpis. In a rhoncus sapien. Ut ac rhoncus lacus, ac lacinia tortor.',
      writer: 'goranii',
      createAt: '2022-03-21',
    },
    {
      division: '공지',
      title:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus neque nibh, rutrum ut tortor ut, varius fringilla arcu. Suspendisse rutrum nec erat nec mollis. Quisque ex libero, fringilla at odio at, mollis condimentum felis. Sed sit amet facilisis dui. Vestibulum a pharetra turpis. In a rhoncus sapien.',
      contents:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus neque nibh, rutrum ut tortor ut, varius fringilla arcu. Suspendisse rutrum nec erat nec mollis. Quisque ex libero, fringilla at odio at, mollis condimentum felis. Sed sit amet facilisis dui. Vestibulum a pharetra turpis. In a rhoncus sapien. Ut ac rhoncus lacus, ac lacinia tortor.',
      writer: 'goranii',
      createAt: '2022-03-21',
    },
    {
      division: '공지',
      title:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus neque nibh, rutrum ut tortor ut, varius fringilla arcu. Suspendisse rutrum nec erat nec mollis. Quisque ex libero, fringilla at odio at, mollis condimentum felis. Sed sit amet facilisis dui. Vestibulum a pharetra turpis. In a rhoncus sapien.',
      contents:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus neque nibh, rutrum ut tortor ut, varius fringilla arcu. Suspendisse rutrum nec erat nec mollis. Quisque ex libero, fringilla at odio at, mollis condimentum felis. Sed sit amet facilisis dui. Vestibulum a pharetra turpis. In a rhoncus sapien. Ut ac rhoncus lacus, ac lacinia tortor.',
      writer: 'goranii',
      createAt: '2022-03-21',
    },
    {
      division: '공지',
      title:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus neque nibh, rutrum ut tortor ut, varius fringilla arcu. Suspendisse rutrum nec erat nec mollis. Quisque ex libero, fringilla at odio at, mollis condimentum felis. Sed sit amet facilisis dui. Vestibulum a pharetra turpis. In a rhoncus sapien.',
      contents:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus neque nibh, rutrum ut tortor ut, varius fringilla arcu. Suspendisse rutrum nec erat nec mollis. Quisque ex libero, fringilla at odio at, mollis condimentum felis. Sed sit amet facilisis dui. Vestibulum a pharetra turpis. In a rhoncus sapien. Ut ac rhoncus lacus, ac lacinia tortor.',
      writer: 'goranii',
      createAt: '2022-03-21',
    },
    {
      division: '공지',
      title:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus neque nibh, rutrum ut tortor ut, varius fringilla arcu. Suspendisse rutrum nec erat nec mollis. Quisque ex libero, fringilla at odio at, mollis condimentum felis. Sed sit amet facilisis dui. Vestibulum a pharetra turpis. In a rhoncus sapien.',
      contents:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus neque nibh, rutrum ut tortor ut, varius fringilla arcu. Suspendisse rutrum nec erat nec mollis. Quisque ex libero, fringilla at odio at, mollis condimentum felis. Sed sit amet facilisis dui. Vestibulum a pharetra turpis. In a rhoncus sapien. Ut ac rhoncus lacus, ac lacinia tortor.',
      writer: 'goranii',
      createAt: '2022-03-21',
    },
    {
      division: '공지',
      title:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus neque nibh, rutrum ut tortor ut, varius fringilla arcu. Suspendisse rutrum nec erat nec mollis. Quisque ex libero, fringilla at odio at, mollis condimentum felis. Sed sit amet facilisis dui. Vestibulum a pharetra turpis. In a rhoncus sapien.',
      contents:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus neque nibh, rutrum ut tortor ut, varius fringilla arcu. Suspendisse rutrum nec erat nec mollis. Quisque ex libero, fringilla at odio at, mollis condimentum felis. Sed sit amet facilisis dui. Vestibulum a pharetra turpis. In a rhoncus sapien. Ut ac rhoncus lacus, ac lacinia tortor.',
      writer: 'goranii',
      createAt: '2022-03-21',
    },
    {
      division: '공지',
      title:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus neque nibh, rutrum ut tortor ut, varius fringilla arcu. Suspendisse rutrum nec erat nec mollis. Quisque ex libero, fringilla at odio at, mollis condimentum felis. Sed sit amet facilisis dui. Vestibulum a pharetra turpis. In a rhoncus sapien.',
      contents:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus neque nibh, rutrum ut tortor ut, varius fringilla arcu. Suspendisse rutrum nec erat nec mollis. Quisque ex libero, fringilla at odio at, mollis condimentum felis. Sed sit amet facilisis dui. Vestibulum a pharetra turpis. In a rhoncus sapien. Ut ac rhoncus lacus, ac lacinia tortor.',
      writer: 'goranii',
      createAt: '2022-03-21',
    },
    {
      division: '공지',
      title:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus neque nibh, rutrum ut tortor ut, varius fringilla arcu. Suspendisse rutrum nec erat nec mollis. Quisque ex libero, fringilla at odio at, mollis condimentum felis. Sed sit amet facilisis dui. Vestibulum a pharetra turpis. In a rhoncus sapien.',
      contents:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus neque nibh, rutrum ut tortor ut, varius fringilla arcu. Suspendisse rutrum nec erat nec mollis. Quisque ex libero, fringilla at odio at, mollis condimentum felis. Sed sit amet facilisis dui. Vestibulum a pharetra turpis. In a rhoncus sapien. Ut ac rhoncus lacus, ac lacinia tortor.',
      writer: 'goranii',
      createAt: '2022-03-21',
    },
    {
      division: '공지',
      title:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus neque nibh, rutrum ut tortor ut, varius fringilla arcu. Suspendisse rutrum nec erat nec mollis. Quisque ex libero, fringilla at odio at, mollis condimentum felis. Sed sit amet facilisis dui. Vestibulum a pharetra turpis. In a rhoncus sapien.',
      contents:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus neque nibh, rutrum ut tortor ut, varius fringilla arcu. Suspendisse rutrum nec erat nec mollis. Quisque ex libero, fringilla at odio at, mollis condimentum felis. Sed sit amet facilisis dui. Vestibulum a pharetra turpis. In a rhoncus sapien. Ut ac rhoncus lacus, ac lacinia tortor.',
      writer: 'goranii',
      createAt: '2022-03-21',
    },
  ]
  return (
    <CH.Wrapper>
      <CH.BoardListWrapper>
        <CH.InnerBodyHeader>
          <div>
            총 <span>000</span> 건의 글이 있습니다.
          </div>
          <div>
            <button className="WriteButton" onClick={props.onClickBoardWrite}>
              글쓰기
            </button>
          </div>
        </CH.InnerBodyHeader>
        <CH.BoardList>
          <div className="boardListContents">
            <div>번호</div>
            <div>제목</div>
            <div>글쓴이</div>
            <div>작성일</div>
          </div>
          <div>
            {testCode.map((el, index) => (
              <div key={uuidv4()} className="Contents">
                <div>{index + 1}</div>
                <div className="ContentsTitle">{el.title}</div>
                <div className="ContentsWriter">{el.writer}</div>
                <div>{el.createAt}</div>
              </div>
            ))}
          </div>
        </CH.BoardList>
      </CH.BoardListWrapper>

      <div className="pagination">
        <span>{`<`}</span>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
        <span>6</span>
        <span>7</span>
        <span>8</span>
        <span>9</span>
        <span>10</span>
        <span>{`>`}</span>
      </div>
    </CH.Wrapper>
  )
}
