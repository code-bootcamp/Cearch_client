import ToastEditorPage from '../../../../commons/libraries/toasteditor/editor'
import * as CH from './BoardWrite.styles'
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
import ChakraModalHasType from '../../../../commons/libraries/chakramodal/chakraModalHasType'

export default function BoardWriteUI(props) {
  return (
    <CH.Wrapper>
      <CH.ContentWrapper
        onSubmit={
          props.data
            ? props.isEdit
              ? props.handleSubmit(props.updateBoard)
              : props.handleSubmit(props.submitBoard)
            : props.isEdit
            ? props.handleSubmit(props.updateBoardNonMember)
            : props.handleSubmit(props.submitBoardNonMember)
        }
      >
        <div className="contentHeader">
          <div>게시글 {props.isEdit ? '수정' : '등록'}</div>
        </div>
        <div className="contentBody">
          <div>
            <span>
              제목 <span style={{ color: 'red' }}>*</span>
            </span>
            <input
              type="text"
              placeholder="제목을 입력해주세요"
              {...props.register('title')}
            />
          </div>
          <span className="errorMessage">
            {props.formState.errors?.title?.message}
          </span>
          <div>
            <span>
              태그 <span style={{ color: 'red' }}>*</span>
            </span>
            <div className="tag__select">
              <FormControl sx={{ width: '100%' }} size="small">
                <InputLabel>카테고리를 선택해주세요.</InputLabel>
                <Select
                  multiple
                  value={props.category}
                  onChange={props.handleChange}
                  input={<OutlinedInput label="카테고리를 선택해주세요." />}
                  renderValue={(selected) => (
                    <Box
                      sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: 0.5,
                      }}
                    >
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
            </div>
          </div>
          <div>
            <span>
              작성자 <span style={{ color: 'red' }}>*</span>
            </span>
            <input
              type="test"
              placeholder="작성자를 입력해주세요"
              {...props.register('writer')}
            />
          </div>
          <span className="errorMessage">
            {props.formState.errors?.writer?.message}
          </span>
          {props.isEdit ? (
            ''
          ) : (
            <>
              <div>
                <span>
                  비밀번호 <span style={{ color: 'red' }}>*</span>
                </span>
                <input
                  type="password"
                  placeholder="비밀번호를 입력해주세요"
                  {...props.register('password')}
                />
              </div>
              <span className="errorMessage">
                {props.formState.errors?.password?.message}
              </span>
            </>
          )}

          <div className="Contents">
            <ToastEditorPage
              contents={props.contents}
              setContents={props.setContents}
              onClickSubmitBoard={props.onClickSubmitBoard}
            />
          </div>
          <span className="errorMessage" style={{ margin: '0' }}>
            {props.formState.errors?.contents?.message}
          </span>
        </div>
        <div className="boardDetailButtonWrapper">
          <ChakraModalHasType
            type="button"
            onClick={props.onClickToList}
            title="취소"
          />
          <ChakraModalHasType
            isEdit={props.isEdit}
            title={props.isEdit ? '수정' : '등록'}
            onClick={props.onClickSubmit}
            buttonRef={props.buttonRef}
          />
          <button
            style={{ display: 'none' }}
            ref={props.buttonRef}
            type="submit"
          ></button>
        </div>
      </CH.ContentWrapper>
    </CH.Wrapper>
  )
}
