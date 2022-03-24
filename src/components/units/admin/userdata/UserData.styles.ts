import styled from '@emotion/styled'

export const ContentsWrapper = styled.div`
  width: 100%;
`
export const ContentsHeader = styled.div`
  height: 80px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  .NoteTitle {
    font-size: 1.875rem;
  }
`
export const UserData2 = styled.div`
  width: 100%;
  height: 130px;

  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 30px;
`
export const UserData2__Detail = styled.div`
  background-color: white;
  padding: 15px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const DataDetail__Num = styled.span`
  font-size: 25px;
`

export const UserData3 = styled.div`
  margin-top: 30px;
  padding: 15px;
  background-color: white;
`
