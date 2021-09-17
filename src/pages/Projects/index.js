import { TITLE_TYPES } from 'config/variableOfComponents'
import {
  githubAccount,
  webProjects,
  webProjectsTeach,
} from 'config/webProjects'

import Title from 'components/atoms/Title'
import TeachersAndNetworkBar from 'components/molecules/TeachersAndNetworkBar'
import ContainerProjects from 'components/molecules/ContainerProjects'
import SEO from 'components/molecules/SEO'

import { PageContainer } from './styles'

const Projects = () => {
  return (
    <PageContainer>
      <SEO
        title="Proyectos"
        description="Soy Mateo Alvarez, y estos son uno de los proyectos web más apreciados que tengo. Muchos hechos con React, y otros un poco fuera de eso."
      />
      <Title type={TITLE_TYPES.primary}>Proyectos</Title>
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
