import styled from '@emotion/styled'

export const Wrapper = styled.div`
  width: 957px;
  display: flex;
  flex-direction: column;
`
export const HeadTitle = styled.div`
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
`

export const TabMenu = styled.div`
  margin-top: 48px;
  margin-bottom: 25px;
  display: flex;
  flex-direction: row;
  .focused {
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
  }

  .submenu {
    cursor: pointer;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    color: #bdbdbd;
  }
`
export const Menu = styled.div`
  margin-right: 70px;
`
export const Contents = styled.div`
  width: 100%;
  border-top: 2px solid black;
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const CreateButton = styled.div`
  width: 151px;
  height: 36px;
  color: #ffffff;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  background-color: #1e2744;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  :hover {
    cursor: pointer;
  }
`
