import { useContext } from 'react'
import PropTypes from 'prop-types'
import { Context } from 'context/themeProvider'

import { BoxContainer, Circle, ThemeButtonContainer } from './styles'

const ThemeButton = ({ type }) => {
  const { setIsDarkMode } = useContext(Context)

  const handleChangeTheme = () => setIsDarkMode((isDarkMode) => !isDarkMode)

  return (
    <BoxContainer type={type}>
      <ThemeButtonContainer onClick={handleChangeTheme}>
        <span style={{ marginRight: '1rem' }}>Tema</span>
        <Circle />
      </ThemeButtonContainer>
    </BoxContainer>
  )
}

ThemeButton.propTypes = {
  type: PropTypes.oneOf(['mobile', PropTypes.any]),
}

export default ThemeButton
