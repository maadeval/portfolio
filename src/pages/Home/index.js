import {
  BUTTONS_TYPES,
  TEXT_ALIGN,
  TITLE_TYPES,
} from 'config/variableOfComponents'
import { linksToToggleMenu, socialMediaLinks } from 'config/globalLinks'

import Title from 'components/atoms/Title'
import Text from 'components/atoms/Text'
import LinkButton from 'components/atoms/LinkButton'
import GradientCircle from 'components/ui/GradientCircle'

import BigLogo from 'assets/img/BigLogo.png'

import {
  ButtonLinksContainer,
  HeaderContainer,
  HomeContainer,
  ToggleLinksContainer,
  RigthContent,
  LogoImage,
  LeftContent,
  ToggleLinkLeft,
} from './styles'
import TargetBlankButton from 'components/atoms/TargetBlankButton'

const Home = () => {
  return (
    <HomeContainer>
      <LeftContent>
        <GradientCircle />
        <LogoImage loading="lazy" src={BigLogo} />
        <ToggleLinkLeft>
          {socialMediaLinks.map(({ title, url, icon }) => (
            <TargetBlankButton
              key={title}
              url={url}
              icon={icon}
              type={BUTTONS_TYPES.icon}
            />
          ))}
        </ToggleLinkLeft>
      </LeftContent>
      <RigthContent>
        <HeaderContainer>
          <Title type={TITLE_TYPES.secondary}>Mateo Alvarez</Title>
          <Title type={TITLE_TYPES.primary}>Frontend Developer</Title>
        </HeaderContainer>
        <Text align={TEXT_ALIGN.left}>
          Hola! Soy Mateo, un desarrollador que ama las 🍩, pero te cuento un
          poco más de mi aquí abajo 👇🏻. Por dónde quieres empezar?
        </Text>
        <ToggleLinksContainer>
          {socialMediaLinks.map(({ title, url, icon }) => (
            <TargetBlankButton
              key={title}
              url={url}
              icon={icon}
              type={BUTTONS_TYPES.icon}
            />
          ))}
        </ToggleLinksContainer>
        <ButtonLinksContainer>
          {linksToToggleMenu.slice(1).map(({ title, url, icon }) => (
            <LinkButton
              title={title}
              key={title}
              url={url}
              icon={icon}
              type={BUTTONS_TYPES.primary}
            />
          ))}
        </ButtonLinksContainer>
      </RigthContent>
    </HomeContainer>
  )
}

export default Home
