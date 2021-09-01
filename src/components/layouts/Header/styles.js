import styled from '@emotion/styled'
import { styles } from 'config/styles'

export const HeaderBox = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  padding: 24px;
  border-bottom: 1px solid ${styles.lowAccent};

  @media (min-width: ${styles.desktopQuery}) {
    border: 1px solid transparent;
    background-color: ${styles.transparentBackground};
    backdrop-filter: blur(4px);
  }
`
