import { useContext } from 'react'

import { Context } from 'context/themeProvider'

import LogoLink from 'components/atoms/Logo'
import ToggleMenu from 'components/molecules/ToggleMenu'

import {
  HeaderBox,
  HeaderContainerOptions,
  ThemeButton,
  ThemeButtonContainer,
} from './styles'

const Header = () => {
  const { setIsDarkMode } = useContext(Context)

  const handleChangeTheme = () => setIsDarkMode((isDarkMode) => !isDarkMode)

  return (
    <HeaderBox>
      <HeaderContainerOptions>
        <LogoLink />
        <ToggleMenu />
        <ThemeButtonContainer onClick={handleChangeTheme}>
          <span style={{ marginRight: '1rem' }}>Tema</span>
          <ThemeButton />
        </ThemeButtonContainer>
      </HeaderContainerOptions>
    </HeaderBox>
  )
}

export default Header
