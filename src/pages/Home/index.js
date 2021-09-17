import {
  BUTTONS_TYPES,
  TEXT_ALIGN,
  TITLE_TYPES,
} from 'config/variableOfComponents'
import { linksToToggleMenu, socialMediaLinks } from 'config/globalLinks'

import BigLogo from 'assets/img/BigLogo.png'

import GradientCircle from 'components/ui/GradientCircle'
import LinkButton from 'components/atoms/LinkButton'
import SEO from 'components/molecules/SEO'
import TargetBlankButton from 'components/atoms/TargetBlankButton'
import Text from 'components/atoms/Text'
import Title from 'components/atoms/Title'

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

const Home = () => {
  return (
    <HomeContainer>
      <SEO
        title="Inicio"
        description="Soy Mateo Alvarez, desarrollador Frontend, puedes ver proyectos mios, cosas de UI, posiblemente de Backend y un poco mi historia como programador."
      />
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
          {linksToToggleMenu.slice(1).map(({ title, url, icon, type }) => (
            <LinkButton
              title={title}
              key={title}
              url={url}
              icon={icon}
              type={type || BUTTONS_TYPES.primary}
            />
          ))}
        </ButtonLinksContainer>
      </RigthContent>
    </HomeContainer>
  )
}

export default Home
