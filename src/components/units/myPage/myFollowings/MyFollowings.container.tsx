import MyFollowingsUI from './MyFollowings.presenter'
import {} from './MyFollowings.queries'

export default function MyFollowings() {
  //prettier-ignore
  const mentorList=[
    { "profileImg": "images/profile.png", "company": "회사명", "department": "부서명", "part": "업무파트", "name": "◯◯◯ 멘토" },
    { "profileImg": "images/profile.png", "company": "회사명", "department": "부서명", "part": "업무파트", "name": "◯◯◯ 멘토" },
    { "profileImg": "images/profile.png", "company": "회사명", "department": "부서명", "part": "업무파트", "name": "◯◯◯ 멘토" },
    { "profileImg": "images/profile.png", "company": "회사명", "department": "부서명", "part": "업무파트", "name": "◯◯◯ 멘토" },
    { "profileImg": "images/profile.png", "company": "회사명", "department": "부서명", "part": "업무파트", "name": "◯◯◯ 멘토" },
    { "profileImg": "images/profile.png", "company": "회사명", "department": "부서명", "part": "업무파트", "name": "◯◯◯ 멘토" },
    { "profileImg": "images/profile.png", "company": "회사명", "department": "부서명", "part": "업무파트", "name": "◯◯◯ 멘토" },
    { "profileImg": "images/profile.png", "company": "회사명", "department": "부서명", "part": "업무파트", "name": "◯◯◯ 멘토" },
    { "profileImg": "images/profile.png", "company": "회사명", "department": "부서명", "part": "업무파트", "name": "◯◯◯ 멘토" },
    { "profileImg": "images/profile.png", "company": "회사명", "department": "부서명", "part": "업무파트", "name": "◯◯◯ 멘토" },
    { "profileImg": "images/profile.png", "company": "회사명", "department": "부서명", "part": "업무파트", "name": "◯◯◯ 멘토" },
    { "profileImg": "images/profile.png", "company": "회사명", "department": "부서명", "part": "업무파트", "name": "◯◯◯ 멘토" },
    { "profileImg": "images/profile.png", "company": "회사명", "department": "부서명", "part": "업무파트", "name": "◯◯◯ 멘토" },
    { "profileImg": "images/profile.png", "company": "회사명", "department": "부서명", "part": "업무파트", "name": "◯◯◯ 멘토" },
    { "profileImg": "images/profile.png", "company": "회사명", "department": "부서명", "part": "업무파트", "name": "◯◯◯ 멘토" },
    { "profileImg": "images/profile.png", "company": "회사명", "department": "부서명", "part": "업무파트", "name": "◯◯◯ 멘토" },
    { "profileImg": "images/profile.png", "company": "회사명", "department": "부서명", "part": "업무파트", "name": "◯◯◯ 멘토" },
    { "profileImg": "images/profile.png", "company": "회사명", "department": "부서명", "part": "업무파트", "name": "◯◯◯ 멘토" },
    { "profileImg": "images/profile.png", "company": "회사명", "department": "부서명", "part": "업무파트", "name": "◯◯◯ 멘토" },
    { "profileImg": "images/profile.png", "company": "회사명", "department": "부서명", "part": "업무파트", "name": "◯◯◯ 멘토" },
  ]
  return <MyFollowingsUI mentorList={mentorList} />
}
