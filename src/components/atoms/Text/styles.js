import styled from '@emotion/styled'
import { styles } from 'config/styles'

export const Paragraph = styled.p`
  padding-top: 48px;
  padding-bottom: 40px;
  font-size: 16px;

  @media (min-width: ${styles.desktopQuery}) {
    text-align: left;
    padding-top: 40px;
    margin-top: 0;
  }
`
