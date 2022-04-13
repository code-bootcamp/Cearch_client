import styled from '@emotion/styled'

export const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 0.5fr 6fr;
  .reCommentWrapper {
    width: 100%;
    height: auto;
    border: none;
    background-color: #fbfbfb;
    padding: 10px;
    text-align: left;
    margin-bottom: 5px;
    .reCommentInputs {
      padding-top: 5px;
      min-height: 50px;
      display: grid;
      grid-template-columns: 7fr 1fr;
    }
    .reCommentTitle {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      .commentWriter {
        font-weight: bold;
      }
      .commentCreated {
        color: gray;
      }
    }
    .reCommentContents {
      width: 100%;
      min-height: 60px;
      padding: 10px;
    }
    .submitButton {
      :hover {
        background-color: #ffa24b;
        color: white;
        font-weight: 700;
      }
    }
  }
`
