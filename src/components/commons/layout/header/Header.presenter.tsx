import * as CH from './Header.styles'
import Box from '@mui/material/Box'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined'
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined'
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined'
import LogoPage from '../../../../commons/libraries/Logo'
import WhiteLogoPage from '../../../../commons/libraries/WhiteLogo'
import ContactPageIcon from '@mui/icons-material/ContactPage'
import { styled } from '@mui/material/styles'
import SearchBar from '../../search/search'

const NavButton = styled(BottomNavigationAction)(`
  color: gray;
  &.Mui-selected {
    color: #FFA24B;
  }
`)

export default function LayoutHeaderUI(props) {
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
              <li onClick={props.onClickMoveToHome}>???</li>
              <li onClick={props.onClickMoveToClass}>?????????</li>
              <li onClick={props.onClickMoveToMentor}>??????</li>
              <li onClick={props.onClickMoveToBoards}>???????????????</li>
            </ul>
          </CH.MenuWrapper>

          <div style={{ display: 'flex', alignItems: 'center' }}>
            <SearchBar
              isTop={props.isTop}
              onChangeSearch={props.onChangeSearch}
              onClickSearch={props.onClickSearch}
            />
            <CH.Login
              onClick={
                props.accessToken
                  ? props.onClickLogout
                  : props.onClickMoveToLogin
              }
              isTop={props.isTop}
            >
              {props.accessToken ? 'logout' : 'login'}
            </CH.Login>
          </div>
        </div>
      </div>
    </CH.Header>
  )
}
