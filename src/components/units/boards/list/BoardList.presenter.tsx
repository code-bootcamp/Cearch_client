import * as CH from './BoardList.styles'
import { v4 as uuidv4 } from 'uuid'
import { DateToString } from '../../../../commons/libraries/utils/utils'
import Pagination from '../../../commons/pagination/pagination'

export default function BoardListUI(props) {
  return (
    <CH.Wrapper>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
          height: 'auto',
        }}
      >
        <p
          style={{
            fontSize: '1.5rem',
            fontWeight: '600',
            marginBottom: '50px',
          }}
        >
          질문 게시판
        </p>
        <CH.SearchBar>
          <input type="text" placeholder="게시판 내 검색" />
          <button>
            <div className="search icon"></div>
          </button>
        </CH.SearchBar>
      </div>
      <CH.BoardListWrapper>
        <CH.InnerBodyHeader>
          <div className="headerTitle">
            총{' '}
            <span style={{ color: '#224fe1', fontWeight: '700' }}>
              {props.qtBoardCounts?.fetchAllPostCount}
            </span>{' '}
            건의 글이 있습니다.
          </div>
          <div>
            <button className="writeButton" onClick={props.onClickBoardWrite}>
              글쓰기
            </button>
          </div>
        </CH.InnerBodyHeader>
        <CH.BoardList>
          <div>
            {props.data?.fetchQtBoards?.map((el, index) => (
              <div key={uuidv4()} className="Contents">
                <div className="ContentsLeftWrapper">
                  <div>No.{index + 1}</div>
                  <div>
                    <span>{el.commentsCount}</span> answers
                  </div>
                </div>
                <div className="ContentsRightWrapper">
                  <div
                    className="ContentsTitle"
                    onClick={props.onClickBoardDetail}
                    id={el.id}
                  >
                    {el.title}
                  </div>
                  <div className="ContentsBody">{el.contents}</div>
                  <div className="RightWrapperFooter">
                    <div className="CategoriesWrapper">
                      {el.qtTags.map((el) => (
                        <span key={uuidv4()}>{el.tagname}</span>
                      ))}
                    </div>
                    <div>
                      <span className="ContentsWriter">{el.name}</span>
                      <span className="CreatedAt">
                        {DateToString(el.createdAt)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CH.BoardList>
      </CH.BoardListWrapper>
      <Pagination
        refetch={props.refetch}
        counts={props.qtBoardCounts?.fetchAllPostCount}
      />
    </CH.Wrapper>
  )
}
