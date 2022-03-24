import * as CH from './NoteDetail.styles'

export default function NoteDetailUI(props) {
  const testCode = [
    {
      division: '공지',
      title:
        'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus neque nibh, rutrum ut tortor ut, varius fringilla arcu. Suspendisse rutrum nec erat nec mollis. Quisque ex libero, fringilla at odio at, mollis condimentum felis. Sed sit amet facilisis dui. Vestibulum a pharetra turpis. In a rhoncus sapien. Ut ac rhoncus lacus, ac lacinia tortor.',
      contents:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus neque nibh, rutrum ut tortor ut, varius fringilla arcu. Suspendisse rutrum nec erat nec mollis. Quisque ex libero, fringilla at odio at, mollis condimentum felis. Sed sit amet facilisis dui. Vestibulum a pharetra turpis. In a rhoncus sapien. Ut ac rhoncus lacus, ac lacinia tortor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus neque nibh, rutrum ut tortor ut, varius fringilla arcu. Suspendisse rutrum nec erat nec mollis. Quisque ex libero, fringilla at odio at, mollis condimentum felis. Sed sit amet facilisis dui. Vestibulum a pharetra turpis. In a rhoncus sapien. Ut ac rhoncus lacus, ac lacinia tortor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus neque nibh, rutrum ut tortor ut, varius fringilla arcu. Suspendisse rutrum nec erat nec mollis. Quisque ex libero, fringilla at odio at, mollis condimentum felis. Sed sit amet facilisis dui. Vestibulum a pharetra turpis. In a rhoncus sapien. Ut ac rhoncus lacus, ac lacinia tortor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus neque nibh, rutrum ut tortor ut, varius fringilla arcu. Suspendisse rutrum nec erat nec mollis. Quisque ex libero, fringilla at odio at, mollis condimentum felis. Sed sit amet facilisis dui. Vestibulum a pharetra turpis. In a rhoncus sapien. Ut ac rhoncus lacus, ac lacinia tortor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus neque nibh, rutrum ut tortor ut, varius fringilla arcu. Suspendisse rutrum nec erat nec mollis. Quisque ex libero, fringilla at odio at, mollis condimentum felis. Sed sit amet facilisis dui. Vestibulum a pharetra turpis. In a rhoncus sapien. Ut ac rhoncus lacus, ac lacinia tortor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus neque nibh, rutrum ut tortor ut, varius fringilla arcu. Suspendisse rutrum nec erat nec mollis. Quisque ex libero, fringilla at odio at, mollis condimentum felis. Sed sit amet facilisis dui. Vestibulum a pharetra turpis. In a rhoncus sapien. Ut ac rhoncus lacus, ac lacinia tortor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus neque nibh, rutrum ut tortor ut, varius fringilla arcu. Suspendisse rutrum nec erat nec mollis. Quisque ex libero, fringilla at odio at, mollis condimentum felis. Sed sit amet facilisis dui. Vestibulum a pharetra turpis. In a rhoncus sapien. Ut ac rhoncus lacus, ac lacinia tortor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus neque nibh, rutrum ut tortor ut, varius fringilla arcu. Suspendisse rutrum nec erat nec mollis. Quisque ex libero, fringilla at odio at, mollis condimentum felis. Sed sit amet facilisis dui. Vestibulum a pharetra turpis. In a rhoncus sapien. Ut ac rhoncus lacus, ac lacinia tortor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus neque nibh, rutrum ut tortor ut, varius fringilla arcu. Suspendisse rutrum nec erat nec mollis. Quisque ex libero, fringilla at odio at, mollis condimentum felis. Sed sit amet facilisis dui. Vestibulum a pharetra turpis. In a rhoncus sapien. Ut ac rhoncus lacus, ac lacinia tortor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus neque nibh, rutrum ut tortor ut, varius fringilla arcu. Suspendisse rutrum nec erat nec mollis. Quisque ex libero, fringilla at odio at, mollis condimentum felis. Sed sit amet facilisis dui. Vestibulum a pharetra turpis. In a rhoncus sapien. Ut ac rhoncus lacus, ac lacinia tortor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus neque nibh, rutrum ut tortor ut, varius fringilla arcu. Suspendisse rutrum nec erat nec mollis. Quisque ex libero, fringilla at odio at, mollis condimentum felis. Sed sit amet facilisis dui. Vestibulum a pharetra turpis. In a rhoncus sapien. Ut ac rhoncus lacus, ac lacinia tortor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus neque nibh, rutrum ut tortor ut, varius fringilla arcu. Suspendisse rutrum nec erat nec mollis. Quisque ex libero, fringilla at odio at, mollis condimentum felis. Sed sit amet facilisis dui. Vestibulum a pharetra turpis. In a rhoncus sapien. Ut ac rhoncus lacus, ac lacinia tortor.',
      writer: 'goranii',
      createAt: '2022-03-21',
    },
  ]
  return (
    <CH.Wrapper>
      <CH.NoteDetailHeader>
        <span className="NoteDetailTitle">공지사항</span>
      </CH.NoteDetailHeader>
      <CH.NoteDetailBody>
        <div className="NoteDetailTitle" placeholder="제목">
          {testCode[0].title}
        </div>
        <div
          className="NoteDetailContents"
          placeholder="본문 내용을 작성해주세요"
        >
          {testCode[0].contents}
        </div>
        <div className="ButtonWrapper">
          <button className="BackToListBtn" onClick={props.onClickNoteList}>
            목록으로
          </button>
          <button className="EditBtn">수정하기</button>
          <button className="DeleteBtn">삭제하기</button>
        </div>
      </CH.NoteDetailBody>
    </CH.Wrapper>
  )
}
