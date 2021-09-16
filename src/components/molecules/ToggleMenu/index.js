import { useState } from 'react'

import { linksToToggleMenu } from 'config/globalLinks'
import { BUTTONS_TYPES } from 'config/variableOfComponents'

import useGetActualUrlMenu from 'hooks/useGetActualUrlMenu'

import LinkButton from 'components/atoms/LinkButton'
import MenuButton from 'components/atoms/MenuButton'
import ThemeButton from 'components/molecules/ThemeButton'

import {
  MenuBox,
  Button,
  IndexNamePage,
  ListItem,
  NavContainer,
} from './styles'

const ToggleMenu = () => {
  const { pageName } = useGetActualUrlMenu()
  const [isShow, setIsShow] = useState(false)

  const handleChangeStatus = () => setIsShow((lastValue) => !lastValue)

  const handleChangeStatusFromMenuOpened = ({ target }) => {
    target.tagName === 'A' && setIsShow(false)
  }

  return (
    <NavContainer>
      <Button onClick={handleChangeStatus}>
        <IndexNamePage>{pageName}</IndexNamePage>
        <MenuButton isClicked={isShow} />
      </Button>
      <MenuBox isShow={isShow} onClick={handleChangeStatusFromMenuOpened}>
        {linksToToggleMenu.map(({ title, url, icon }) => (
          <ListItem isOpenPage={pageName === title} key={title}>
            <LinkButton
              type={BUTTONS_TYPES.menu}
              title={title}
              url={url}
              icon={icon}
            />
          </ListItem>
        ))}
        <ThemeButton type={'mobile'} />
      </MenuBox>
    </NavContainer>
  )
}

export default ToggleMenu
