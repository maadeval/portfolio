import PropTypes from 'prop-types'
import { createContext, useState } from 'react'
import { css, Global } from '@emotion/react'
import { useGetIsNight } from 'hooks/useGetIsNight'

export const Context = createContext({ error: 'Not permission' })

const ThemeContextProvider = ({ children }) => {
  const { isNight } = useGetIsNight()
  const [isDarkMode, setIsDarkMode] = useState(isNight)

  return (
    <Context.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
      {isDarkMode ? (
        <Global
          styles={css`
            :root {
              --background: #000;
              --very-low-accent: #333333;
              --low-accent: #333;
              --medium-accent: #eaeaea;
              --hight-accent: #fafafa;
              --dark-accent: #fff;
              --transparent-background: rgba(0, 0, 0, 0.8);

              --low-shadow: 0px 0px 8px #111;
              --medium-shadow: 0px 8px 30px hsla(0, 0%, 100%, 0.14);

              --standar-fonts: -apple-system, BlinkMacSystemFont, 'Segoe UI',
                'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
                'Droid Sans', 'Helvetica Neue', sans-serif;

              --font-regular: 'Inter-Regular', var(--standar-fonts);
              --font-light: 'Inter-Light', var(--standar-fonts);
              --font-medium: 'Inter-Medium', var(--standar-fonts);
              --font-black: 'Inter-Black', var(--standar-fonts);
            }

            body {
              background-color: var(--background);
            }
          `}
        />
      ) : (
        <Global
          styles={css`
            :root {
              --background: #fff;
              --very-low-accent: #fafafa;
              --low-accent: #eaeaea;
              --medium-accent: #666666;
              --hight-accent: #333333;
              --dark-accent: #000000;
              --transparent-background: hsla(0, 0%, 100%, 0.8);

              --low-shadow: 0px 0px 8px #eaeaea;
              --medium-shadow: 0px 8px 30px rgba(0, 0, 0, 0.12);

              --standar-fonts: -apple-system, BlinkMacSystemFont, 'Segoe UI',
                'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
                'Droid Sans', 'Helvetica Neue', sans-serif;

              --font-regular: 'Inter-Regular', var(--standar-fonts);
              --font-light: 'Inter-Light', var(--standar-fonts);
              --font-medium: 'Inter-Medium', var(--standar-fonts);
              --font-black: 'Inter-Black', var(--standar-fonts);
            }

            body {
              background-color: var(--background);
            }
          `}
        />
      )}
    </Context.Provider>
  )
}

ThemeContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ThemeContextProvider
