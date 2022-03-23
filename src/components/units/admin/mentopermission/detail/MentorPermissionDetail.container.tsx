import MentorPermissionDetailUI from './MentorPermissionDetail.presenter'

export default function MentorPermissionDetail(props) {
  return (
    <MentorPermissionDetailUI
      onClickMentorPermissionList={props.onClickMentorPermissionList}
    />
  )
}
