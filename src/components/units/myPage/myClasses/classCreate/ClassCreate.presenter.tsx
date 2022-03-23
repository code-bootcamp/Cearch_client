import * as CH from './ClassCreate.styles'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import DateTimePicker from '@mui/lab/DateTimePicker'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Chip from '@mui/material/Chip'
import Select, { SelectChangeEvent } from '@mui/material/Select'

export default function ClassCreateUI(props) {
  return (
    <CH.Wrapper>
      <CH.BodyWrapper>
        <CH.Title>클래스 개설하기</CH.Title>
        <CH.Row>
          <CH.RowLabel>카테고리</CH.RowLabel>
          <CH.InputBackground>
            <FormControl sx={{ width: 524 }}>
              <InputLabel>카테고리를 선택해주세요.</InputLabel>
              <Select
                multiple
                value={props.category}
                onChange={props.handleChange}
                input={<OutlinedInput label="카테고리를 선택해주세요." />}
                renderValue={(selected) => (
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {selected.map((value) => (
                      <Chip key={value} label={value} variant="outlined" />
                    ))}
                  </Box>
                )}
                MenuProps={props.MenuProps}
              >
                {props.categories.map((el) => (
                  <MenuItem
                    key={el}
                    value={el}
                    style={props.getStyles(el, props.category, props.theme)}
                  >
                    {el}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </CH.InputBackground>
        </CH.Row>
        <CH.Row>
          <CH.RowLabel>클래스 제목</CH.RowLabel>
          <CH.DefaultInput placeholder="제목을 입력하세요."></CH.DefaultInput>
        </CH.Row>
        <CH.Row>
          <CH.RowLabel>최대 수강 가능 인원</CH.RowLabel>
          <CH.DefaultInput placeholder="수강 정원을 입력하세요."></CH.DefaultInput>
        </CH.Row>
        <CH.Row>
          <CH.RowLabel>클래스 시작일시</CH.RowLabel>
          <CH.InputBackground>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DateTimePicker
                renderInput={(props) => (
                  <TextField sx={{ width: 524 }} {...props} />
                )}
                label="클래스 시작일을 선택해주세요."
                inputFormat="yyyy / MM / dd /  ⏰ hh:mm a"
                value={props.dateTime}
                onChange={(newValue) => {
                  props.setDateTime(newValue)
                }}
              />
            </LocalizationProvider>
          </CH.InputBackground>
        </CH.Row>
        <CH.Row>
          <CH.RowLabel>수강료</CH.RowLabel>
          <CH.DefaultInput placeholder="수강료를 입력해주세요."></CH.DefaultInput>
        </CH.Row>
        <CH.RowLabel>강의 소개</CH.RowLabel>
        <CH.TextArea placeholder="강의 소개를 입력해주세요." />
        <CH.RowLabel>커리큘럼</CH.RowLabel>
        <CH.TextArea placeholder="커리큘럼을 입력해주세요." />
        <CH.SubmitButton>등록하기</CH.SubmitButton>
      </CH.BodyWrapper>
    </CH.Wrapper>
  )
}
