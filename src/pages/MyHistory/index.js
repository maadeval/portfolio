import Title from 'components/atoms/Title'
import ListOfTecnologiesAndTitle from 'components/molecules/ListOfTecnologies'
import SEO from 'components/molecules/SEO'
import { listOfAllTecnologies } from 'config/listOfAllTecnologies'
import { TITLE_TYPES } from 'config/variableOfComponents'
import { BoxSection, PageContainer, VerticalLine } from './styles'

const MyHistory = () => {
  return (
    <PageContainer>
      <SEO
        title="Mi Historia"
        description="Te cuento mi historia con la programación, soy Mateo Alvarez, a día de hoy Frontend Developer. Aunque me gusta mucho el concepto de T-SHAPED."
      />
      <Title>Mi Historia</Title>
      <Title type={TITLE_TYPES.tertiary}>
        Soy desarrollador frontend con casi dos años de experiencia en sector
        web. Soy dedicado, responsable, y relaciono mucho las capacidades
        técnicas con las blandas, lo que significa que siempre voy a tratar de
        ser un buen compañero de equipo, tanto dentro del proyecto en el que me
        encuentre como fuera.
      </Title>

      <VerticalLine />
      <BoxSection>
        <Title type={TITLE_TYPES.secondary}>
          Mis principios como desarrollador
        </Title>
        <Title type={TITLE_TYPES.tertiary}>
          Desarrollar implica muchas cosas, algunas muy buenas, otras no tanto,
          pero amo hacerlo, y creo que las razones por la que lo siento es
          porque se alinea mucho a tres principios que siempre intento llevar:
        </Title>
        <Title type={TITLE_TYPES.tertiary}> · </Title>
        <Title type={TITLE_TYPES.tertiary}>
          Lo primero es resolver problemas. En mi niñez me inculcaron siempre
          ser buena persona y ayudar. Y una de las bases éticas de la
          programación es justamente eso mismo, colaborar entre la comunidad y
          resolver problemas.
        </Title>
        <Title type={TITLE_TYPES.tertiary}> · </Title>
        <Title type={TITLE_TYPES.tertiary}>
          La segunda cosa es la creatividad. Antes de empezar a programar pensé
          en estudiar carreras relacionadas al diseño, como arquitectura, diseño
          gráfico, entre otras que tuvieran esa parte de creación. Y programar
          te permite ser el artista de tu propio código, el traductor de una
          idea o imagen, a algo que el usuario pueda disfrutar y usar.
        </Title>
        <Title type={TITLE_TYPES.tertiary}> · </Title>
        <Title type={TITLE_TYPES.tertiary}>
          La última cosa la definiría como la capacidad de la versatilidad. Si
          bien el mercado y la profesión personal tienden a que te especialices
          en algo, siempre hay avances y nuevas herramientas para usar. Y otro
          potencial es la posibilidad de poder hacer lo mismo de muchas maneras
          distintas. Esto no solo evita hacer tareas muy monótonas, sino buscar
          mejores alternativas y hacer team programming para aprender nuevas
          formas y motivar al trabajo en grupo.
        </Title>
      </BoxSection>
      <VerticalLine />
      <BoxSection>
        <Title type={TITLE_TYPES.secondary}>Stack Tecnológico</Title>
        <Title type={TITLE_TYPES.tertiary}>
          Más allá de que mi tendencia está más orientada al Frontend, considero
          que para poder ser un buen desarrollador y un buen jugador de equipo,
          hay que conocer el resto de tecnologías. Por eso me considero
          T-SHAPED. ¿Qué quiere decir esto?
        </Title>
        <Title type={TITLE_TYPES.tertiary}>
          T-SHAPED consiste en tener una rama principal con especialización (en
          mi caso tecnologías Frontend acompañado de diseño UI), y una rama
          alternativa en la que se tienen conocimientos globales que pueden
          acompañar y complementar a la principal (en este caso, tecnologías
          Backend con JavaScript).
        </Title>
        <Title type={TITLE_TYPES.tertiary}>
          Esto, además de entender un poco más el ciclo de vida de un proyecto,
          ayuda mucho a la comunicación entre equipos. Quiero y creo en una
          colaboración directa entre ellos, poder opinar, valorar y contribuir
          de la manera más libre posible. Por eso estoy abierto a aprender todo
          lo que sea positivo para un equipo.
        </Title>
        <ListOfTecnologiesAndTitle tecnologies={listOfAllTecnologies} />
      </BoxSection>
    </PageContainer>
  )
}

export default MyHistory
