import PropTypes from 'prop-types'

import { AvatarImage, RedirectLink } from './styles'

const Avatar = ({ src, alt, url }) => {
  return (
    <>
      <RedirectLink href={url || '#'} target="_blank">
        <AvatarImage src={src} alt={alt} />
      </RedirectLink>
    </>
  )
}

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  url: PropTypes.string,
}

export default Avatar
