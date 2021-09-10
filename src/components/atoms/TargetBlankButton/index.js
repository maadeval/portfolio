import PropTypes from 'prop-types'
import { Icon, Link } from './styles'

const TargetBlankButton = ({ title, type, url, icon }) => {
  return (
    <Link target="_blank" rel="noreferrer" text={title} type={type} href={url}>
      {title}
      {icon && <Icon type={type}>{icon}</Icon>}
    </Link>
  )
}

TargetBlankButton.propTypes = {
  title: PropTypes.string,
  type: PropTypes.oneOfType([PropTypes.number, PropTypes.any]),
  url: PropTypes.string.isRequired,
  icon: PropTypes.oneOfType([PropTypes.any, PropTypes.node]),
}

export default TargetBlankButton
