import { useState } from 'react'
import { linksToToggleMenu } from 'config/globalLinks'

import { MenuBox } from './styles'
import LinkButton from 'components/atoms/LinkButton'

const ToggleMenu = () => {
  const [isShow, setIsShow] = useState(false)

  const handleChangeStatus = () => setIsShow((lastValue) => !lastValue)

  const handleChangeStatusFromMenuOpened = ({ target }) => {
    target.tagName === 'A' && setIsShow(false)
  }

  return (
    <nav>
      <button onClick={handleChangeStatus}>Menu desplegable</button>
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
