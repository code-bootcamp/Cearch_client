import { useMutation } from '@apollo/client'
import {
  IMutation,
  IMutationAuthMentorArgs,
} from '../../../../../commons/types/generated/types'
import MentorPermissionDetailUI from './MentorPermissionDetail.presenter'
import { AUTH_MENTOR } from './MentorPermissionDetail.queries'

export default function MentorPermissionDetail(props) {
  const [authMentor] = useMutation<
    Pick<IMutation, 'authMentor'>,
    IMutationAuthMentorArgs
  >(AUTH_MENTOR)

  const permitMentor = async () => {
    try {
      const result = await authMentor({
        variables: {
          mentoId: '123',
          userId: '123',
        },
      })
      alert('댓글 작성을 완료했습니다.')
    } catch (error) {
      alert(`${error.message}`)
    }
  }
  return (
    <MentorPermissionDetailUI
      onClickMentorPermissionList={props.onClickMentorPermissionList}
    />
  )
}
