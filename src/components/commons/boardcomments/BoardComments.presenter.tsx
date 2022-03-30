import ChakraModalForComment from '../../../commons/libraries/chakramodal/ChakraModalForComment'
import * as CH from './BoardComments.styles'

export default function BoardCommentsUI(props) {
  return (
    <CH.CommentsWrapper>
      <div className="writerDetail">go_rAnii</div>
      <div className="commentsWrite">
        <div>
          <img src="/images/profileDefault.png" />
        </div>
        <input
          type="text"
          placeholder="내용을 입력하세요"
          className="commentContentsInput"
          onChange={props.onChangeCommentContents}
        />
        <button className="commentSubmit" onClick={props.submitComment}>
          등록
        </button>
      </div>

      <div className="commentsList">
        <div className="comment">
          <div className="CommentHeader">
            <div className="WrapperOne">
              <input type="checkbox" className="checkbox" />
              <div className="ImgWrapper">
                <img src="/images/profileDefault.png" />
              </div>
              <div className="commentWriter">chanpoong01</div>
            </div>
            <div className="buttonWrapper">
              <ChakraModalForComment
                className="commentButton"
                id="reply"
                editComment={props.editComment}
              />
              <ChakraModalForComment
                className="commentButton"
                isEdit={true}
                updateComment={props.updateComment}
              />
              <ChakraModalForComment
                className="commentButton"
                deleteComment={props.deleteComment}
              />
            </div>
          </div>

          <div className="CommentContents">
            댓글 본문 입니다.댓글 본문 입니다.댓글 본문 입니다.댓글 본문
            입니다.댓글 본문 입니다.
          </div>

          <div>2022.03.15</div>
          <CH.ReplyComment commentEdit={props.commentEdit}>
            <textarea placeholder="내용을 작성하세요" />
            <button>등록</button>
          </CH.ReplyComment>
        </div>

        <div className="comment">
          <div className="CommentHeader">
            <div className="WrapperOne">
              <input type="checkbox" className="checkbox" />
              <div className="ImgWrapper">
                <img src="/images/profileDefault.png" />
              </div>
              <div className="commentWriter">chanpoong01</div>
            </div>
            <div className="buttonWrapper">
              <button className="commentButton"></button>
              <button className="commentButton"></button>
              <button className="commentButton"></button>
            </div>
          </div>

          <div className="CommentContents">
            댓글 본문 입니다.댓글 본문 입니다.댓글 본문 입니다.댓글 본문
            입니다.댓글 본문 입니다.
          </div>

          <div>2022.03.15</div>
        </div>

        <div className="comment">
          <div className="CommentHeader">
            <div className="WrapperOne">
              <input type="checkbox" className="checkbox" />
              <div className="ImgWrapper">
                <img src="/images/profileDefault.png" />
              </div>
              <div className="commentWriter">chanpoong01</div>
            </div>
            <div className="buttonWrapper">
              <button className="commentButton"></button>
              <button className="commentButton"></button>
              <button className="commentButton"></button>
            </div>
          </div>

          <div className="CommentContents">
            댓글 본문 입니다.댓글 본문 입니다.댓글 본문 입니다.댓글 본문
            입니다.댓글 본문 입니다.
          </div>

          <div>2022.03.15</div>
          <CH.ReplyComment commentEdit={props.commentEdit}>
            <textarea placeholder="내용을 작성하세요" />
            <button>등록</button>
          </CH.ReplyComment>
        </div>
      </div>
    </CH.CommentsWrapper>
  )
}
