import { useRedirectPage } from 'hooks/useRedirectPage'
import PropTypes from 'prop-types'

import { UiImageContain, Container, LinkTo, UIImage } from './styles'

const ContainerProjects = ({
  listOfProjects,
  IconOfRedirectButton,
  textOfRedirectButton,
  pathOfRedirectProject,
}) => {
  const { setRedirectPage } = useRedirectPage(pathOfRedirectProject)

  return (
    <Container>
      {listOfProjects.map(({ title, img, url }) => (
        <UiImageContain
          onClick={() => setRedirectPage(title)}
          key={title}
          title={title}
        >
          <LinkTo
            target="_blank"
            href={url}
            onClick={(e) => e.stopPropagation()}
          >
            {textOfRedirectButton}
            {IconOfRedirectButton && <IconOfRedirectButton />}
          </LinkTo>
          <UIImage src={img} alt={title} />
        </UiImageContain>
      ))}
    </Container>
  )
}

ContainerProjects.propTypes = {
  listOfProjects: PropTypes.arrayOf(PropTypes.object).isRequired,
  IconOfRedirectButton: PropTypes.node,
  textOfRedirectButton: PropTypes.string,
  pathOfRedirectProject: PropTypes.string,
}

export default ContainerProjects
