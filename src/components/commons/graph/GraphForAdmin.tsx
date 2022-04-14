import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts'
import styled from '@emotion/styled'
import { getRecentDate } from '../../../commons/libraries/getRecentDate'

const getDate = {
  OneDayBefore: getRecentDate('어제'),
  TwoDayBefore: getRecentDate('이틀전'),
  ThreeDayBefore: getRecentDate('삼일전'),
  fourDayBefore: getRecentDate('사일전'),
  FiveDayBefore: getRecentDate('오일전'),
  SixDayBefore: getRecentDate('육일전'),
  SevenDayBefore: getRecentDate('칠일전'),
}

const Wrapper = styled.div`
  width: 100%;
`
const Chart = styled(LineChart)`
  margin: 20px auto;
`

export default function GraphForAdmin(props) {
  const data = [
    {
      name: getDate.SevenDayBefore,
      newUser: 43,
      newQuestion: 87,
      permittedMentor: 3,
    },
    {
      name: getDate.SixDayBefore,
      newUser: 24,
      newQuestion: 55,
      permittedMentor: 5,
    },
    {
      name: getDate.FiveDayBefore,
      newUser: 17,
      newQuestion: 120,
      permittedMentor: 8,
    },
    {
      name: getDate.fourDayBefore,
      newUser: 6,
      newQuestion: 91,
      permittedMentor: 4,
    },
    {
      name: getDate.ThreeDayBefore,
      newUser: 55,
      newQuestion: 44,
      permittedMentor: 7,
    },
    {
      name: getDate.TwoDayBefore,
      newUser: 49,
      newQuestion: 56,
      permittedMentor: 10,
    },
    {
      name: getDate.OneDayBefore,
      newUser: 72,
      newQuestion: 128,
      permittedMentor: 6,
    },
  ]

  return (
    <Wrapper>
      <Chart
        style={{ textAlign: 'center' }}
        width={700}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="newQuestion"
          stroke="#8884d8"
          activeDot={{ r: 5 }}
        />
        <Line
          type="monotone"
          dataKey="newUser"
          stroke="#82ca9d"
          activeDot={{ r: 5 }}
        />
        <Line
          type="monotone"
          dataKey="permittedMentor"
          stroke="#c90627"
          activeDot={{ r: 5 }}
        />
      </Chart>
    </Wrapper>
  )
}
