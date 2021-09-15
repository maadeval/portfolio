import Title from 'components/atoms/Title'
import ListOfTecnologiesAndTitle from 'components/molecules/ListOfTecnologies'
import { listOfAllTecnologies } from 'config/listOfAllTecnologies'
import { TITLE_TYPES } from 'config/variableOfComponents'
import { BoxSection, PageContainer, VerticalLine } from './styles'

const MyHistory = () => {
  return (
    <PageContainer>
      <Title>Mi Historia</Title>
      <Title type={TITLE_TYPES.tertiary}>
        Ser buena persona para mí va de la mano con ese espíritu de ayuda y de
        colaboración en grupo. Después me di cuenta que programar en parte es
        eso, es darlo todo entre un equipo de personas para buscar y dar
        solución a algún problema que existe.
      </Title>
      <VerticalLine />
      <BoxSection>
        <Title type={TITLE_TYPES.secondary}>Mi inicio como desarrollador</Title>
        <Title type={TITLE_TYPES.tertiary}>
          Es curioso pensar que antes de comenzar a programar, odiaba la idea de
          hacerlo, en mi mente era como lo que muestran las películas de
          Hollywood. Todo cambió cuando me encontraba perdido en mis estudios y
          frustrado por el poco avance de ellas.
        </Title>
        <Title type={TITLE_TYPES.tertiary}>
          En búsqueda de alternativas y encontrar algo que de verdad me gustara,
          se me dio por ver un video de Python de Pildorasinformaticas, y ahí
          comenzó mi aventura y mi gusto por programar. Luego fui abriéndome a
          tecnologías web y aquí me encuentro!
        </Title>
      </BoxSection>
      <VerticalLine />
      <BoxSection>
        <Title type={TITLE_TYPES.secondary}>Stack Tecnológico</Title>
        <Title type={TITLE_TYPES.tertiary}>
          Como camino tradicional al mundo del desarrollo web, empecé estudiando
          HTML, CSS y JavaScript. Al tiempo me empezó a interesar lo que había
          alrededor de ese stack, y empecé con React, tecnologías backend y
          diseño UI.
        </Title>
        <ListOfTecnologiesAndTitle tecnologies={listOfAllTecnologies} />
      </BoxSection>
    </PageContainer>
  )
}

export default MyHistory
