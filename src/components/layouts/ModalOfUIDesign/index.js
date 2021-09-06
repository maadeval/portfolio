import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useLocation } from 'wouter'

import { uiProjects } from 'config/uiProjects'
import { TEXT_TYPES, TITLE_TYPES } from 'config/variableOfComponents'

import Title from 'components/atoms/Title'
import Text from 'components/atoms/Text'

import { ProjectContainer, Image } from './styles'

const ModalOfUIDesign = ({ title: _title }) => {
  const [, setLocation] = useLocation()
  const [projectInfo, setProjectInfo] = useState({})
  const { title, img, description } = projectInfo

  useEffect(() => {
    const foundProject = uiProjects.find(
      ({ title }) => title === decodeURI(_title)
    )
    setProjectInfo({ ...foundProject })
  }, [])

  const handleReturnDesignPage = () => {
    setLocation('/ui-design')
  }

  return (
    <ProjectContainer onClick={handleReturnDesignPage}>
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
