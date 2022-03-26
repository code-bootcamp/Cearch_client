import styled from '@emotion/styled'
import { breakPoints } from '../../../../commons/styles/media'

const Footer = styled.footer`
  width: 100%;
  height: 300px;
  line-height: 300px;
  background: #eee;
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  @media ${breakPoints.tablet} {
    width: 90%;
    height: auto;
  }
`

export default function LayoutFooter() {
  return (
    <>
      <Footer></Footer>
    </>
  )
}
