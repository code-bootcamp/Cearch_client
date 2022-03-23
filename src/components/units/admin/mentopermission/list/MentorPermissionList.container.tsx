import MentorPermissionListUI from './MentorPermissionList.presenter'

export default function MentorPermissionList(props) {
  return (
    <MentorPermissionListUI
      onClickMentorPermissionDetail={props.onClickMentorPermissionDetail}
    />
  )
}
