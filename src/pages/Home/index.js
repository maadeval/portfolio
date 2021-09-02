import { BUTTONS_TYPES, TITLE_TYPES } from 'config/variableOfComponents'
import { linksToToggleMenu, socialMediaLinks } from 'config/globalLinks'

import Title from 'components/atoms/Title'
import Text from 'components/atoms/Text'
import LinkButton from 'components/atoms/LinkButton'
import GradientCircle from 'components/ui/GradientCircle'

const Home = () => {
  return (
    <>
      <GradientCircle />
      <div style={{ paddingTop: '56px' }}>
        <Title type={TITLE_TYPES.secondary}>Mateo Alvarez</Title>
        <Title type={TITLE_TYPES.primary}>Frontend Developer</Title>
      </div>
      <Text>
        Hola! Soy Mateo, un desarrollador que ama las 🍩, pero te cuento un poco
        más de mi aquí abajo 👇🏻. Por dónde quieres empezar?
      </Text>
      {socialMediaLinks.map(({ title, url, icon }) => (
        <LinkButton
          key={title}
          url={url}
          icon={icon}
          type={BUTTONS_TYPES.icon}
        />
      ))}
      <div style={{ paddingTop: '24px' }}>
        {linksToToggleMenu.slice(1).map(({ title, url, icon }) => (
          <LinkButton
            title={title}
            key={title}
            url={url}
            icon={icon}
            type={BUTTONS_TYPES.primary}
          />
        ))}
      </div>
    </>
  )
}

export default Home
