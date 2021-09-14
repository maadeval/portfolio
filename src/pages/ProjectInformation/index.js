import PropTypes from 'prop-types'

import useFindProjectInformation from 'hooks/useFindProjectInformation'
import { webProjects } from 'config/webProjects'
import { BUTTONS_TYPES, TITLE_TYPES } from 'config/variableOfComponents'

import Title from 'components/atoms/Title'
import TargetBlankButton from 'components/atoms/TargetBlankButton'

import {
  PageContainer,
  ButtonContainer,
  GalleryOfImages,
  SecondaryImagesBox,
  Image,
  ConentForRecruiters,
} from './styles'
import ListOfTecnologiesAndTitle from 'components/molecules/ListOfTecnologies'

const ProjectInformation = ({ params }) => {
  const { title: titleFromUrl } = params
  const { projectInfo } = useFindProjectInformation(webProjects, titleFromUrl)

  const {
    title,
    description,
    extraDescription,
    img,
    images,
    codeUrl,
    url,
    videoUrl,
    icon,
    tecnologies,
  } = projectInfo

  return (
    <PageContainer>
      <Title type={TITLE_TYPES.primary}>{title}</Title>
      <Title type={TITLE_TYPES.tertiary}>{description}</Title>
      <ButtonContainer>
        <TargetBlankButton icon={icon} url={codeUrl} title={'Ver en GitHub'} />
        <TargetBlankButton
          type={BUTTONS_TYPES.secondary}
          url={url}
          title={'Visitar sitio web'}
        />
      </ButtonContainer>
      <GalleryOfImages>
        <Image src={img} alt={title} />
        <SecondaryImagesBox>
          {images &&
            images.map((singleImage, index) => (
              <Image key={index} src={singleImage} alt={index} />
            ))}
        </SecondaryImagesBox>
      </GalleryOfImages>

      <ListOfTecnologiesAndTitle
        tecnologies={tecnologies}
        title={'Pack tecnologico del Proyecto'}
      />

      <ConentForRecruiters>
        <Title type={TITLE_TYPES.secondary}>Recurso para Recruiters</Title>
        <Title type={TITLE_TYPES.tertiary}>{extraDescription}</Title>
        <TargetBlankButton title={'Demo en Youtube'} url={videoUrl} />
      </ConentForRecruiters>
    </PageContainer>
  )
}

ProjectInformation.propTypes = {
  params: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.any, PropTypes.string])
  ),
}

export default ProjectInformation
