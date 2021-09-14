import PropTypes from 'prop-types'
import { TITLE_TYPES } from 'config/variableOfComponents'
import Title from 'components/atoms/Title'

import { SingleTecnologyStack } from './styles'

const TecnologyBox = ({ name, icon }) => {
  return (
    <SingleTecnologyStack>
      {icon}
      <Title type={TITLE_TYPES.tertiary}>{name}</Title>
    </SingleTecnologyStack>
  )
}

TecnologyBox.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.node,
}

export default TecnologyBox
