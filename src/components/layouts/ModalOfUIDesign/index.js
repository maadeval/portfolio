import PropTypes from 'prop-types'

import { uiProjects } from 'config/uiProjects'
import { TEXT_TYPES, TITLE_TYPES } from 'config/variableOfComponents'

import useFindProjectInformation from 'hooks/useFindProjectInformation'
import { useRedirectPage } from 'hooks/useRedirectPage'

import Title from 'components/atoms/Title'
import Text from 'components/atoms/Text'

import { ProjectContainer, Image } from './styles'

const ModalOfUIDesign = ({ title: _title }) => {
  const { setRedirectPage } = useRedirectPage('/ui-design')
  const { projectInfo } = useFindProjectInformation(uiProjects, _title)

  const { title, img, description } = projectInfo

  return (
    <ProjectContainer onClick={() => setRedirectPage('')}>
      <Title type={TITLE_TYPES.secondary}>{title}</Title>
      <Text type={TEXT_TYPES.low}>{description}</Text>
      <Image src={img} alt={title} />
    </ProjectContainer>
  )
}

ModalOfUIDesign.propTypes = {
  title: PropTypes.string.isRequired,
}

export default ModalOfUIDesign
