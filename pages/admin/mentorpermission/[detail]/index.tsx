import MentorPermissionDetail from '../../../../src/components/units/admin/mentopermission/detail/MentorPermissionDetail.container'

export default function MentorPermissionDetailPage(props) {
  return (
    <MentorPermissionDetail
      onClickMentorPermissionList={props.onClickMentorPermissionList}
    />
  )
}
