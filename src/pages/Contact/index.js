import { TITLE_TYPES } from 'config/variableOfComponents'

import { contactLinks } from 'config/globalLinks'

import Title from 'components/atoms/Title'
import TargetBlankButton from 'components/atoms/TargetBlankButton'

import { LinksToContact, PageContainer } from './styles'
import SEO from 'components/molecules/SEO'

const Contact = () => {
  return (
    <PageContainer>
      <SEO
        title="Contacto"
        description="Mis redes están aquí, así que puedes contactarte de la forma que más te guste! Sea por algo laboral o por si puedo ayudarte en algo!"
      />
      <Title>Contacto</Title>
      <Title type={TITLE_TYPES.tertiary}>
        Muchas gracias por tomarte tu tiempo! Un saludo enorme 😁
      </Title>
      <LinksToContact>
        {contactLinks.map(({ type, title, url, icon }) => (
          <TargetBlankButton
            key={title}
            icon={icon}
            title={title}
            type={type}
            url={url}
          />
        ))}
      </LinksToContact>
    </PageContainer>
  )
}

export default Contact
