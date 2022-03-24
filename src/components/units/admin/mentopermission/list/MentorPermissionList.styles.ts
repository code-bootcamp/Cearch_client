import styled from '@emotion/styled'

export const Wrapper = styled.div`
  width: 100%;
`
export const MentorPermission__Header = styled.div`
  height: 80px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  .NoteTitle {
    font-size: 1.875rem;
  }
`

export const MentorPermission__Body = styled.div`
  width: 100%;
`

export const Body__Header = styled.div`
  background-color: #1e2744;
  color: white;
  padding: 10px;
  display: grid;
  grid-template-columns: 1fr 3fr 6fr 1.5fr;
  grid-column-gap: 30px;

  text-align: center;
`

export const Body__Body = styled.div`
  width: 100%;
  margin-bottom: 20px;
`

export const ListWrapper = styled.div`
  width: 100%;
  /* white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden; */
  padding: 15px 10px;

  position: relative;
  display: grid;
  grid-template-columns: 1fr 3fr 6fr 2fr;
  grid-column-gap: 30px;

  text-align: center;
  cursor: pointer;
  :hover {
    color: white;
    background-color: #1e2744;
  }
`
export const MentorName = styled.div`
  width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`
export const MentorCategory = styled.div`
  width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`
export const MentorCreatedAt = styled.div`
  width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`

export const MentorPermission__Footer = styled.div`
  text-align: center;

  font-size: larger;
`
