import { BUTTONS_TYPES, TITLE_TYPES } from 'config/variableOfComponents'

import Title from 'components/atoms/Title'
import TargetBlankButton from 'components/atoms/TargetBlankButton'

import IconGitHub from 'components/ui/IconGitHub'
import IconLinkedIn from 'components/ui/IconLinkedIn'

import { LinksToContact, PageContainer } from './styles'
import IconWhatsApp from 'components/ui/IconWhatsApp'

const Contact = () => {
  return (
    <PageContainer>
      <Title>Contacto</Title>
      <Title type={TITLE_TYPES.tertiary}>
        Muchas gracias por tomarte tu tiempo! Un saludo enorme 😁
      </Title>
      <LinksToContact>
        <TargetBlankButton
          icon={<IconWhatsApp />}
          type={BUTTONS_TYPES.primary}
          title={'Hablar por WhatsApp'}
          url={'https://wa.me/59898559874'}
        />
        <TargetBlankButton
          icon={<IconLinkedIn />}
          title={'Visitar mi LinkedIn'}
          url={'https://www.linkedin.com/in/mateo-%C3%A1lvarez-731313188/'}
        />
        <TargetBlankButton
          icon={<IconGitHub />}
          title={'Visitar mi GitHub'}
          url={'https://github.com/Mateoac12'}
        />
        <TargetBlankButton
          icon={<IconGitHub />}
          title={'Hablar por mail'}
          url={'mailto:alvarez.fing@gmail.com'}
        />
      </LinksToContact>
    </PageContainer>
  )
}

export default Contact
