import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import { webProjects } from 'config/webProjects'
import {
  TEXT_ALIGN,
  TEXT_TYPES,
  TITLE_TYPES,
} from 'config/variableOfComponents'

import LinkButton from 'components/atoms/LinkButton'
import Text from 'components/atoms/Text'
import Title from 'components/atoms/Title'

import {
  PageContainer,
  ImagesArticleContainer,
  ImageOfGallery,
  HeaderContainer,
  ButtonsContainer,
} from './styles'

const ProjectInformation = ({ params }) => {
  const { title: titleFromUrl } = params
  const [projectInformation, setProjectInformation] = useState({})

  const {
    title,
    description,
    extraDescription,
    mainImg,
    images,
    codeUrl,
    pageUrl,
    videoUrl,
  } = projectInformation

  useEffect(() => {
    const information = webProjects.find(
      ({ title }) => decodeURI(titleFromUrl) === title
    )
    setProjectInformation(information)
  }, [])

  return (
    <PageContainer>
      <ImagesArticleContainer>
        <ImageOfGallery src={mainImg} />
        {images &&
          images.map((singleImage) => <img src={singleImage} key={title} />)}
      </ImagesArticleContainer>
      <article>
        <HeaderContainer>
          <Title type={TITLE_TYPES.secondary}>{title}</Title>
        </HeaderContainer>
        <main>
          <Text align={TEXT_ALIGN.left} type={TEXT_TYPES.low}>
            {description}
          </Text>
          <ButtonsContainer>
            <LinkButton url={codeUrl} title="Codigo fuente" />
            <LinkButton title="Ver sitio web" url={pageUrl} />
          </ButtonsContainer>
          <Text align={TEXT_ALIGN.left} type={TEXT_TYPES.low}>
            {extraDescription}
            <a href={videoUrl}>Ver en youtybe</a>
          </Text>
        </main>
      </article>
    </PageContainer>
  )
}

ProjectInformation.propTypes = {
  params: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.any, PropTypes.string])
  ),
}

export default ProjectInformation
