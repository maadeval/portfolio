import { TITLE_TYPES } from 'config/variableOfComponents'

import { contactLinks } from 'config/globalLinks'

import Title from 'components/atoms/Title'
import TargetBlankButton from 'components/atoms/TargetBlankButton'

import { LinksToContact, PageContainer } from './styles'

const Contact = () => {
  return (
    <PageContainer>
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
