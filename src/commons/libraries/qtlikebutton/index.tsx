import styled from '@emotion/styled'
import { breakPoints } from '../../styles/media'
import Tooltip from '@mui/material/Tooltip'
const LikeButton = styled.button`
  width: 50px;
  height: 50px;
  @media ${breakPoints.mobile} {
    width: auto;
    height: auto;
    display: flex;
    justify-content: right;
    align-items: center;
  }
`

export default function BoardLikeButton(props) {
  return (
    <>
      <Tooltip title={`좋아요 : ${props.count}`} sx={{ width: 500 }}>
        <LikeButton onClick={props.onClick}>
          <svg
            width="50"
            height="50"
            viewBox="20 15 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_1142_819)">
              <circle cx="35" cy="31" r="13" fill="white" />
            </g>
            <path
              d="M38.6 24C37.208 24 35.872 24.6519 35 25.6821C34.128 24.6519 32.792 24 31.4 24C28.936 24 27 25.9477 27 28.4267C27 31.469 29.72 33.948 33.84 37.7147L35 38.769L36.16 37.7066C40.28 33.948 43 31.469 43 28.4267C43 25.9477 41.064 24 38.6 24ZM35.08 36.5155L35 36.5959L34.92 36.5155C31.112 33.0465 28.6 30.7527 28.6 28.4267C28.6 26.817 29.8 25.6097 31.4 25.6097C32.632 25.6097 33.5 26.4615 34.256 27.5092L35 28.4307L35.752 27.5092C36.5 26.4615 37.368 25.6097 38.6 25.6097C40.2 25.6097 41.4 26.817 41.4 28.4267C41.4 30.7527 38.888 33.0465 35.08 36.5155Z"
              fill="#FF7B00"
            />
            <defs>
              <filter
                id="filter0_d_1142_819"
                x="0"
                y="0"
                width="70"
                height="70"
                filterUnits="userSpaceOnUse"
                colorInterpolation-filters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="11" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_1142_819"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_1142_819"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </LikeButton>
      </Tooltip>
    </>
  )
}
