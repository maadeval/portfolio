import { useState } from 'react'
import { linksToToggleMenu } from 'config/globalLinks'

import LinkButton from 'components/atoms/LinkButton'
import MenuButton from 'components/atoms/MenuButton'

import { MenuBox, Button } from './styles'

const ToggleMenu = () => {
  const [isShow, setIsShow] = useState(false)

  const handleChangeStatus = () => setIsShow((lastValue) => !lastValue)

  const handleChangeStatusFromMenuOpened = ({ target }) => {
    target.tagName === 'A' && setIsShow(false)
  }

  return (
    <nav>
      <Button onClick={handleChangeStatus}>
        <MenuButton />
      </Button>
      <MenuBox isShow={isShow} onClick={handleChangeStatusFromMenuOpened}>
        {linksToToggleMenu.map(({ title, url, icon }) => (
          <li key={title}>
            <LinkButton title={title} url={url} icon={icon} />
          </li>
        ))}
      </MenuBox>
    </nav>
  )
}

export default ToggleMenu
