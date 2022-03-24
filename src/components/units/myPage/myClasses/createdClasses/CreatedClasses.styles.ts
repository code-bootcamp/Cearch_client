import styled from '@emotion/styled'

export const Wrapper = styled.div`
  margin-top: 60px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
`

export const ClassTitle = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
`

export const Select = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: row;
`

export const UpdateButton = styled.button`
  width: 150px;
  border: 0px none;
  background-color: #1e2744;
  color: #f2f2f2;
  border-radius: 5px;
`

export const ClassInformation = styled.div`
  padding: 50px 0px 50px 0px;
`

export const Table = styled.div`
  width: 956px;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  margin-bottom: 87px;
  font-size: 16px;
`

export const TableName = styled.div`
  width: 10%;
  text-align: center;
`

export const TableState = styled.div`
  width: 15%;
  text-align: center;
`

export const TableAge = styled.div`
  width: 10%;
  text-align: center;
`

export const TableRoute = styled.div`
  width: 20%;
  text-align: center;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: pre;
`
export const TableQuestionHead = styled.div`
  padding: 0px 10px 0px 0px;
  width: 45%;
`

export const TableQuestion = styled.div`
  padding: 0px 10px 0px 0px;
  width: 45%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  line-height: 1.5rem;
  height: calc(1.5rem * 3);
`

export const TableHead = styled.div`
  display: flex;
  flex-direction: row;
  height: 62px;
  background-color: #f2f2f2;
  font-weight: 400;
  font-size: 16px;
  align-items: center;
  text-align: center;
`

export const TableRow = styled.div`
  display: flex;
  flex-direction: row;
  height: 130px;
  font-weight: 400;
  font-size: 16px;
  align-items: center;
  border-bottom: 1px solid #c4c4c4;
`
