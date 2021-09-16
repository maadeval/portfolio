import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

const SEO = ({ children, title, description }) => {
  return (
    <Helmet>
      <title>{title} | Mateo Alvarez 👨🏻‍💻</title>
      <meta name="description" content={description} />
      {children}
    </Helmet>
  )
}

SEO.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  description: PropTypes.string,
}

export default SEO
