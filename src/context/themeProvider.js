import { createContext, useState } from 'react'
import PropTypes from 'prop-types'

import { useGetIsNight } from 'hooks/useGetIsNight'

import DarkModeTheme from 'styles/DarkModeTheme'
import LightModeTheme from 'styles/LightModeTheme'

export const Context = createContext({ error: 'Not permission' })

const ThemeContextProvider = ({ children }) => {
  const { isNight } = useGetIsNight()
  const [isDarkMode, setIsDarkMode] = useState(isNight)

  return (
    <Context.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
      {isDarkMode ? <DarkModeTheme /> : <LightModeTheme />}
    </Context.Provider>
  )
}

ThemeContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ThemeContextProvider
