const { Global, css } = require('@emotion/react')

const DarkModeTheme = () => {
  return (
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

export default DarkModeTheme
