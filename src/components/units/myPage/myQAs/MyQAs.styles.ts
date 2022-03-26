import styled from '@emotion/styled'

export const Wrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  position: relative;
`

export const Head = styled.div`
  width: 927px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const HeadTitle = styled.div`
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
`
export const HeadMenu = styled.div`
  width: 177px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .focused {
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
  }

  .submenu {
    cursor: pointer;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: #bdbdbd;
  }
`
export const Menu = styled.div`
  width: 30px;
`

export const Table = styled.div`
  width: 956px;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  margin-bottom: 87px;
  animation: fadein 1s ease-in-out;
  @keyframes fadein {
    0% {
      opacity: 0;
      transform: translateY(10px);
    }
    100% {
      opacity: 1;
      transform: none;
    }
  }
`

export const TableDivision = styled.div`
  width: 16%;
  text-align: center;
`

export const TableTitle = styled.div`
  width: 60%;
  text-align: center;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`

export const TableDate = styled.div`
  width: 24%;
  text-align: center;
`

export const TableHead = styled.div`
  display: flex;
  flex-direction: row;
  height: 62px;
  background-color: #f2f2f2;
  font-weight: 400;
  font-size: 16px;
  align-items: center;
`

export const TableRow = styled.div`
  display: flex;
  flex-direction: row;
  height: 62px;
  font-weight: 400;
  font-size: 16px;
  align-items: center;
  border-bottom: 1px solid #c4c4c4;
  :hover {
    cursor: pointer;
    font-weight: 600;
  }
`
