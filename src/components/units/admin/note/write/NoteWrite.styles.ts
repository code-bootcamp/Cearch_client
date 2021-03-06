import styled from '@emotion/styled'

export const Wrapper = styled.div`
  width: 100%;
`
export const NoteWriteHeader = styled.div`
  height: 80px;

  display: grid;
  grid-template-columns: 8fr 1fr 1fr;
  grid-column-gap: 20px;

  text-align: start;
  .NoteTitle {
    font-size: 1.875rem;
  }
  .CancelButton {
    width: 100px;
    height: 36px;
    background-color: #f1f1f1;
    color: #ffa24b;
    cursor: pointer;
  }
  .SubmitButton {
    width: 100px;
    height: 36px;
    background-color: #ffa24b;
    color: white;
    cursor: pointer;
  }
`

export const NoteWriteBody = styled.div`
  width: 100%;
  background-color: white;
  text-align: center;
  padding: 20px;

  .NoteWriteTitle {
    width: 100%;
    height: 50px;
    text-align: start;
    padding: 20px;
    border: none;
    border-bottom: 1px gray solid;
    margin-bottom: 15px;
    :focus {
      border: none;
    }
  }
  .NoteWriteContents {
    width: 100%;
    text-align: start;
    min-height: 400px;
    padding: 20px;
    border: none;
    :focus {
      border: white;
    }
  }
`
