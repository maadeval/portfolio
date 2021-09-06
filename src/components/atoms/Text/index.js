import { TEXT_TYPES } from 'config/variableOfComponents'
import PropTypes from 'prop-types'
import { Paragraph } from './styles'

const Text = ({ children, type = TEXT_TYPES.normal }) => {
  return <Paragraph type={type}>{children}</Paragraph>
}

Text.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.number,
}

export default Text
