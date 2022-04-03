import * as CH from './Header.styles'
import MuiBottomNavigationAction from '@mui/material/BottomNavigationAction'
import Box from '@mui/material/Box'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined'
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined'
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import SearchIcon from '@mui/icons-material/Search'
import LogoPage from '../../../../commons/libraries/Logo'
import WhiteLogoPage from '../../../../commons/libraries/WhiteLogo'
import ContactPageIcon from '@mui/icons-material/ContactPage'
import { useRouter } from 'next/router'
import { useState, useEffect, useRef } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'

import { styled } from '@mui/material/styles'

const NavButton = styled(BottomNavigationAction)(`
  color: gray;
  /* &.Mui-selected {
    color: ${(props: { isSelected: boolean }) => props.isSelected && '#FFA24B'};
  } */
  &.Mui-selected {
    color: #FFA24B;
  }
`)

export default function LayoutHeaderUI(props) {
  // const [selected, setSelected] = useState(false)
  // const router = useRouter()
  // const currentPage = router.asPath
  // useEffect(() => {
  //   const A = () => {
  //     if (currentPage === localStorage.getItem('class')) setSelected(true)
  //     else setSelected(false)
  //   }
  //   A()
  // }, [selected])
  // console.log(selected)
  return (
    <CH.Header isTop={props.isTop}>
      <div>
        <CH.Logo>
          <LogoPage isTop={props.isTop} />
          {!props.isTop && <WhiteLogoPage />}
        </CH.Logo>
        <div>
          <CH.MenuWrapper>
            <Box className="NavBox">
              <BottomNavigation
                showLabels
                value={props.value}
                onChange={(event, newValue) => {
                  props.setValue(newValue)
                }}
                sx={{
                  bgcolor: 'white',
                  borderTop: '3px solid #FFA24B',
                  paddingRight: '10px',
                }}
              >
                <NavButton
                  label="Home"
                  icon={<HomeOutlinedIcon />}
                  onClick={props.onClickMoveToHome}
                />
                <NavButton
                  label="Class"
                  icon={<SchoolOutlinedIcon />}
                  onClick={props.onClickMoveToClass}
                />
                <NavButton
                  label="Mentor"
                  icon={<GroupsOutlinedIcon />}
                  onClick={props.onClickMoveToMentor}
                />
                <NavButton
                  label="Question"
                  icon={<LightbulbOutlinedIcon />}
                  onClick={props.onClickMoveToBoards}
                />
                <NavButton
                  label="myPage"
                  icon={<ContactPageIcon />}
                  onClick={props.onClickMoveToMyPage}
                />
              </BottomNavigation>
            </Box>
            <ul>
              <li onClick={props.onClickMoveToHome}>홈</li>
              <li onClick={props.onClickMoveToClass}>클래스</li>
              <li onClick={props.onClickMoveToMentor}>멘토</li>
              <li onClick={props.onClickMoveToBoards}>질문게시판</li>
            </ul>
          </CH.MenuWrapper>

          <div style={{ display: 'flex', alignItems: 'center' }}>
            <CH.SearchBar isTop={props.isTop}>
              <input type="text" />
              <button>
                <div className="search icon"></div>
              </button>
            </CH.SearchBar>
            <Button onClick={props.handleOpen} className="ModalButton">
              {props.isTop ? (
                <SearchIcon fontSize="medium" sx={{ color: '#FFA24B' }} />
              ) : (
                <SearchIcon fontSize="medium" sx={{ color: 'white' }} />
              )}
            </Button>
            <Modal
              open={props.modalOpen}
              onClose={props.handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <CH.ModalStyle>
                <Typography
                  id="modal-modal-title"
                  variant="h6"
                  component="h2"
                  sx={{ pl: 1 }}
                >
                  Search
                </Typography>
                <Typography
                  id="modal-modal-description"
                  sx={{ mt: 2 }}
                  className="ModalInputWrapper"
                >
                  <input
                    type="text"
                    placeholder="검색어를 입력하세요"
                    className="InputTag"
                  />
                  <button type="button" className="SearchInModal">
                    <SearchIcon sx={{ fontSize: 35 }} />
                  </button>
                </Typography>
              </CH.ModalStyle>
            </Modal>
            <CH.Login
              onClick={
                props.accessToken
                  ? props.onClickLogout
                  : props.onClickMoveToLogin
              }
              isTop={props.isTop}
            >
              {props.accessToken ? '로그아웃' : '로그인'}
            </CH.Login>
          </div>
        </div>
      </div>
    </CH.Header>
  )
}
