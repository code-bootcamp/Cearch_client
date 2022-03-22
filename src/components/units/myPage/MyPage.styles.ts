import styled from '@emotion/styled'
export const Wrapper = styled.div`
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const HeadWrapper = styled.div`
  width: 1200px;
  height: 218px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const HeadLeft = styled.div`
  width: 134px;
  height: 218px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export const Avatar = styled.div`
  width: 134px;
  height: 134px;
  border-radius: 70%;
  overflow: hidden;
`

export const Name = styled.div`
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
`

export const HeadRight = styled.div`
  width: 957px;
  background-color: #1e2744;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 55px 60px 55px 60px;
`

export const HeadRightSection = styled.div`
  width: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const HeadRightSectionLabel = styled.div`
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 10px;
  text-transform: uppercase;
  color: #bdbdbd;
`

export const HeadRightSectionContents1 = styled.div`
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 10px;
  color: #f2f2f2;
`

export const HeadRightSectionContents2 = styled.div`
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 10px;
  color: #f2f2f2;
`

export const BodyWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 1200px;
  margin-top: 107px;
`

export const TabMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .focused {
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
  }

  .submenu {
    cursor: pointer;
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
  }
`
export const Menu = styled.div`
  width: 150px;
  margin-bottom: 48px;
`
export const Contents = styled.div`
  width: 957px;
`
