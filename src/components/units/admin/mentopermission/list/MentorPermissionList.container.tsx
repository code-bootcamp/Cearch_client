import { useQuery } from '@apollo/client'
import { IQuery } from '../../../../../commons/types/generated/types'
import MentorPermissionListUI from './MentorPermissionList.presenter'
import { FETCH_AUTHOR_MENTOR } from './MentorPermissionList.queries'

export default function MentorPermissionList(props) {
  const { data } =
    useQuery<Pick<IQuery, 'fetchAuthorMentor'>>(FETCH_AUTHOR_MENTOR)
  return (
    <MentorPermissionListUI
      onClickMentorPermissionDetail={props.onClickMentorPermissionDetail}
    />
  )
}
