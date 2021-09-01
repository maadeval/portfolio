import { Link } from 'wouter'
import Logo from 'components/ui/Logo'

import { LinkTo } from './styles'

const LogoLink = () => {
  return (
    <Link href="/">
      <LinkTo>
        <Logo />
      </LinkTo>
    </Link>
  )
}

export default LogoLink
