import * as CH from './BoardList.styles'
import { v4 as uuidv4 } from 'uuid'
import { DateToString } from '../../../../commons/libraries/utils/utils'

export default function BoardListUI(props) {
  const testCode = [
    {
      division: '공지',
      title:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus neque nibh, rutrum ut tortor ut, varius fringilla arcu. Suspendisse rutrum nec erat nec mollis. Quisque ex libero, fringilla at odio at, mollis condimentum felis. Sed sit amet facilisis dui. Vestibulum a pharetra turpis. In a rhoncus sapien.',
      contents:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus neque nibh, rutrum ut tortor ut, varius fringilla arcu. Suspendisse rutrum nec erat nec mollis. Quisque ex libero, fringilla at odio at, mollis condimentum felis. Sed sit amet facilisis dui. Vestibulum a pharetra turpis. In a rhoncus sapien. Ut ac rhoncus lacus, ac lacinia tortor.',
      writer: 'goranii',
      createAt: '2022-03-26',
      categories: ['TS', 'JS', 'HTML'],
      answersCount: 2,
    },
    {
      division: '공지',
      title:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus neque nibh, rutrum ut tortor ut, varius fringilla arcu. Suspendisse rutrum nec erat nec mollis. Quisque ex libero, fringilla at odio at, mollis condimentum felis. Sed sit amet facilisis dui. Vestibulum a pharetra turpis. In a rhoncus sapien.',
      contents:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus neque nibh, rutrum ut tortor ut, varius fringilla arcu. Suspendisse rutrum nec erat nec mollis. Quisque ex libero, fringilla at odio at, mollis condimentum felis. Sed sit amet facilisis dui. Vestibulum a pharetra turpis. In a rhoncus sapien. Ut ac rhoncus lacus, ac lacinia tortor.',
      writer: 'goranii',
      createAt: '2022-03-21',
      categories: ['TS', 'JS', 'HTML'],
      answersCount: 3,
    },
    {
      division: '공지',
      title:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus neque nibh, rutrum ut tortor ut, varius fringilla arcu. Suspendisse rutrum nec erat nec mollis. Quisque ex libero, fringilla at odio at, mollis condimentum felis. Sed sit amet facilisis dui. Vestibulum a pharetra turpis. In a rhoncus sapien.',
      contents:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus neque nibh, rutrum ut tortor ut, varius fringilla arcu. Suspendisse rutrum nec erat nec mollis. Quisque ex libero, fringilla at odio at, mollis condimentum felis. Sed sit amet facilisis dui. Vestibulum a pharetra turpis. In a rhoncus sapien. Ut ac rhoncus lacus, ac lacinia tortor.',
      writer: 'goranii',
      createAt: '2022-03-21',
      categories: ['TS', 'JS', 'HTML'],
      answersCount: 0,
    },
    {
      division: '공지',
      title:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus neque nibh, rutrum ut tortor ut, varius fringilla arcu. Suspendisse rutrum nec erat nec mollis. Quisque ex libero, fringilla at odio at, mollis condimentum felis. Sed sit amet facilisis dui. Vestibulum a pharetra turpis. In a rhoncus sapien.',
      contents:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus neque nibh, rutrum ut tortor ut, varius fringilla arcu. Suspendisse rutrum nec erat nec mollis. Quisque ex libero, fringilla at odio at, mollis condimentum felis. Sed sit amet facilisis dui. Vestibulum a pharetra turpis. In a rhoncus sapien. Ut ac rhoncus lacus, ac lacinia tortor.',
      writer: 'goranii',
      createAt: '2022-03-23',
      categories: ['TS', 'JS', 'HTML'],
      answersCount: 7,
    },
    {
      division: '공지',
      title:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus neque nibh, rutrum ut tortor ut, varius fringilla arcu. Suspendisse rutrum nec erat nec mollis. Quisque ex libero, fringilla at odio at, mollis condimentum felis. Sed sit amet facilisis dui. Vestibulum a pharetra turpis. In a rhoncus sapien.',
      contents:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus neque nibh, rutrum ut tortor ut, varius fringilla arcu. Suspendisse rutrum nec erat nec mollis. Quisque ex libero, fringilla at odio at, mollis condimentum felis. Sed sit amet facilisis dui. Vestibulum a pharetra turpis. In a rhoncus sapien. Ut ac rhoncus lacus, ac lacinia tortor.',
      writer: 'goranii',
      createAt: '2022-03-20',
      categories: ['TS', 'JS', 'HTML'],
      answersCount: 22,
    },
    {
      division: '공지',
      title:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus neque nibh, rutrum ut tortor ut, varius fringilla arcu. Suspendisse rutrum nec erat nec mollis. Quisque ex libero, fringilla at odio at, mollis condimentum felis. Sed sit amet facilisis dui. Vestibulum a pharetra turpis. In a rhoncus sapien.',
      contents:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus neque nibh, rutrum ut tortor ut, varius fringilla arcu. Suspendisse rutrum nec erat nec mollis. Quisque ex libero, fringilla at odio at, mollis condimentum felis. Sed sit amet facilisis dui. Vestibulum a pharetra turpis. In a rhoncus sapien. Ut ac rhoncus lacus, ac lacinia tortor.',
      writer: 'goranii',
      createAt: '2022-03-21',
      categories: ['TS', 'JS', 'HTML'],
      answersCount: 1,
    },
    {
      division: '공지',
      title:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus neque nibh, rutrum ut tortor ut, varius fringilla arcu. Suspendisse rutrum nec erat nec mollis. Quisque ex libero, fringilla at odio at, mollis condimentum felis. Sed sit amet facilisis dui. Vestibulum a pharetra turpis. In a rhoncus sapien.',
      contents:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus neque nibh, rutrum ut tortor ut, varius fringilla arcu. Suspendisse rutrum nec erat nec mollis. Quisque ex libero, fringilla at odio at, mollis condimentum felis. Sed sit amet facilisis dui. Vestibulum a pharetra turpis. In a rhoncus sapien. Ut ac rhoncus lacus, ac lacinia tortor.',
      writer: 'goranii',
      createAt: '2022-02-21',
      categories: ['TS', 'JS', 'HTML'],
      answersCount: 125,
    },
    {
      division: '공지',
      title:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus neque nibh, rutrum ut tortor ut, varius fringilla arcu. Suspendisse rutrum nec erat nec mollis. Quisque ex libero, fringilla at odio at, mollis condimentum felis. Sed sit amet facilisis dui. Vestibulum a pharetra turpis. In a rhoncus sapien.',
      contents:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus neque nibh, rutrum ut tortor ut, varius fringilla arcu. Suspendisse rutrum nec erat nec mollis. Quisque ex libero, fringilla at odio at, mollis condimentum felis. Sed sit amet facilisis dui. Vestibulum a pharetra turpis. In a rhoncus sapien. Ut ac rhoncus lacus, ac lacinia tortor.',
      writer: 'goranii',
      createAt: '2022-03-21',
      categories: ['TS', 'JS', 'HTML'],
      answersCount: 0,
    },
    {
      division: '공지',
      title:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus neque nibh, rutrum ut tortor ut, varius fringilla arcu. Suspendisse rutrum nec erat nec mollis. Quisque ex libero, fringilla at odio at, mollis condimentum felis. Sed sit amet facilisis dui. Vestibulum a pharetra turpis. In a rhoncus sapien.',
      contents:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus neque nibh, rutrum ut tortor ut, varius fringilla arcu. Suspendisse rutrum nec erat nec mollis. Quisque ex libero, fringilla at odio at, mollis condimentum felis. Sed sit amet facilisis dui. Vestibulum a pharetra turpis. In a rhoncus sapien. Ut ac rhoncus lacus, ac lacinia tortor.',
      writer: 'goranii',
      createAt: '2022-03-21',
      categories: ['TS', 'JS', 'HTML'],
      answersCount: 9,
    },
    {
      division: '공지',
      title:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus neque nibh, rutrum ut tortor ut, varius fringilla arcu. Suspendisse rutrum nec erat nec mollis. Quisque ex libero, fringilla at odio at, mollis condimentum felis. Sed sit amet facilisis dui. Vestibulum a pharetra turpis. In a rhoncus sapien.',
      contents:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus neque nibh, rutrum ut tortor ut, varius fringilla arcu. Suspendisse rutrum nec erat nec mollis. Quisque ex libero, fringilla at odio at, mollis condimentum felis. Sed sit amet facilisis dui. Vestibulum a pharetra turpis. In a rhoncus sapien. Ut ac rhoncus lacus, ac lacinia tortor.',
      writer: 'goranii',
      createAt: '2022-03-21',
      categories: ['HTML', 'CSS', 'HTML', 'HTML', 'HTML', 'HTML'],
      answersCount: 2,
    },
  ]
  return (
    <CH.Wrapper>
      <p>질문 게시판</p>
      <CH.BoardListWrapper>
        <CH.InnerBodyHeader>
          <div className="headerTitle">
            총 <span>000</span> 건의 글이 있습니다.
          </div>
          <div>
            <button className="writeButton" onClick={props.onClickBoardWrite}>
              글쓰기
            </button>
          </div>
        </CH.InnerBodyHeader>
        <CH.BoardList>
          <div>
            {testCode.map((el, index) => (
              <div key={uuidv4()} className="Contents">
                <div className="ContentsLeftWrapper">
                  <div>No.{index + 1}</div>
                  <div>
                    <span>{el.answersCount}</span> answers
                  </div>
                </div>
                <div className="ContentsRightWrapper">
                  <div
                    className="ContentsTitle"
                    onClick={props.onClickBoardDetail}
                  >
                    {el.title}
                  </div>
                  <div className="ContentsBody">{el.contents}</div>
                  <div className="RightWrapperFooter">
                    <div className="CategoriesWrapper">
                      {new Array(el.categories.length)
                        .fill(el.categories)
                        .filter((filterEl, index) => {
                          if (index < 2) return filterEl
                        })
                        .map((el, index) => (
                          <span key={uuidv4()}>{el[index]}</span>
                        ))}
                    </div>
                    <div>
                      <span className="ContentsWriter">{el.writer}</span>
                      <span className="CreatedAt">
                        {DateToString(el.createAt)}
                      </span>
                    </div>
                  </div>
                </div>
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
