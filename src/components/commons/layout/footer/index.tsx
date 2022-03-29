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
  @media ${breakPoints.mobile}, ${breakPoints.tablet} {
    width: 100%;
  }
`

export default function LayoutFooter() {
  return (
    <>
      <Footer></Footer>
    </>
  )
}
