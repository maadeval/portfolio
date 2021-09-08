import { TEXT_ALIGN, TEXT_TYPES } from 'config/variableOfComponents'
import PropTypes from 'prop-types'
import { Paragraph } from './styles'

const Text = ({
  children,
  type = TEXT_TYPES.normal,
  align = TEXT_ALIGN.center,
}) => {
  return (
    <Paragraph type={type} align={align}>
      {children}
    </Paragraph>
  )
}

Text.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.number,
  align: PropTypes.number,
}

export default Text
