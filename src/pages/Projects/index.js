import { TITLE_TYPES } from 'config/variableOfComponents'
import {
  githubAccount,
  webProjects,
  webProjectsTeach,
} from 'config/webProjects'

import Title from 'components/atoms/Title'

import { PageContainer } from './styles'
import TeachersAndNetworkBar from 'components/molecules/TeachersAndNetworkBar'
import ContainerProjects from 'components/molecules/ContainerProjects'

const Projects = () => {
  return (
    <PageContainer>
      <Title type={TITLE_TYPES.primary}>Proyectos web</Title>
      <Title type={TITLE_TYPES.tertiary}>
        Proyectos personales que hice a modo de práctica. Uno de mis objetivos
        es tratar estos sitios como proyectos verdaderos, pensando en la
        escalabilidad, metodologías, y que el código sea lo más correcto e
        intuitivo posible.
      </Title>
      <TeachersAndNetworkBar
        teachers={webProjectsTeach}
        buttonInformation={githubAccount}
      />
      <ContainerProjects
        listOfProjects={webProjects}
        textOfRedirectButton={'Visitar web'}
        pathOfRedirectProject={'/projects'}
      />
    </PageContainer>
  )
}

export default Projects
