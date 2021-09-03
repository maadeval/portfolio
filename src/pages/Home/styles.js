import styled from '@emotion/styled'
import { styles } from 'config/styles'

export const HomeContainer = styled.section`
  @media (min-width: ${styles.desktopQuery}) {
    display: grid;
    grid-template-columns: minmax(500px, 0.5fr) 1fr;
    column-gap: 80px;
    align-items: center;
    padding-top: 0;
    padding-bottom: 180px;
  }
`

export const ToggleLinkLeft = styled.div`
  display: none;

  @media (min-width: ${styles.desktopQuery}) {
    display: block;
    position: absolute;
    right: 0;
    bottom: -80px;
    transform: translateX(-50%);
  }
`

export const LeftContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`

export const HeaderContainer = styled.div`
  padding-top: 56px;

  @media (min-width: ${styles.desktopQuery}) {
    text-align: left;
  }
`

export const ButtonLinksContainer = styled.div`
  padding-top: 24px;

  @media (min-width: ${styles.desktopQuery}) {
    display: flex;
    flex-wrap: wrap;
    padding-top: 0;
  }
`

export const ToggleLinksContainer = styled.div`
  @media (min-width: ${styles.desktopQuery}) {
    display: none;
  }
`

export const RigthContent = styled.div`
  @media (min-width: ${styles.desktopQuery}) {
    width: 100%;
    max-width: 740px;
  }
`

export const LogoImage = styled.img`
  display: none;

  @media (min-width: ${styles.desktopQuery}) {
    display: inline-block;
  }
`
