import { useMutation } from '@apollo/client'
import {
  IMutation,
  IMutationFollowToggleArgs,
} from '../../../../commons/types/generated/types'
import MentorDetailUI from './MentorDetail.presenter'
import { FOLLOW_TOGGLE } from './MentorDetail.queries'

export default function MentorDetail() {
  const [followToggle] = useMutation<
    Pick<IMutation, 'followToggle'>,
    IMutationFollowToggleArgs
  >(FOLLOW_TOGGLE)

  const onClickFollowMentor = async () => {
    try {
      const result = await followToggle({
        variables: {
          mentoId: '123',
        },
      })
      alert('멘토 팔로우!')
    } catch (error) {
      alert(`${error.message}`)
    }
  }
  return <MentorDetailUI onClickFollowMentor={onClickFollowMentor} />
}
