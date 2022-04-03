import {} from './MyInformation.types'
import * as CH from './MyInformation.styles'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import Chip from '@mui/material/Chip'
import OutlinedInput from '@mui/material/OutlinedInput'
import { TimePicker } from 'antd'

import PasswordModal from './PasswordModal'
import MentorApplyModal from './ApplyMentorModal.container'

export default function MyInformationUI(props) {
  return (
    <>
      <CH.Wrapper>
        {props.isApplyBtnClicked && (
          <MentorApplyModal mentorApplyToggle={props.mentorApplyToggle} />
        )}
        {props.isApplyBtnClicked || (
          <div>
            {props.isClicked ? (
              <PasswordModal
                toggle={props.toggle}
                userInfoData={props.userInfoData}
              />
            ) : (
              <CH.BodyWrapper>
                <CH.Title>계정 설정</CH.Title>
                <CH.Top>
                  <CH.Left>
                    <CH.Avatar>
                      <img width={134} src="/avatar.png" />
                    </CH.Avatar>
                    <CH.ChangePictureButton onClick={props.onClickImage}>
                      프로필 사진 바꾸기
                    </CH.ChangePictureButton>
                    <input
                      type="file"
                      style={{ display: 'none' }}
                      onChange={props.onChangeFile}
                      ref={props.fileRef}
                    />
                    <CH.PasswordButton onClick={props.toggle}>
                      비밀번호 변경
                    </CH.PasswordButton>
                    {props.userInfoData?.fetchUser.role === 'MENTEE' ? (
                      <CH.ApplyButton onClick={props.mentorApplyToggle}>
                        + 멘토 지원하기
                      </CH.ApplyButton>
                    ) : (
                      <></>
                    )}
                  </CH.Left>
                  <CH.Right>
                    <CH.TopRow>
                      <CH.TopRowLabel>이름 변경</CH.TopRowLabel>
                      <CH.TopInput>
                        <input
                          placeholder="변경할 이름을 입력해주세요."
                          defaultValue={props.userInfoData?.fetchUser.name}
                          onChange={props.onChangeNewName}
                        />
                      </CH.TopInput>
                    </CH.TopRow>
                    <CH.TopRow>
                      <CH.TopRowLabel>휴대전화 번호 변경</CH.TopRowLabel>
                      <CH.TopInput>
                        <input
                          type="tel"
                          placeholder="변경할 휴대전화 번호를 입력해주세요."
                          onChange={props.onChangePhone}
                        />
                      </CH.TopInput>
                      <CH.CheckButton>인증발송</CH.CheckButton>
                    </CH.TopRow>

                    {/* <CH.TopRow>
                      <CH.TopRowLabel>인증번호</CH.TopRowLabel>
                      <CH.TopInput>
                        <input
                          type="text"
                          placeholder="인증번호를 입력해주세요."
                        />
                      </CH.TopInput>
                      <CH.CheckButton>인증확인</CH.CheckButton>
                    </CH.TopRow> */}
                  </CH.Right>
                </CH.Top>
                <CH.Bottom>
                  <CH.Row>
                    <CH.RowLabel>성별</CH.RowLabel>
                    <CH.Genders>
                      <label>
                        <input
                          type="radio"
                          name="radioGender"
                          style={{ marginRight: '10px', width: '10px' }}
                          value="M"
                          onChange={props.onChangeGender}
                        />
                        남자
                      </label>
                      <label>
                        <input
                          type="radio"
                          name="radioGender"
                          style={{ marginRight: '10px', width: '10px' }}
                          value="F"
                          onChange={props.onChangeGender}
                        />
                        여자
                      </label>
                    </CH.Genders>
                  </CH.Row>
                  <CH.Row>
                    <CH.RowLabel>관심분야 설정</CH.RowLabel>
                    <CH.InputBackground>
                      <FormControl sx={{ width: 1, height: 1 }}>
                        <InputLabel>관심분야를 선택해주세요.</InputLabel>
                        <Select
                          multiple
                          value={props.category}
                          // defaultValue={
                          //   props.userInfoData?.fetchUser?.interest
                          //     ?.linkedToLectureProductCategory.categoryname
                          // }
                          onChange={props.handleChange}
                          input={
                            <OutlinedInput label="카테고리를 선택해주세요." />
                          }
                          renderValue={(selected) => (
                            <Box
                              sx={{
                                width: 1,
                                display: 'flex',
                                flexWrap: 'wrap',
                              }}
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
                  {props.userInfoData?.fetchUser.role === 'MENTEE' ? (
                    <></>
                  ) : (
                    <>
                      <CH.Row>
                        <CH.RowLabel>회사명</CH.RowLabel>
                        <CH.DefaultInput
                          onChange={props.onChangeCompany}
                          placeholder="회사명을 입력해주세요."
                        />
                      </CH.Row>
                      <CH.Row>
                        <CH.RowLabel>부서</CH.RowLabel>
                        <CH.DefaultInput
                          onChange={props.onChangeDepartmentName}
                          placeholder="근무중인 부서를 입력해주세요."
                        />
                      </CH.Row>
                      <CH.Row>
                        <CH.RowLabel>업무파트</CH.RowLabel>
                        <CH.InputBackground>
                          <FormControl sx={{ width: 1 }}>
                            <InputLabel>업무파트를 선택해주세요.</InputLabel>
                            <Select
                              multiple
                              value={props.department}
                              onChange={props.handleChangeDepartment}
                              input={
                                <OutlinedInput label="업무파트를 선택해주세요." />
                              }
                              renderValue={(selected) => (
                                <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
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
                        <CH.InputBackground>
                          <TimePicker.RangePicker
                            onChange={props.onChangeTimeRange}
                            style={{
                              width: '100%',
                              height: 60,
                              borderColor: '#bdbdbd ',
                            }}
                          />
                        </CH.InputBackground>

                        {/* <CH.DefaultInput placeholder="온라인 시간대를 입력해주세요." /> */}
                      </CH.Row>

                      <CH.RowLabel>자기소개</CH.RowLabel>
                      <CH.TextArea
                        onChange={props.onChangeSelfIntro}
                        placeholder="자기소개를 작성해주세요."
                      />
                    </>
                  )}
                  {props.userInfoData?.fetchUser.role === 'MENTEE' ? (
                    <CH.SubmitButton onClick={props.submitUpdateMentee}>
                      수정하기
                    </CH.SubmitButton>
                  ) : (
                    <CH.SubmitButton onClick={props.submitUpdateMentor}>
                      수정하기
                    </CH.SubmitButton>
                  )}
                </CH.Bottom>
              </CH.BodyWrapper>
            )}
          </div>
        )}
      </CH.Wrapper>
    </>
  )
}
