import styled from '@emotion/styled'

export const Wrapper = styled.div`
  width: 100%;
`
export const ClassPermissionDetail__Header = styled.div`
  width: 100%;
  height: 80px;
  display: grid;
  grid-template-columns: 8fr 1fr 1fr;
  grid-column-gap: 20px;
  align-items: center;
  .NoteTitle {
    font-size: 30px;
  }
  .RefuseButton {
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
export const ClassPermissionDetail__Body = styled.div`
  width: 100%;
  background-color: white;
  padding: 20px;
  /* display: grid;
  grid-template-columns: 5fr 5fr;
  grid-column-gap: 15px; */
  margin-bottom: 20px;
  .DetailTitle {
    width: 100%;
    height: 40px;
    text-align: start;
    display: grid;
    grid-template-columns: 5fr 5fr;
    grid-column-gap: 15px;
    margin-bottom: 20px;
    .DetailTitle__Contents {
      border-bottom: 1px solid grey;
      padding-top: 10px;
      .ContentsTitle {
        padding-right: 15px;
      }
    }
  }
  .ClassInfo {
    width: 100%;
    text-align: start;
    display: grid;
    grid-template-columns: 2.5fr 7.5fr;
    grid-column-gap: 15px;
    margin-bottom: 20px;
    border-bottom: 1px solid grey;
    min-height: 230px;
  }
`
// export const UserImg = styled.div`
//   width: 150px;
//   height: 200px;
//   img {
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//   }
// `
// export const ClassPermissionDetail__Contents = styled.div`
//   width: 100%;
//   display: grid;
//   grid-template-columns: 5fr 5fr;
//   grid-column-gap: 10px;

//   .ContentsTitle,
//   .ContentsBody,
//   .UploadedFile {
//     display: flex;
//     flex-direction: column;
//   }
//   .contents {
//     height: 40px;
//     border-bottom: 1px solid gray;
//     text-align: start;
//     padding: 10px;
//   }
// `
export const ClassPermissionDetail__Footer = styled.div`
  width: 100%;
  height: 50px;
  text-align: center;
  cursor: pointer;
  .BackToList {
    width: 100px;
    height: 36px;
    background-color: #f1f1f1;
    color: #1e2744;
    cursor: pointer;
  }
`
