import PropTypes from 'prop-types'
import { Link, Icon, LinkWithTarget } from './styles'
import { BUTTONS_TYPES } from 'config/variableOfComponents'

const IconButton = ({ title, type, url, icon }) => {
  return (
    <LinkWithTarget
      target="_blank"
      text={title}
      type={type}
      href={url}
      rel="noreferrer"
    >
      <Icon type={type}>{icon}</Icon>
    </LinkWithTarget>
  )
}

const NormalButton = ({ type, url, title, icon }) => {
  return (
    <Link type={type} href={url}>
      {title}
      {icon && <Icon type={type}>{icon}</Icon>}
    </Link>
  )
}

const LinkButton = ({ title, url, icon, type = BUTTONS_TYPES.primary }) => {
  return (
    <>
      {type === BUTTONS_TYPES.icon ? (
        <IconButton title={title} type={type} url={url} icon={icon} />
      ) : (
        <NormalButton title={title} type={type} url={url} icon={icon} />
      )}
    </>
  )
}

LinkButton.propTypes = {
  title: PropTypes.string,
  type: PropTypes.oneOfType([PropTypes.number, PropTypes.any]),
  url: PropTypes.string.isRequired,
  icon: PropTypes.oneOfType([PropTypes.any, PropTypes.node]),
}

IconButton.propTypes = {
  title: PropTypes.string,
  type: PropTypes.oneOfType([PropTypes.number, PropTypes.any]),
  url: PropTypes.string.isRequired,
  icon: PropTypes.oneOfType([PropTypes.any, PropTypes.node]),
}

NormalButton.propTypes = {
  title: PropTypes.string,
  type: PropTypes.oneOfType([PropTypes.number, PropTypes.any]),
  url: PropTypes.string.isRequired,
  icon: PropTypes.oneOfType([PropTypes.any, PropTypes.node]),
}

export default LinkButton
