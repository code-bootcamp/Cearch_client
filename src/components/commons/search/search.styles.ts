import styled from '@emotion/styled'
import { breakPoints } from '../../../commons/styles/media'
import Box from '@mui/material/Box'

//검색창
export const SearchBar = styled.div`
  width: 200px;
  background: #eee;
  border-radius: 20px;
  text-align: right;
  padding: 5px 10px 5px 0px;
  margin-right: 20px;

  @media ${breakPoints.tablet} {
    width: 80%;
    height: auto;
    background-color: ${(props: { isTop: boolean }) =>
      props.isTop ? '#eee' : 'white'};
  }
  @media ${breakPoints.mobile} {
    display: none;
  }

  input {
    width: 140px;
    border: 0;
    background: none;
    outline: none;
    margin-right: 15px;
  }
  button {
    border: 0;
    background: none;
    cursor: pointer;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    outline: 0;
    outline: none;

    .search.icon {
      width: 12px;
      height: 12px;
      border: solid 2px currentColor;
      border-radius: 100%;
      margin-right: 5px;
      margin-bottom: 3px;
    }

    .search.icon:before {
      content: '';
      position: absolute;
      top: 12px;
      left: 5px;
      height: 6px;
      width: 2px;
      background-color: currentColor;
    }
  }
`

export const ModalStyle = styled(Box)`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  background-color: white;
  border: 2px solid #000;
  box-shadow: 24;
  padding: 20px;
  border-radius: 20px;
  .ModalInputWrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    .InputTag {
      padding: 5px;
      width: 90%;
      border: none;
      border-bottom: 1px solid gray;
      @media ${breakPoints.mobile} {
        height: 60px;
      }
    }
    .SearchInModal {
      background-color: white;
      border: none;
    }
  }
`
