import PropTypes from 'prop-types'
import { Paragraph } from './styles'

const Text = ({ children }) => {
  return <Paragraph>{children}</Paragraph>
}

Text.propTypes = {
  children: PropTypes.string.isRequired,
}

export default Text
