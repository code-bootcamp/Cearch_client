import styled from '@emotion/styled'

export const Wrapper=styled.div`
    width: 100%;
    
`
export const ClassPermission__Header=styled.div`
    height: 80px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    
`


export const ClassPermission__Body=styled.div`
    width: 100%;
`

export const Body__Header=styled.div`
    background-color: #1E2744;
    color: white;
    padding: 10px;
    display: grid;
    grid-template-columns: 1fr 3fr 6fr 1.5fr;
    grid-column-gap: 30px;

    text-align: center;
`

export const Body__Body=styled.div`
    width: 100%;
    margin-bottom: 20px;
`

export const ListWrapper=styled.div`
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
export const ClassName=styled.div`
    width: 100%;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
`
export const MentorCategory=styled.div`
    width: 100%;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
`
export const MentorName=styled.div`
    width: 100%;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
`

export const ClassPermission__Footer=styled.div`
    text-align: center;
    
    font-size: larger;
`