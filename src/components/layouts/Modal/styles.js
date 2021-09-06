import styled from '@emotion/styled'
import { styles } from 'config/styles'

export const ModalContainer = styled.section`
  display: flex;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 100;
  top: 0;
  left: 0;
  background-color: ${styles.transparentBackground};
  backdrop-filter: blur(4px);
  padding: 40px 8px;
  box-sizing: border-box;
  overflow-y: auto;

  @media (min-width: ${styles.desktopQuery}) {
    display: block;
    padding-top: 80px;
  }
`

export const BlockOfDescription = styled.article`
  width: 100%;
`
