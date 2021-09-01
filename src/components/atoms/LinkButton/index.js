import PropTypes from 'prop-types'
import { Link, Icon } from './styles'

const LinkButton = ({ title, url, icon }) => {
  return (
    <>
      <Link href={url}>
        {title}
        {icon && <Icon>{icon}</Icon>}
      </Link>
    </>
  )
}

LinkButton.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  icon: PropTypes.oneOfType([PropTypes.any, PropTypes.node]),
}

export default LinkButton
