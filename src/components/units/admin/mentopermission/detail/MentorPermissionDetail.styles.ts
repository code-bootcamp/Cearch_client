import styled from '@emotion/styled'

export const Wrapper = styled.div`
  width: 100%;
`
export const MentorPermissionDetail__Header = styled.div`
  width: 100%;
  height: 80px;
  display: grid;
  grid-template-columns: 8fr 1fr 1fr;
  grid-column-gap: 20px;
  align-items: center;

  .NoteTitle {
    font-size: 1.875rem;
  }
  .RefuseButton {
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
export const MentorPermissionDetail__Body = styled.div`
  width: 100%;
  background-color: white;
  padding: 20px;
  display: grid;
  grid-template-columns: 2fr 8fr;
  grid-column-gap: 15px;
  margin-bottom: 20px;
`
export const UserImg = styled.div`
  width: 150px;
  height: 200px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
export const MentorPermissionDetail__Contents = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 3fr 7fr;
  grid-column-gap: 0px;

  .ContentsTitle,
  .ContentsBody,
  .UploadedFile {
    display: flex;
    flex-direction: column;
  }
  .contents {
    height: 40px;
    border-bottom: 1px solid gray;
    text-align: start;
    padding: 10px;
  }
`
export const MentorPermissionDetail__Footer = styled.div`
  width: 100%;
  height: 50px;
  text-align: center;
  cursor: pointer;
  .BackToList {
    width: 100px;
    height: 36px;
    background-color: #f1f1f1;
    color: #ffa24b;
    cursor: pointer;
  }
`
