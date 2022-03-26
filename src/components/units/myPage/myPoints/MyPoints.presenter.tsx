import {} from './MyPoints.types'
import * as CH from './MyPoints.styles'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import Head from 'next/head'

export default function MyPointsUI(props) {
  return (
    <div>
      <Head>
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>
      <CH.Wrapper>
        <CH.HeadWrapper>
          <CH.HeadDivBox>
            <CH.TitleLabel>포인트 충전하기</CH.TitleLabel>
            <CH.PointInputWrapper>
              <FormControl variant="standard" sx={{ m: 1, minWidth: 166 }}>
                <InputLabel>금액을 선택해주세요.</InputLabel>
                <Select
                  value={props.deposit}
                  onChange={props.onChangeDeposit}
                  label="금액을 선택해주세요."
                >
                  <MenuItem value={10000}>10,000원</MenuItem>
                  <MenuItem value={50000}>50,000원</MenuItem>
                  <MenuItem value={100000}>100,000원</MenuItem>
                </Select>
              </FormControl>
              <CH.PointButton onClick={props.onClickPayment}>
                충전하기
              </CH.PointButton>
            </CH.PointInputWrapper>
          </CH.HeadDivBox>
          <CH.HeadDivBox>
            <CH.TitleLabel>포인트 인출하기</CH.TitleLabel>
            <CH.PointInputWrapper>
              <FormControl variant="standard" sx={{ m: 1, minWidth: 166 }}>
                <InputLabel>금액을 선택해주세요.</InputLabel>
                <Select
                  value={props.withdraw}
                  onChange={props.onChangeWithdraw}
                  label="금액을 선택해주세요."
                >
                  <MenuItem value={10000}>10,000원</MenuItem>
                  <MenuItem value={50000}>50,000원</MenuItem>
                  <MenuItem value={100000}>100,000원</MenuItem>
                </Select>
              </FormControl>
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
    </div>
  )
}
