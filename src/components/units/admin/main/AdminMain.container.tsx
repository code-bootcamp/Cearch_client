import { useState } from 'react'
import ClassPermissionList from '../classpermission/list/ClassPermissionList.container'
import MentorPermissionList from '../mentopermission/list/MentorPermissionList.container'
import NoteList from '../note/list/NoteList.container'
import UserData from '../userdata/UserData.container'

import * as CH from './AdminMain.styles'


export default function AdminMain() {
  const [userData, setUserData]=useState(true)
  const [noteList, setNoteList]=useState(false)
  const [mentorPermissionList,setMentorPermissionList]=useState(false)
  const [classPermissionList, setClassPermissionList]=useState(false)

  const onClickUserData=()=>{
    setUserData(true)
    setNoteList(false)
    setMentorPermissionList(false)
    setClassPermissionList(false)
  }

  const onClickNoteList=()=>{
    setUserData(false)
    setNoteList(true)
    setMentorPermissionList(false)
    setClassPermissionList(false)
  }
  const onClickMentorPermissionList=()=>{
    setUserData(false)
    setNoteList(false)
    setMentorPermissionList(true)
    setClassPermissionList(false)
  }
  const onClickClassPermissionList=()=>{
    setUserData(false)
    setNoteList(false)
    setMentorPermissionList(false)
    setClassPermissionList(true)
  }
  return (
    <CH.Wrapper> 
            <CH.MenuWrapper>
                <CH.SideMenu onClick={onClickUserData} >유저 데이터 통계</CH.SideMenu>
                <CH.SideMenu onClick={onClickNoteList}>공지사항 작성</CH.SideMenu>
                <CH.SideMenu onClick={onClickMentorPermissionList}>멘토 승인</CH.SideMenu>
                <CH.SideMenu onClick={onClickClassPermissionList}>멘토 클래스 리스트</CH.SideMenu>
            </CH.MenuWrapper>
            <CH.ContentsWrapper>
                {userData && <UserData />}
                {noteList && <NoteList />}
                {mentorPermissionList &&<MentorPermissionList/>}
                {classPermissionList && <ClassPermissionList />}
            </CH.ContentsWrapper>
        </CH.Wrapper>
  )
}
