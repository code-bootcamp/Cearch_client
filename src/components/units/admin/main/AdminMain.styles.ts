import styled from '@emotion/styled'

export const Wrapper=styled.div`
    width: 1200px;
    margin: 0 auto;
    background-color: #F1F1F1;
    
    display: grid;
    grid-template-columns: 2fr 8fr;
`

export const MenuWrapper=styled.div`
    width: 100%;
    padding: 15px;
    
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;

`
export const SideMenu=styled.button`
    width: 80%;
    height: 50px;
    color: black;
    font-weight: lighter;
    background-color: #f1f1f1;
    border: none;
    text-align: left;
    cursor: pointer;
    :focus{
        font-weight: bold;
    }
`
export const ContentsWrapper=styled.div`
    width: 100%;
    padding: 15px;
`
