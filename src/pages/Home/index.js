import { BUTTONS_TYPES, TITLE_TYPES } from 'config/variableOfComponents'
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
} from './styles'

const Home = () => {
  return (
    <HomeContainer>
      <LeftContent>
        <GradientCircle />
        <LogoImage src={BigLogo} />
      </LeftContent>
      <RigthContent>
        <HeaderContainer>
          <Title type={TITLE_TYPES.secondary}>Mateo Alvarez</Title>
          <Title type={TITLE_TYPES.primary}>Frontend Developer</Title>
        </HeaderContainer>
        <Text>
          Hola! Soy Mateo, un desarrollador que ama las 🍩, pero te cuento un
          poco más de mi aquí abajo 👇🏻. Por dónde quieres empezar?
        </Text>
        <ToggleLinksContainer>
          {socialMediaLinks.map(({ title, url, icon }) => (
            <LinkButton
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
