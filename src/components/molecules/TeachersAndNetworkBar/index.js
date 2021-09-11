import PropTypes from 'prop-types'

import TargetBlankButton from 'components/atoms/TargetBlankButton'
import Avatar from 'components/atoms/Avatar'

import { MapTeachersBox, Point, TeacherAndSocialMediaBox } from './styles'

const TeachersAndNetworkBar = ({ teachers, buttonInformation }) => {
  return (
    <>
      <TeacherAndSocialMediaBox>
        <MapTeachersBox>
          Aprendido con
          <span>
            {teachers.map(({ img, title, url }) => (
              <Avatar key={title} src={img} url={url} alt={title} />
            ))}
          </span>
        </MapTeachersBox>
        <Point />
        <TargetBlankButton
          icon={buttonInformation.icon}
          title={buttonInformation.title}
          url={buttonInformation.url}
        />
      </TeacherAndSocialMediaBox>
    </>
  )
}

TeachersAndNetworkBar.propTypes = {
  teachers: PropTypes.arrayOf(PropTypes.object).isRequired,
  buttonInformation: PropTypes.object.isRequired,
}

export default TeachersAndNetworkBar
