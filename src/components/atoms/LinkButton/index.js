import PropTypes from 'prop-types'
import { Link, Icon, LinkWithTarget } from './styles'
import { BUTTONS_TYPES } from 'config/variableOfComponents'

const LinkButton = ({
  title,
  url,
  icon,
  type = BUTTONS_TYPES.primary,
  status = false,
}) => {
  return (
    <>
      {type === BUTTONS_TYPES.icon ? (
        <LinkWithTarget target="_blank" type={type} href={url} rel="noreferrer">
          <Icon type={type}>{icon}</Icon>
        </LinkWithTarget>
      ) : (
        <Link type={type} href={url}>
          {title}
          {icon && <Icon type={type}>{icon}</Icon>}
        </Link>
      )}
    </>
  )
}

LinkButton.propTypes = {
  title: PropTypes.string,
  status: PropTypes.bool,
  type: PropTypes.oneOfType([PropTypes.number, PropTypes.any]),
  url: PropTypes.string.isRequired,
  icon: PropTypes.oneOfType([PropTypes.any, PropTypes.node]),
}

export default LinkButton
