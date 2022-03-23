import ClassPermissionListUI from './ClassPermissionList.presenter'

export default function ClassPermissionList(props) {
  return (
    <ClassPermissionListUI
      onClickClassPermissionDetail={props.onClickClassPermissionDetail}
    />
  )
}
