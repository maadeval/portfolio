import PropTypes from 'prop-types'
import { useLocation } from 'wouter'

import { uiProjects } from 'config/uiProjects'
import { TITLE_TYPES } from 'config/variableOfComponents'

import Title from 'components/atoms/Title'
import IconDribbble from 'components/ui/IconDribbble'

import {
  ContainerUiProjects,
  LinkTo,
  PageContainer,
  UIImage,
  UiImageContain,
} from './styles'
import ModalPortal from 'components/layouts/Modal'
import ModalOfUIDesign from 'components/layouts/ModalOfUIDesign'

const UIThings = ({ params }) => {
  const { title } = params

  const [, setLocation] = useLocation()
  const handleRedirectToModal = (url) => setLocation(`/ui-design/${url}`)

  return (
    <PageContainer>
      <Title type={TITLE_TYPES.primary}>Desarrollo UI</Title>
      <Title type={TITLE_TYPES.tertiary}>
        Además de programar (y las películas de terror), me encanta diseñar.
        Comprender y cooperar entre ambos equipos creo que es genial para el
        desarrollo de un mejor producto.
      </Title>
      <ContainerUiProjects>
        {uiProjects.map(({ title, url, img, description }) => (
          <UiImageContain
            onClick={() => handleRedirectToModal(title)}
            key={title}
            title={title}
          >
            <LinkTo
              target="_blank"
              href={url}
              onClick={(e) => e.stopPropagation()}
            >
              Ver en
              <IconDribbble />
            </LinkTo>
            <UIImage loading="lazy" src={img} alt={title} />
          </UiImageContain>
        ))}
      </ContainerUiProjects>

      {typeof title !== 'undefined' && (
        <ModalPortal>
          <ModalOfUIDesign title={title} />
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
