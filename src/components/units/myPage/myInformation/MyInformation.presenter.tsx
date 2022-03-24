import {} from './MyInformation.types'
import * as CH from './MyInformation.styles'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import Chip from '@mui/material/Chip'
import OutlinedInput from '@mui/material/OutlinedInput'

import PasswordModal from './PasswordModal'

export default function MyInformationUI(props) {
  return (
    <>
      <CH.Wrapper>
        {props.isClicked ? (
          <PasswordModal toggle={props.toggle} />
        ) : (
          <CH.BodyWrapper>
            <CH.Title>계정 설정</CH.Title>
            <CH.Top>
              <CH.Left>
                <CH.Avatar>
                  <img width={134} src="/avatar.png" />
                </CH.Avatar>
                <CH.ChangePictureButton>
                  프로필 사진 바꾸기
                </CH.ChangePictureButton>
                <CH.PasswordButton onClick={props.toggle}>
                  비밀번호 변경
                </CH.PasswordButton>
              </CH.Left>
              <CH.Right>
                <div>
                  <CH.RowLabel>이름</CH.RowLabel>
                  <CH.DefaultInput placeholder="이름을 입력해주세요."></CH.DefaultInput>
                </div>
                <div>
                  <CH.RowLabel>이메일</CH.RowLabel>
                  <CH.DefaultInput
                    type="text"
                    placeholder="이메일을 입력해주세요."
                  ></CH.DefaultInput>
                </div>
                <div>
                  <CH.RowLabel>휴대전화 번호</CH.RowLabel>
                  <CH.DefaultInput
                    type="text"
                    placeholder="휴대전화 번호를 입력해주세요."
                  ></CH.DefaultInput>
                </div>
              </CH.Right>
            </CH.Top>
            <CH.Bottom>
              <CH.Row>
                <CH.RowLabel>성별</CH.RowLabel>
                <CH.Genders>
                  <CH.GenderButton>여성</CH.GenderButton>
                  <CH.GenderButton>남성</CH.GenderButton>
                </CH.Genders>
              </CH.Row>
              <CH.Row>
                <CH.RowLabel>관심분야</CH.RowLabel>
                <CH.InputBackground>
                  <FormControl sx={{ width: 524 }}>
                    <InputLabel>관심분야를 선택해주세요.</InputLabel>
                    <Select
                      multiple
                      value={props.category}
                      onChange={props.handleChange}
                      input={<OutlinedInput label="카테고리를 선택해주세요." />}
                      renderValue={(selected) => (
                        <Box
                          sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}
                        >
                          {selected.map((value) => (
                            <Chip
                              key={value}
                              label={value}
                              variant="outlined"
                            />
                          ))}
                        </Box>
                      )}
                      MenuProps={props.MenuProps}
                    >
                      {props.categories.map((el) => (
                        <MenuItem
                          key={el}
                          value={el}
                          style={props.getStyles(
                            el,
                            props.category,
                            props.theme
                          )}
                        >
                          {el}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </CH.InputBackground>
              </CH.Row>

              <CH.Row>
                <CH.RowLabel>회사명</CH.RowLabel>
                <CH.DefaultInput placeholder="회사명을 입력해주세요." />
              </CH.Row>
              <CH.Row>
                <CH.RowLabel>업무파트</CH.RowLabel>
                <CH.InputBackground>
                  <FormControl sx={{ width: 524 }}>
                    <InputLabel>업무파트를 선택해주세요.</InputLabel>
                    <Select
                      multiple
                      value={props.department}
                      onChange={props.handleChangeDepartment}
                      input={<OutlinedInput label="업무파트를 선택해주세요." />}
                      renderValue={(selected) => (
                        <Box
                          sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}
                        >
                          {selected.map((value) => (
                            <Chip
                              key={value}
                              label={value}
                              variant="outlined"
                            />
                          ))}
                        </Box>
                      )}
                      MenuProps={props.MenuProps}
                    >
                      {props.categories.map((el) => (
                        <MenuItem
                          key={el}
                          value={el}
                          style={props.getStyles(
                            el,
                            props.category,
                            props.theme
                          )}
                        >
                          {el}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </CH.InputBackground>
              </CH.Row>
              <CH.Row>
                <CH.RowLabel>온라인 시간대</CH.RowLabel>
                <CH.DefaultInput placeholder="온라인 시간대를 입력해주세요." />
              </CH.Row>

              <CH.RowLabel>자기소개</CH.RowLabel>
              <CH.TextArea placeholder="자기소개를 작성해주세요." />
              <CH.SubmitButton>수정하기</CH.SubmitButton>
            </CH.Bottom>
          </CH.BodyWrapper>
        )}
      </CH.Wrapper>
    </>
  )
}
