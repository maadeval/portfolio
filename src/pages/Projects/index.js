import { useLocation } from 'wouter'

import { TITLE_TYPES } from 'config/variableOfComponents'
import { webProjects } from 'config/webProjects'

import Title from 'components/atoms/Title'

import {
  ContainerUiProjects,
  PageContainer,
  UiImageContain,
  UIImage,
} from './styles'

const Projects = () => {
  const [actualLocation, setLocation] = useLocation()

  const handleRedirectToInformation = (url) =>
    setLocation(`${actualLocation}/${url}`)

  return (
    <PageContainer>
      <Title type={TITLE_TYPES.primary}>Proyectos</Title>
      <Title type={TITLE_TYPES.tertiary}>
        Proyectos personales que hice a modo de práctica. Uno de mis objetivos
        es tratar estos sitios como proyectos verdaderos, pensando en la
        escalabilidad, metodologías, y que el código sea lo más correcto e
        intuitivo posible.
      </Title>
      <ContainerUiProjects>
        {webProjects.map(({ title, mainImg }) => (
          <UiImageContain
            key={title}
            title={title}
            onClick={() => handleRedirectToInformation(title)}
          >
            <UIImage src={mainImg} alt={title} />
          </UiImageContain>
        ))}
      </ContainerUiProjects>
    </PageContainer>
  )
}

export default Projects
