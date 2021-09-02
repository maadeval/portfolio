import PropTypes from 'prop-types'
import { Link, Icon } from './styles'
import { BUTTONS_TYPES } from 'config/variableOfComponents'

const LinkButton = ({ title, url, icon, type = BUTTONS_TYPES.primary }) => {
  return (
    <>
      <Link type={type} href={url}>
        {title}
        {icon && <Icon>{icon}</Icon>}
      </Link>
    </>
  )
}

LinkButton.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOfType([PropTypes.number, PropTypes.any]),
  url: PropTypes.string.isRequired,
  icon: PropTypes.oneOfType([PropTypes.any, PropTypes.node]),
}

export default LinkButton
