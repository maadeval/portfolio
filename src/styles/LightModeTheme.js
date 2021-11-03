import { css, Global } from '@emotion/react'

const LightModeTheme = () => {
  return (
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
            'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
            'Helvetica Neue', sans-serif;

          --font-regular: 'Inter-Regular', var(--standar-fonts);
          --font-light: 'Inter-Light', var(--standar-fonts);
          --font-medium: 'Inter-Medium', var(--standar-fonts);
          --font-black: 'Inter-Black', var(--standar-fonts);
        }

        body {
          background-color: var(--background);
        }

        * {
          transition: background-color 0.2s ease, color 0.2s ease,
            box-shadow 0.2s ease;
        }
      `}
    />
  )
}

export default LightModeTheme
