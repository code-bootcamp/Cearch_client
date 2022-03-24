import styled from '@emotion/styled'

export const Wrapper = styled.div`
  width: 100%;
`
export const NoteDetailHeader = styled.div`
  height: 80px;

  display: grid;
  grid-template-columns: 8fr 1fr 1fr;
  grid-column-gap: 20px;

  text-align: start;
  .NoteDetailTitle {
    font-size: 1.875rem;
  }
  .CancelButton {
    width: 100px;
    height: 36px;
    background-color: #f1f1f1;
    color: #1e2744;
    cursor: pointer;
  }
  .SubmitButton {
    width: 100px;
    height: 36px;
    background-color: #1e2744;
    color: white;
    cursor: pointer;
  }
`

export const NoteDetailBody = styled.div`
  width: 100%;
  background-color: white;
  text-align: center;
  padding: 20px;

  .NoteDetailTitle {
    width: 100%;
    text-align: start;
    padding: 20px;
    border: none;
    border-bottom: 1px gray solid;
    margin-bottom: 15px;
    font-weight: bold;
    font-size: 1.5rem;
  }
  .NoteDetailContents {
    width: 100%;
    text-align: start;
    min-height: 400px;
    padding: 20px;
    border: none;
  }
  .ButtonWrapper {
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    .BackToListBtn,
    .EditBtn,
    .DeleteBtn {
      width: 100px;
      height: 35px;
      margin: 10px;
      background-color: white;
    }
  }
`
