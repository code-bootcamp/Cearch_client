import styled from '@emotion/styled'

export const ClassWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const ClassContents = styled.div`
  padding: 60px 13px 60px 8px;
  height: 240px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #c4c4c4;
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
export const ClassContentsLeft = styled.div`
  display: flex;
`
export const ClassImage = styled.div`
  width: 180px;
  height: 120px;
  background: #f1f1f1;
`
export const ClassContentsList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px 0px 5px 40px;
`

export const ClassContentsListTop = styled.div`
  display: flex;
  flex-direction: column;
`

export const ClassCategory = styled.div`
  font-weight: 400;
  font-size: 16px;
  margin-bottom: 13px;
`

export const ClassTitle = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
`

export const ClassDate = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 10px;
`

export const ClassContentsRight = styled.div`
  font-weight: 700;
  font-size: 18px;
`

export const ClassPayButton = styled.button`
  border-radius: 31px;
  width: 109px;
  height: 36px;
  background-color: #1e2744;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #f2f2f2;
  border: 0px none;
  :hover {
    cursor: pointer;
  }
`
