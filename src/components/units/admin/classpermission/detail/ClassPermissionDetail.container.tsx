import ClassPermissionDetailUI from './ClassPermissionDetail.presenter'

export default function ClassPermissionDetail(props) {
  return (
    <ClassPermissionDetailUI
      onClickClassPermissionList={props.onClickClassPermissionList}
    />
  )
}
