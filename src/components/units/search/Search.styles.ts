import styled from '@emotion/styled'
import { breakPoints } from '../../../commons/styles/media'

export const Wrapper = styled.div`
  width: 1200px;
  margin: 0 auto;
  padding-bottom: 30px;

  @media ${breakPoints.tablet}, ${breakPoints.mobile} {
    width: 90%;
  }
`
export const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: 0.2rem;
  margin-top: 20px;
  margin-bottom: 5px;
`

export const Line = styled.div`
  width: 100%;
  height: 1px;
  border-bottom: 3px solid #888;
`

export const BorderBottom = styled.div`
  width: 100%;
  border-bottom: 1px solid #e2e2e2;
  padding: 20px;

  .description {
    font-size: 0.875rem;
    color: #b8b8b8;
  }
  .smallFont {
    font-size: 0.875rem;
  }

  &:last-of-type {
    border-bottom: 0;
  }
`
export const UserWrapper = styled.div`
  margin-bottom: 10px;
  .mentorName {
    font-size: 1.1rem;
    font-weight: 600;
  }
  .companyName {
    font-size: 0.9rem;
  }
`
