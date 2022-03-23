import ClassPermissionDetail from '../../../../src/components/units/admin/classpermission/detail/ClassPermissionDetail.container'

export default function ClassPermissionDetailPage(props) {
  return (
    <ClassPermissionDetail
      onClickClassPermissionList={props.onClickClassPermissionList}
    />
  )
}
