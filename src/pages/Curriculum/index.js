import { useEffect, useRef } from 'react'
import curriculum from 'assets/mateo-alvarez-curriculum.pdf'

import { TITLE_TYPES } from 'config/variableOfComponents'

import IconWhatsApp from 'components/ui/IconWhatsApp'
import SEO from 'components/molecules/SEO'
import TargetBlankButton from 'components/atoms/TargetBlankButton'
import Title from 'components/atoms/Title'

import { PageContainer } from './styles'

const Curriculum = () => {
  const linkToDownload = useRef()

  useEffect(() => {
    linkToDownload.current.click()
  }, [])

  return (
    <PageContainer>
      <SEO
        title="Descarga mi Curriculum"
        description="Aquí puedes descargar mi curriculum para ver más información de mi. Mi carrera profesional, personal como estudiante, y más."
      />
      <Title>Muchas Gracias!</Title>
      <Title type={TITLE_TYPES.tertiary}>
        Por tu tiempo! Espero que tengas un día increíble y cualquier cosa no
        dudes en contactarme. Un saludo!
      </Title>
      <Title type={TITLE_TYPES.tertiary}>- Mateo Alvarez -</Title>
      <TargetBlankButton
        icon={<IconWhatsApp />}
        title={'WhatsApp'}
        url={'https://wa.me/59898559874'}
      />
      <a
        ref={linkToDownload}
        href={curriculum}
        target="_blank"
        rel="noopener noreferrer"
      />
    </PageContainer>
  )
}

export default Curriculum
