import styled from '@emotion/styled'

export const Back = styled.div`
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  background-color: #f1f1f1;
`
export const Header = styled.div`
  background-color: white;

  > div {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    .LogoutBtn {
      width: 100px;
      height: 34px;
      cursor: pointer;
      background-color: #1e2744;
      color: white;
      border: none;
    }
  }
`
export const Wrapper = styled.div`
  width: 1200px;
  margin: 0 auto;
  background-color: #f1f1f1;
  padding-top: 20px;
  padding-bottom: 20px;

  display: grid;
  grid-template-columns: 2fr 8fr;
`

export const MenuWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
`
export const SideMenu = styled.button`
  width: 80%;
  height: 50px;
  color: black;
  font-weight: lighter;
  background-color: #f1f1f1;
  border: none;
  text-align: left;
  cursor: pointer;
  :focus {
    font-weight: bold;
  }
`
export const ContentsWrapper = styled.div`
  width: 100%;
`
