import PropTypes from 'prop-types'
import { ButtonBox, Lines } from './styles'

const MenuButton = ({ isClicked }) => {
  return (
    <>
      <ButtonBox>
        <Lines isClicked={isClicked}></Lines>
      </ButtonBox>
    </>
  )
}

MenuButton.propTypes = {
  isClicked: PropTypes.bool.isRequired,
}

export default MenuButton
