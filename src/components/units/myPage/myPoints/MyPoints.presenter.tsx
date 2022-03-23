import {} from './MyPoints.types'
import * as CH from './MyPoints.styles'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'

export default function MyPointsUI(props) {
  return (
    <CH.Wrapper>
      <CH.HeadWrapper>
        <CH.HeadDivBox>
          <CH.TitleLabel>포인트 충전하기</CH.TitleLabel>
          <CH.PointInputWrapper>
            <input></input>
            <CH.PointButton>충전하기</CH.PointButton>
          </CH.PointInputWrapper>
        </CH.HeadDivBox>
        <CH.HeadDivBox>
          <CH.TitleLabel>포인트 인출하기</CH.TitleLabel>
          <CH.PointInputWrapper>
            <input></input>
            <CH.PointButton>인출하기</CH.PointButton>
          </CH.PointInputWrapper>
        </CH.HeadDivBox>
      </CH.HeadWrapper>
      <CH.PointsWithdraw>
        <CH.TitleLabel>포인트 사용내역</CH.TitleLabel>
        <CH.Table>
          <CH.TableHead>
            <CH.TableDate>일자</CH.TableDate>
            <CH.TableDivision>구분</CH.TableDivision>
            <CH.TableDetail>상세내역</CH.TableDetail>
            <CH.TablePrice>금액</CH.TablePrice>
          </CH.TableHead>
          {props.pointsMinus.map((el: any, index: number) => (
            <CH.TableRow key={index}>
              <CH.TableDate>{el.date}</CH.TableDate>
              <CH.TableDivision>{el.division}</CH.TableDivision>
              <CH.TableDetail>{el.detail}</CH.TableDetail>
              <CH.TablePrice>{el.price}</CH.TablePrice>
            </CH.TableRow>
          ))}
        </CH.Table>
      </CH.PointsWithdraw>
      <CH.PointsCharge>
        <CH.TitleLabel>포인트 충전/획득내역</CH.TitleLabel>
        <CH.Table>
          <CH.TableHead>
            <CH.TableDate>일자</CH.TableDate>
            <CH.TableDivision>구분</CH.TableDivision>
            <CH.TableDetail>상세내역</CH.TableDetail>
            <CH.TablePrice>금액</CH.TablePrice>
          </CH.TableHead>
          {props.pointsPlus.map((el: any, index: number) => (
            <CH.TableRow key={index}>
              <CH.TableDate>{el.date}</CH.TableDate>
              <CH.TableDivision>{el.division}</CH.TableDivision>
              <CH.TableDetail>{el.detail}</CH.TableDetail>
              <CH.TablePrice>{el.price}</CH.TablePrice>
            </CH.TableRow>
          ))}
        </CH.Table>
      </CH.PointsCharge>
    </CH.Wrapper>
  )
}
