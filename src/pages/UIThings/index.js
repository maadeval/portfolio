import PropTypes from 'prop-types'

import { uiProjects, dribbbleAccount, uiProjectsTeach } from 'config/uiProjects'
import { TITLE_TYPES } from 'config/variableOfComponents'

import ContainerProjects from 'components/molecules/ContainerProjects'
import IconDribbble from 'components/ui/IconDribbble'
import ModalOfUIDesign from 'components/layouts/ModalOfUIDesign'
import ModalPortal from 'components/layouts/Modal'
import SEO from 'components/molecules/SEO'
import TeachersAndNetworkBar from 'components/molecules/TeachersAndNetworkBar'
import Title from 'components/atoms/Title'

import { PageContainer } from './styles'

const UIThings = ({ params }) => {
  const { title: urlParam } = params

  return (
    <PageContainer>
      <SEO
        title="Desarrollo UI"
        description="Programar es mi amor, pero diseñar tiene un lugar dentro de mi corazón. Y eso está genial! porque la mezcla de ambos puede lograr lindas cosas."
      />
      <Title type={TITLE_TYPES.primary}>Desarrollo UI</Title>
      <Title type={TITLE_TYPES.tertiary}>
        Además de programar (y las películas de terror), me encanta diseñar.
        Ayudarse y entenderse entre ambos equipos creo que es genial para el
        desarrollo de un mejor producto.
      </Title>

      <TeachersAndNetworkBar
        buttonInformation={dribbbleAccount}
        teachers={uiProjectsTeach}
      />

      <ContainerProjects
        listOfProjects={uiProjects}
        textOfRedirectButton={'Ver en Dribbble'}
        IconOfRedirectButton={IconDribbble}
        pathOfRedirectProject={'/ui-design'}
      />

      {typeof urlParam !== 'undefined' && (
        <ModalPortal>
          <ModalOfUIDesign title={urlParam} />
        </ModalPortal>
      )}
    </PageContainer>
  )
}

UIThings.propTypes = {
  params: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.any, PropTypes.string])
  ),
}

export default UIThings
