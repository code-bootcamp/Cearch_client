import styled from '@emotion/styled'
import { breakPoints } from '../../../../commons/styles/media'

export const Wrapper = styled.div``
export const BodyWrapper = styled.div`
  margin-bottom: 100px;
  padding: 80px 90px 80px 90px;
  width: 937px;
  background-color: #f1f1f1;
  border-radius: 10px;
  box-shadow: 0px 4px 22px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  @media ${breakPoints.tablet} {
    width: 100%;
    background-color: white;
    padding: 8% 10%;
    box-shadow: none;
  }
  @media ${breakPoints.mobile} {
    width: 100%;
    background-color: white;
    padding: 8% 0%;
    box-shadow: none;
  }
`
export const Title = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  margin-bottom: 70px;
  @media ${breakPoints.mobile} {
    display: none;
  }
`
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 45px;
  @media ${breakPoints.mobile} {
    flex-direction: column;
  }
`

export const TopRow = styled.div`
  padding-top: 20px;
`

export const TopRowLabel = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-weight: 400;
  font-size: 16px;
  align-items: center;
  color: #333333;
`

export const RowLabel = styled.div`
  width: 136px;
  margin-right: 85px;
  font-weight: 400;
  font-size: 16px;
  display: flex;
  align-items: center;
  color: #333333;
  @media ${breakPoints.tablet} {
    margin-right: 65px;
    width: 136px;
  }
  @media ${breakPoints.mobile} {
  }
`

export const InputBackground = styled.div`
  width: 524px;
  background-color: white;
  border-radius: 3px;
  @media ${breakPoints.mobile} {
    width: 100%;
  }
`

export const TopInput = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  > input {
    width: 524px;
    height: 60px;
    background-color: white;
    border: 1px solid #bdbdbd;
    border-radius: 3px;
    padding: 0px 15px 0px 14px;
    @media ${breakPoints.tablet} {
      width: 100%;
    }
    @media ${breakPoints.mobile} {
      width: 100%;
    }
  }
`

export const CheckButton = styled.button`
  width: 100%;
  height: 60px;
  border: 1px solid #ffa24b;
  color: #ffa24b;
  background-color: #ffffff;
  font-weight: 700;
  :hover {
    cursor: pointer;
    background-color: #ffa24b;
    color: #ffffff;
  }
`

export const DefaultInput = styled.input`
  width: 524px;
  height: 60px;
  background-color: white;
  border: 1px solid #bdbdbd;
  border-radius: 3px;
  padding: 0px 15px 0px 14px;
  @media ${breakPoints.mobile} {
    width: 100%;
  }
`
export const TextArea = styled.textarea`
  width: 745px;
  height: 331px;
  border: 1px solid #bdbdbd;
  border-radius: 3px;
  padding: 45px;
  margin-top: 15px;
  margin-bottom: 45px;
  @media ${breakPoints.tablet} {
    width: 100%;
  }
  @media ${breakPoints.mobile} {
    width: 100%;
    padding: 25px;
  }
`
export const SubmitButton = styled.button`
  width: 745px;
  height: 67px;
  border: 0px none;
  border-radius: 10px;
  font-weight: 700;
  font-size: 24px;
  color: #ffffff;
  background-color: #ffa24b;
  :hover {
    cursor: pointer;
  }
  @media ${breakPoints.tablet} {
    width: 100%;
  }
  @media ${breakPoints.mobile} {
    width: 100%;
  }
`
export const FileWrapper = styled.div`
  width: 100%;
  margin-bottom: 50px;
`
export const MentorApplyButton = styled.button`
  width: 745px;
  height: 67px;
  border: 0px none;
  border-radius: 10px;
  font-weight: 700;
  font-size: 24px;
  color: #ffffff;
  background-color: #ffa24b;
  :hover {
    cursor: pointer;
  }
  @media ${breakPoints.tablet} {
    width: 100%;
  }
  @media ${breakPoints.mobile} {
    width: 100%;
  }
`
export const Top = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 32px;
  @media ${breakPoints.mobile} {
    flex-direction: column;
  }
`

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 5px;
  @media ${breakPoints.mobile} {
    margin-bottom: 20px;
  }
`

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  > div {
    margin-bottom: 13px;
    > div {
      margin-bottom: 10px;
    }
  }

  @media ${breakPoints.tablet} {
    width: 70%;
    margin-left: 35px;
  }
`

export const Bottom = styled.div`
  padding-left: 14px;
  @media ${breakPoints.mobile} {
    width: 100%;
    padding: 0px;
  }
`

export const Avatar = styled.div`
  width: 134px;
  height: 134px;
  border-radius: 70%;
  overflow: hidden;
`

export const ChangePictureButton = styled.div`
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  margin-top: 32px;
`

export const PasswordButton = styled.button`
  margin-top: 40px;
  width: 136px;
  height: 36px;
  background: #ffa24b;
  border-radius: 25px;
  border: none;
  color: #ffffff;
  :hover {
    cursor: pointer;
  }
`
export const ApplyButton = styled.button`
  margin-top: 20px;
  width: 136px;
  height: 36px;
  background: #ffa24b;
  border-radius: 25px;
  border: none;
  color: #ffffff;
  :hover {
    cursor: pointer;
  }
`

export const Genders = styled.div`
  display: flex;
  justify-content: space-between;
  width: 524px;
  padding: 0px 100px;
  @media ${breakPoints.mobile} {
    width: 100%;
  }
`
// export const GenderButton = styled.button`
//   width: 240px;
//   height: 45px;
//   border: 1px solid #bdbdbd;
//   border-radius: 10px;
//   background-color: #ffffff;
//   :hover {
//     background: #ffa24b;
//     color: #ffffff;
//   }
//   .selected {
//     background: #ffa24b;
//     color: #ffffff;
//   }

//   @media ${breakPoints.tablet} {
//     width: 45%;
//   }

//   @media ${breakPoints.mobile} {
//     width: 45%;
//   }
// `
