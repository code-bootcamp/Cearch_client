import styled from '@emotion/styled'
import { useState, useRef } from 'react'
import { useRouter } from 'next/router'
import { breakPoints } from '../../../../commons/styles/media'

import {
  Button,
  MenuButton,
  Input,
  MenuItem,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  ChakraProvider,
  extendTheme,
} from '@chakra-ui/react'
import LogoPage from '../../../../commons/libraries/Logo'

const Header = styled.header`
  width: 100%;
  box-shadow: 0px 10px 20px #eee;
  .MenuWrapper {
    display: none;
    @media ${breakPoints.tablet} {
      display: flex;
    }
  }
  > div {
    width: 1200px;
    margin: 0 auto;
    padding: 10px 0;
    @media ${breakPoints.tablet} {
      width: 90%;
      height: auto;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
    > div:nth-of-type(2) {
      height: 50px;
      margin-bottom: 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
`
const Logo = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
  font-size: 2.5rem;
  margin-bottom: 10px;
`
const MenuWrapper = styled.nav`
  @media ${breakPoints.tablet} {
    width: 90%;
    height: auto;
    display: none;
  }
  ul {
    li {
      display: inline-block;
      text-align: center;
      margin: 0 10px;
      border-radius: 20px;
      padding: 8px 20px 6px;
      cursor: pointer;

      :hover {
        background: #ffa24b;
        color: #fff;
      }

      &:first-of-type {
        margin-left: 0;
      }
      &:last-child {
        margin-right: 0;
      }
    }
  }
`
const SearchBar = styled.div`
  width: 200px;
  background: #eee;
  border-radius: 20px;
  text-align: right;
  padding: 5px 10px 5px 0px;
  margin-right: 20px;
  @media ${breakPoints.tablet} {
    width: 90%;
    height: auto;
  }

  input {
    width: 150px;
    border: 0;
    background: none;
    outline: none;
    padding-left: 10px;
  }
  button {
    border: 0;
    background: none;
    cursor: pointer;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);

    .search.icon {
      color: #000;
      width: 12px;
      height: 12px;
      border: solid 2px currentColor;
      border-radius: 100%;
      margin-right: 5px;
      margin-bottom: 3px;
    }

    .search.icon:before {
      content: '';
      position: absolute;
      top: 12px;
      left: 5px;
      height: 6px;
      width: 2px;
      background-color: currentColor;
    }
  }
`
const Login = styled.div`
  padding: 7px 18px 5px;
  background: #ffa24b;
  border-radius: 18px;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  @media ${breakPoints.tablet} {
    display: none;
  }
`

const components = {
  Drawer: {
    variants: {
      alwaysOpen: {
        parts: ['dialog, dialogContainer'],
        dialog: {
          pointerEvents: 'auto',
        },
        dialogContainer: {
          pointerEvents: 'none',
        },
      },
    },
  },
}
const theme = extendTheme({
  components,
})

export default function LayoutHeader() {
  const router = useRouter()

  const [menuOpen, setMenuOpen] = useState(false)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()

  const onClickMoveToHome = () => {
    router.push('/')
  }
  const onClickMoveToClass = () => {
    router.push('/class')
  }
  const onClickMoveToMentor = () => {
    router.push('/mentor')
  }
  const onClickMoveToBoards = () => {
    router.push('/boards')
  }
  const onClickMoveToLogin = () => {
    router.push('/login/login')
  }

  return (
    <Header>
      <div>
        <Logo>
          <LogoPage />
        </Logo>
        <div>
          <MenuWrapper>
            <ul>
              <li onClick={onClickMoveToHome}>???</li>
              <li onClick={onClickMoveToClass}>?????????</li>
              <li onClick={onClickMoveToMentor}>??????</li>
              <li onClick={onClickMoveToBoards}>???????????????</li>
            </ul>
          </MenuWrapper>

          <div style={{ display: 'flex', alignItems: 'center' }}>
            <SearchBar>
              <input type="text" />
              <button>
                <div className="search icon"></div>
              </button>
            </SearchBar>
            <Login onClick={onClickMoveToLogin}>?????????</Login>
          </div>
          <div className="MenuWrapper">
            <ChakraProvider theme={theme}>
              <Button ref={btnRef} bg="#FFA24B" color="white" onClick={onOpen}>
                Open
              </Button>
              <Drawer
                variant="alwaysOpen"
                // {...rest}
                isOpen={isOpen}
                placement="right"
                onClose={onClose}
                trapFocus={false}
                closeOnOverlayClick={false}
                blockScrollOnMount={false}
              >
                <DrawerOverlay />
                <DrawerContent>
                  <DrawerCloseButton />
                  <DrawerHeader>Create your account</DrawerHeader>

                  <DrawerBody>
                    <Input placeholder="Type here..." />
                  </DrawerBody>

                  <DrawerFooter>
                    <Button variant="outline" mr={3} onClick={onClose}>
                      Cancel
                    </Button>
                    <Button colorScheme="blue">Save</Button>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
            </ChakraProvider>
          </div>
        </div>
      </div>
    </Header>
  )
}
