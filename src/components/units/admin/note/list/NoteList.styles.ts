import styled from '@emotion/styled'

export const Wrapper=styled.div`
    width: 100%;
    
`
export const NoteHeader=styled.div`
    height: 80px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    
`
export const WriteNoteButton=styled.button`
    background-color: #1E2744;
    color: white;
    width: 100px;
    height: 40px;
`

export const ContentsWrapper=styled.div`
    width: 100%;
`

export const ContentsHeader=styled.div`
    background-color: #1E2744;
    color: white;
    padding: 10px;
    display: grid;
    grid-template-columns: 1fr 3fr 6fr 1.5fr;
    grid-column-gap: 30px;

    text-align: center;
`

export const ContentsBody=styled.div`
    width: 100%;
    margin-bottom: 20px;
`

export const NoteWrapper=styled.div`
    width: 100%;
    /* white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden; */
    padding: 10px;

     position: relative;
    display: grid;
    grid-template-columns: 1fr 3fr 6fr 2fr;
    grid-column-gap: 30px;

    text-align: center;
`
export const NoteTitle=styled.div`
    width: 100%;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
`
export const NoteContents=styled.div`
    width: 100%;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
`
export const NoteCreatedAt=styled.div`
    width: 100%;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
`

export const ContentsFooter=styled.div`
    text-align: center;
    
    font-size: larger;
`