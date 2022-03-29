import {} from './CreatedClasses.types'
import * as CH from './CreatedClasses.styles'

import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

import { useState } from 'react'

export default function CreatedClassesUI(props) {
  const [selectedClass, setSelectedClass] = useState([])

  const handleChange = (event) => {
    setSelectedClass(event.target.value)
    console.log(selectedClass.user)
  }

  const onClickUpdate = (event) => {
    console.log(event.target.id)
  }

  return (
    <CH.Wrapper>
      <CH.ClassTitle>내가 개설한 클래스</CH.ClassTitle>
      <CH.Select>
        <FormControl sx={{ width: 1 }}>
          <InputLabel id="demo-simple-select-label">
            클래스를 선택해주세요.
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="클래스를 선택해주세요."
            value={selectedClass}
            onChange={handleChange}
            sx={{ maxWidth: 1 }}
          >
            {props.createdClasses.map((el, index) => {
              return (
                <MenuItem key={index} value={el}>
                  {el.title} | {el.date} {el.now}명 / {el.limited}명
                </MenuItem>
              )
            })}
          </Select>
        </FormControl>

        <CH.UpdateButton id={selectedClass?.title} onClick={onClickUpdate}>
          강의정보 수정
        </CH.UpdateButton>
      </CH.Select>

      <CH.ClassInformation>
        <CH.ClassTitle>수강생리스트</CH.ClassTitle>
        <CH.Table>
          <CH.TableHead>
            <CH.TableName>이름</CH.TableName>
            <CH.MobileTableRow>
              <CH.TableState>상태</CH.TableState>
              <CH.TableAge>나이</CH.TableAge>
              <CH.TableRoute>신청경로</CH.TableRoute>
            </CH.MobileTableRow>
            <CH.TableHeadIntroduce>자기소개</CH.TableHeadIntroduce>
            <CH.TableHeadQuestion>사전질문</CH.TableHeadQuestion>
          </CH.TableHead>
          {selectedClass?.user?.map((el, index) => (
            <CH.TableRow key={index}>
              <CH.TableName>{el.name}</CH.TableName>
              <CH.MobileTableRow>
                <CH.TableState>{el.state}</CH.TableState>
                <CH.TableAge>{el.age}세</CH.TableAge>
                <CH.TableRoute>{el.route}</CH.TableRoute>
              </CH.MobileTableRow>
              <CH.MobileTableLabel>자기소개</CH.MobileTableLabel>
              <CH.TableIntroduce>{el.introduce}</CH.TableIntroduce>
              <CH.MobileTableLabel>사전질문</CH.MobileTableLabel>
              <CH.TableQuestion>{el.question}</CH.TableQuestion>
            </CH.TableRow>
          ))}
        </CH.Table>
      </CH.ClassInformation>
    </CH.Wrapper>
  )
}
