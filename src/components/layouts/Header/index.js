import LogoLink from 'components/atoms/Logo'
import ToggleMenu from 'components/molecules/ToggleMenu'

import { HeaderBox } from './styles'

const Header = () => {
  return (
    <HeaderBox>
      <LogoLink />
      <ToggleMenu />
    </HeaderBox>
  )
}

export default Header
