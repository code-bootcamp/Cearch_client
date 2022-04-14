import { MouseEvent, useState } from 'react'
import ClassPermissionList from '../classpermission/list/ClassPermissionList.container'
import MentorPermissionList from '../mentopermission/list/MentorPermissionList.container'
import NoteList from '../note/list/NoteList.container'
import UserData from '../userdata/UserData.container'
import * as CH from './AdminMain.styles'
import { useRouter } from 'next/router'
import NoteWrite from '../note/write/NoteWrite.container'
import NoteDetailPage from '../../../../../pages/admin/note/[detail]'
import MentorPermissionDetailPage from '../../../../../pages/admin/mentorpermission/[detail]'
import ClassPermissionDetailPage from '../../../../../pages/admin/classpermission/[detail]'
import LogoPage from '../../../../commons/libraries/Logo'

export default function AdminMain(props) {
  const router = useRouter()
  // console.log(router.asPath)
  const [userData, setUserData] = useState(true)
  const [noteList, setNoteList] = useState(false)
  const [mentorPermissionList, setMentorPermissionList] = useState(false)
  const [classPermissionList, setClassPermissionList] = useState(false)
  const [noteWrite, setNoteWrite] = useState(false)
  const [noteDetail, setNoteDetail] = useState(false)
  const [mentorPermissionDetail, setMentorPermissionDetail] = useState(false)
  const [classPermissionDetail, setClassPermissionDetail] = useState(false)

  const [currentPage, setCurrentPage] = useState<String>('')
  //state를 문자열로

  const onClickUserData = () => {
    setUserData(true)
    setNoteList(false)
    setMentorPermissionList(false)
    setClassPermissionList(false)
    setNoteWrite(false)
    setNoteDetail(false)
    setMentorPermissionDetail(false)
    setClassPermissionDetail(false)
  }

  const onClickNoteList = () => {
    setUserData(false)
    setNoteList(true)
    setMentorPermissionList(false)
    setClassPermissionList(false)
    setNoteWrite(false)
    setNoteDetail(false)
    setMentorPermissionDetail(false)
    setClassPermissionDetail(false)
  }
  const onClickMentorPermissionList = () => {
    setUserData(false)
    setNoteList(false)
    setMentorPermissionList(true)
    setClassPermissionList(false)
    setNoteWrite(false)
    setNoteDetail(false)
    setMentorPermissionDetail(false)
    setClassPermissionDetail(false)
  }
  const onClickClassPermissionList = () => {
    setUserData(false)
    setNoteList(false)
    setMentorPermissionList(false)
    setClassPermissionList(true)
    setNoteWrite(false)
    setNoteDetail(false)
    setMentorPermissionDetail(false)
    setClassPermissionDetail(false)
  }
  const onClickNoteWrite = () => {
    setUserData(false)
    setNoteList(false)
    setMentorPermissionList(false)
    setClassPermissionList(false)
    setNoteWrite(true)
    setNoteDetail(false)
    setMentorPermissionDetail(false)
    setClassPermissionDetail(false)
  }

  const onClickNoteDetail = () => {
    setUserData(false)
    setNoteList(false)
    setMentorPermissionList(false)
    setClassPermissionList(false)
    setNoteWrite(false)
    setNoteDetail(true)
    setMentorPermissionDetail(false)
    setClassPermissionDetail(false)
  }
  const onClickMentorPermissionDetail = () => {
    setUserData(false)
    setNoteList(false)
    setMentorPermissionList(false)
    setClassPermissionList(false)
    setNoteWrite(false)
    setNoteDetail(false)
    setMentorPermissionDetail(true)
    setClassPermissionDetail(false)
  }
  const onClickClassPermissionDetail = () => {
    setUserData(false)
    setNoteList(false)
    setMentorPermissionList(false)
    setClassPermissionList(false)
    setNoteWrite(false)
    setNoteDetail(false)
    setMentorPermissionDetail(false)
    setClassPermissionDetail(true)
  }
  // const onClickShowCurrentPage = (e: MouseEvent<HTMLButtonElement>) => {
  //   setCurrentPage(e.target.router.asPath)
  // }

  return (
    <>
      <CH.Back>
        <CH.Header>
          <div>
            <div>
              <LogoPage />
            </div>
            <button className="LogoutBtn">로그아웃</button>
          </div>
        </CH.Header>
        <CH.Wrapper>
          <CH.MenuWrapper>
            <CH.SideMenu onClick={onClickUserData}>
              유저 데이터 통계
            </CH.SideMenu>
            <CH.SideMenu onClick={onClickNoteList}>공지사항 작성</CH.SideMenu>
            <CH.SideMenu onClick={onClickMentorPermissionList}>
              멘토 승인
            </CH.SideMenu>
            <CH.SideMenu onClick={onClickClassPermissionList}>
              멘토 클래스 리스트
            </CH.SideMenu>
          </CH.MenuWrapper>
          <CH.ContentsWrapper>
            {userData && <UserData />}
            {noteList && (
              <NoteList
                onClickNoteWrite={onClickNoteWrite}
                onClickNoteDetail={onClickNoteDetail}
              />
            )}
            {mentorPermissionList && (
              <MentorPermissionList
                onClickMentorPermissionDetail={onClickMentorPermissionDetail}
              />
            )}
            {classPermissionList && (
              <ClassPermissionList
                onClickClassPermissionDetail={onClickClassPermissionDetail}
              />
            )}
            {noteWrite && <NoteWrite onClickNoteList={onClickNoteList} />}
            {noteDetail && <NoteDetailPage onClickNoteList={onClickNoteList} />}
            {mentorPermissionDetail && (
              <MentorPermissionDetailPage
                onClickMentorPermissionList={onClickMentorPermissionList}
              />
            )}
            {classPermissionDetail && (
              <ClassPermissionDetailPage
                onClickClassPermissionList={onClickClassPermissionList}
              />
            )}
          </CH.ContentsWrapper>
        </CH.Wrapper>
      </CH.Back>
    </>
  )
}
