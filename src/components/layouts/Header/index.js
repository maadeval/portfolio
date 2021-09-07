import LogoLink from 'components/atoms/Logo'
import ToggleMenu from 'components/molecules/ToggleMenu'

import {
  HeaderBox,
  HeaderContainerOptions,
  ThemeButton,
  ThemeButtonContainer,
} from './styles'

const Header = () => {
  return (
    <HeaderBox>
      <HeaderContainerOptions>
        <LogoLink />
        <ToggleMenu />
        <ThemeButtonContainer>
          <span style={{ marginRight: '1rem' }}>Tema</span>
          <ThemeButton />
        </ThemeButtonContainer>
      </HeaderContainerOptions>
    </HeaderBox>
  )
}

export default Header
