import styled from '@emotion/styled'
import { useRouter } from 'next/router'

const Header = styled.header`
  width: 100%;
  box-shadow: 0px 30px 20px #eee;

  > div {
    width: 1200px;
    margin: 0 auto;
    padding: 10px 0;


    > div:nth-of-type(2) {

      height: 80px;
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
const Menu = styled.nav`
  ul {
    li {
      display: inline-block;
      text-align: center;
      margin: 0 10px;
      border-radius: 20px;
      padding: 8px 20px 5px;
      :hover {
        background: #eee;
      }
      a {
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
  input {
    width: 150px;
    border: 0;
    background: none;
    outline: none;
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
  background: #1e2744;
  border-radius: 18px;
  color: #fff;
  font-size: 1rem;
`


export default function LayoutHeader() {
  const router = useRouter()

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
        <Logo>LOGO</Logo>

        <div>
          <Menu>
            <ul>
              <li onClick={onClickMoveToHome}>홈</li>
              <li onClick={onClickMoveToClass}>클래스</li>
              <li onClick={onClickMoveToMentor}>멘토</li>
              <li onClick={onClickMoveToBoards}>질문게시판</li>
            </ul>
          </Menu>

          <div style={{ display: 'flex', alignItems: 'center' }}>
            <SearchBar>
              <input type="text" />
              <button>
                <div className="search icon"></div>
              </button>
            </SearchBar>

            <Login onClick={onClickMoveToLogin}>로그인</Login>
          </div>
        </div>
      </div>
    </Header>
  )
}

