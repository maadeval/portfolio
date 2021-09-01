import styled from '@emotion/styled'
import { styles } from 'config/styles'

export const HeaderBox = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  padding: 16px 24px;
  border-bottom: 1px solid ${styles.lowAccent};

  @media (min-width: ${styles.desktopQuery}) {
    border: 1px solid transparent;
    background-color: ${styles.transparentBackground};
    backdrop-filter: blur(4px);
  }
`
