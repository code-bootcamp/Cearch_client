import * as CH from './MyInformation.styles'
import * as CH2 from './ApplyMentorModal.styles'
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import Chip from '@mui/material/Chip'
import OutlinedInput from '@mui/material/OutlinedInput'
import { TimePicker } from 'antd'
import { InboxOutlined } from '@ant-design/icons'
import { Upload } from 'antd'

export default function MentorApplyModalUI(props) {
  const { Dragger } = Upload

  return (
    <form onSubmit={props.handleSubmit(props.onClickSubmit)}>
      <CH2.Wrapper>
        <CH2.Contents>
          <CH2.TitleLabel>
            <div>멘토 지원하기</div>
            <CH2.CancelButton>
              <CancelOutlinedIcon
                type="button"
                onClick={props.mentorApplyToggle}
              />
            </CH2.CancelButton>
          </CH2.TitleLabel>
          <CH.Row>
            <CH.RowLabel>회사명</CH.RowLabel>
            <CH.DefaultInput
              placeholder="회사명을 입력해주세요."
              {...props.register('companyName')}
            />
          </CH.Row>
          <CH.Row>
            <CH.RowLabel>부서</CH.RowLabel>
            <CH.DefaultInput
              placeholder="근무중인 부서를 입력해주세요."
              {...props.register('departmentName')}
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
                  input={<OutlinedInput label="업무파트를 선택해주세요." />}
                  renderValue={(selected) => (
                    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
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
          </CH.Row>
          <CH.RowLabel>자기소개</CH.RowLabel>
          <CH.TextArea
            placeholder="자기소개를 작성해주세요."
            {...props.register('selfIntro')}
          />
          <CH.FileWrapper>
            <Dragger {...props.fileProps}>
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">증명서류를 업로드해주세요.</p>
              <p className="ant-upload-hint">
                클릭하거나 파일을 드래그하여 파일 첨부하기
              </p>
            </Dragger>
          </CH.FileWrapper>

          <CH.MentorApplyButton>지원하기</CH.MentorApplyButton>
        </CH2.Contents>
      </CH2.Wrapper>
    </form>
  )
}
