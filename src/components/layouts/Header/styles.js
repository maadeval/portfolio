import styled from '@emotion/styled'
import { styles } from 'config/styles'

export const HeaderBox = styled.header`
  box-sizing: border-box;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  padding: 16px 24px;
  border-bottom: 1px solid ${styles.lowAccent};
  background-color: ${styles.background};
  z-index: 10;

  @media (min-width: ${styles.desktopQuery}) {
    border: 1px solid transparent;
    background-color: ${styles.transparentBackground};
    backdrop-filter: blur(4px);
  }
`

export const HeaderContainerOptions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: ${styles.desktopQuery}) {
    max-width: ${styles.headerMaxWidth};
    margin-left: auto;
    margin-right: auto;
  }
`

export const ThemeButton = styled.button`
  width: 24px;
  height: 24px;
  background-color: ${styles.hightAccent};
  border-radius: 50%;
  border: none;
  display: none;

  @media (min-width: ${styles.desktopQuery}) {
    display: block;
  }
`

export const ThemeButtonContainer = styled.div`
  display: none;

  @media (min-width: ${styles.desktopQuery}) {
    display: flex;
    justify-content: flex-end;
    flex: 1;
  }
`
