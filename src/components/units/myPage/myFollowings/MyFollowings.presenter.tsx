import {} from './MyFollowings.types'
import * as CH from './MyFollwings.styles'
import Tooltip from '@mui/material/Tooltip'
import { useRouter } from 'next/router'
export default function MyFollowingsUI(props) {
  const router = useRouter()

  const onClickMoveToMentorDetail = (event) => {
    console.log(event.currentTarget.id)
    // router.push(`/mentor/detail/${event.currentTarget.id}`)
  }
  return (
    <div>
      <CH.HeadTitle>팔로우한 멘토</CH.HeadTitle>
      {props.mentorList?.fetchMyFollower[0] || (
        <div>아직 팔로우한 멘토가 없습니다.</div>
      )}
      <CH.Mentor>
        {props.mentorList?.fetchMyFollower.map((el) => (
          <div key={el.id}>
            <div className="mentorCardFront">
              <div className="profileImg">
                <div>
                  <img src="/images/profile.png" />
                </div>
              </div>
              <CH.MentorInfo>
                <div className="workPart">
                  <div>
                    <p>{el.followee.companyName}</p>
                    <p>{el.followee.department}</p>
                  </div>
                  <div>
                    {el.work?.slice(0, 2).map((categoryEl) => (
                      <span key={el.id}>
                        {categoryEl.category.categoryname}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="blank"></div>
                <div className="mentorName">
                  <p>{el.followee.user.name}</p>
                </div>
              </CH.MentorInfo>
            </div>
            <div
              className="mentorCardBack"
              id={el.id}
              onClick={props.onClickMoveToMentorDetail}
            >
              <div className="badge">
                <Tooltip title="30분이내 답변" placement="top">
                  <img src="/images/medal1.png" />
                </Tooltip>
                <Tooltip title="답변률 90%" placement="top">
                  <img src="/images/medal2.png" />
                </Tooltip>
              </div>
              <div>{el.followee.selfIntro}</div>
            </div>
          </div>
        ))}
      </CH.Mentor>
    </div>
  )
}
