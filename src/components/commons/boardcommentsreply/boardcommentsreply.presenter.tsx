import * as CH from './boardcommentsreply.styles'
import { v4 as uuidv4 } from 'uuid'
import { DateToString } from '../../../commons/libraries/utils/utils'

export default function BoardCommentsReplyUI(props) {
  return (
    <CH.Wrapper>
      {props.data?.fetchReComments.length > 0 && (
        <>
          <div>ㄴ</div>
          <div className="reCommentWrapper">
            {props.data?.fetchReComments.map((el) => (
              <div key={uuidv4()}>
                <div className="reCommentTitle">
                  <div className="commentWriter">{el.user.name}</div>
                  <div className="commentCreated">
                    {DateToString(el.createdAt)}
                  </div>
                </div>
                <div className="reCommentContents">{el.contents}</div>
              </div>
            ))}
          </div>
        </>
      )}

      <div>ㄴ</div>
      <div className="reCommentWrapper">
        <div className="reCommentInputs">
          <input
            onChange={props.onChangeReComment}
            placeholder="내용을 입력하세요"
          />
          <button onClick={props.submitReComment} className="submitButton">
            등록
          </button>
        </div>
      </div>
    </CH.Wrapper>
  )
}
