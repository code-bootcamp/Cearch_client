import ChakraModalForComment from '../../../commons/libraries/chakramodal/ChakraModalForComment'
import MobileCommentsMenuButton from '../../../commons/libraries/mobilecomments/MobileComments'
import * as CH from './BoardComments.styles'
import { v4 as uuidv4 } from 'uuid'
import { DateToString } from '../../../commons/libraries/utils/utils'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import Pagination from '../pagination/pagination'
import BoardCommentsReply from '../boardcommentsreply/boardcommentsreply.container'

export default function BoardCommentsUI(props) {
  return (
    <CH.CommentsWrapper>
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
        {props.commentsData?.fetchComments
          .filter((el) => el.isPick)
          .map((el) => (
            <div
              className="comment"
              key={uuidv4()}
              id={el.id}
              style={
                el.isPick
                  ? { backgroundColor: '#eefadc' }
                  : { backgroundColor: 'white' }
              }
            >
              <div className="CommentHeader">
                <div className="WrapperOne">
                  {el.isPick ? (
                    <CheckCircleOutlineIcon
                      id={el.id}
                      onClick={props.selectComment}
                    />
                  ) : (
                    <input
                      type="checkbox"
                      className="checkbox"
                      id={el.id}
                      onClick={props.selectComment}
                    />
                  )}
                  <div className="ImgWrapper">
                    <img src="/images/profileDefault.png" />
                  </div>
                  <div className="commentWriter">{el.user.name}</div>
                </div>
                <div className="buttonWrapper">
                  <ChakraModalForComment
                    className="commentButton"
                    id={el.id}
                    name="reply"
                    replyComment={props.replyComment}
                  />
                  <ChakraModalForComment
                    className="commentButton"
                    id={el.id}
                    isEdit={true}
                    setContents={props.setContents}
                    onChangeCommentContents={props.onChangeCommentContents}
                    onChangeEditComments={props.onChangeEditComments}
                    updateComment={props.updateComment}
                  />
                  <ChakraModalForComment
                    id={el.id}
                    className="commentButton"
                    deleteComment={props.deleteComment}
                  />
                </div>
              </div>

              <div className="CommentContents">{el.contents}</div>
              <div>{DateToString(el.createdAt)}</div>

              <CH.ReplyComment commentEdit={props.commentEdit}>
                <textarea placeholder="내용을 작성하세요" />
                <button>등록</button>
              </CH.ReplyComment>
            </div>
          ))}
        {props.commentsData?.fetchComments
          .filter((el) => !el.isPick)
          .map((el) => (
            <div
              className="comment"
              key={uuidv4()}
              id={el.id}
              style={
                el.isPick
                  ? { backgroundColor: '#eefadc' }
                  : { backgroundColor: 'white' }
              }
            >
              <div className="CommentHeader">
                <div className="WrapperOne">
                  {el.isPick ? (
                    <CheckCircleOutlineIcon
                      id={el.id}
                      onClick={props.selectComment}
                    />
                  ) : (
                    <input
                      type="checkbox"
                      className="checkbox"
                      id={el.id}
                      onClick={props.selectComment}
                    />
                  )}
                  <div className="ImgWrapper">
                    <img src="/images/profileDefault.png" />
                  </div>
                  <div className="commentWriter">{el.user.name}</div>
                </div>
                <div className="buttonWrapper">
                  <ChakraModalForComment
                    className="commentButton"
                    id={el.id}
                    name="reply"
                    replyComment={props.replyComment}
                  />
                  <ChakraModalForComment
                    className="commentButton"
                    id={el.id}
                    isEdit={true}
                    setContents={props.setContents}
                    onChangeCommentContents={props.onChangeCommentContents}
                    onChangeEditComments={props.onChangeEditComments}
                    updateComment={props.updateComment}
                  />
                  <ChakraModalForComment
                    id={el.id}
                    className="commentButton"
                    deleteComment={props.deleteComment}
                  />
                </div>
              </div>

              <div className="CommentContents">{el.contents}</div>
              <div>{DateToString(el.createdAt)}</div>

              {/* <CH.ReplyComment commentEdit={props.commentEdit}>
                <textarea placeholder="내용을 작성하세요" />
                <button>등록</button>
              </CH.ReplyComment> */}
              <BoardCommentsReply id={el.id} />
            </div>
          ))}
      </div>
      <Pagination refetch={props.refetch} counts={props.commentsCount} />
    </CH.CommentsWrapper>
  )
}
