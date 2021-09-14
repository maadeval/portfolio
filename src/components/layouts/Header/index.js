import LogoLink from 'components/atoms/Logo'
import ThemeButton from 'components/molecules/ThemeButton'
import ToggleMenu from 'components/molecules/ToggleMenu'

import { HeaderBox, HeaderContainerOptions } from './styles'

const Header = () => {
  return (
    <HeaderBox>
      <HeaderContainerOptions>
        <LogoLink />
        <ToggleMenu />
        <ThemeButton />
      </HeaderContainerOptions>
    </HeaderBox>
  )
}

export default Header
