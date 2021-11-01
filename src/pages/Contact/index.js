import { TITLE_TYPES } from 'config/variableOfComponents'
import { contactLinks } from 'config/globalLinks'

import SEO from 'components/molecules/SEO'
import Title from 'components/atoms/Title'
import TargetBlankButton from 'components/atoms/TargetBlankButton'

import { LinksToContact, PageContainer } from './styles'

const Contact = () => {
  return (
    <PageContainer>
      <SEO
        title="Contacto"
        description="Mis redes están aquí, así que puedes contactarte de la forma que más te guste! Sea por algo laboral o por si puedo ayudarte en algo!"
      />
      <Title>Contacto</Title>
      <Title type={TITLE_TYPES.tertiary}>
        Aquí tienes todas mis redes para que nos podamos contactar. Incluido mi
        GitHub en donde podrás ver los repositorios de mis proyectos y mi
        actividad.
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
