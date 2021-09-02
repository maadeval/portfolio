import PropTypes from 'prop-types'
import { TITLE_TYPES } from 'config/variableOfComponents'

import { Text } from './styles'

const Title = ({ children, type = TITLE_TYPES.primary }) => {
  return <Text type={type}>{children}</Text>
}

Title.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.oneOfType([PropTypes.any, PropTypes.number]),
}

export default Title
