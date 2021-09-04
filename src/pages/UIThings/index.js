import Title from 'components/atoms/Title'
import IconDribbble from 'components/ui/IconDribbble'
import { uiProjects } from 'config/uiProjects'
import { TITLE_TYPES } from 'config/variableOfComponents'

import {
  ContainerUiProjects,
  LinkTo,
  PageContainer,
  UIImage,
  UiImageContain,
} from './styles'

const UIThings = () => {
  return (
    <PageContainer>
      <Title type={TITLE_TYPES.primary}>Desarrollo UI</Title>
      <Title type={TITLE_TYPES.tertiary}>
        Además de programar (y las películas de terror), me encanta diseñar.
        Comprender y cooperar entre ambos equipos creo que es genial para el
        desarrollo de un mejor producto.
      </Title>
      <ContainerUiProjects>
        {uiProjects.map(({ title, url, img }) => (
          <UiImageContain key={title} title={title}>
            <LinkTo target="_blank" href={url}>
              Ver en
              <IconDribbble />
            </LinkTo>
            <UIImage src={img} alt={title} />
          </UiImageContain>
        ))}
      </ContainerUiProjects>
    </PageContainer>
  )
}

export default UIThings
