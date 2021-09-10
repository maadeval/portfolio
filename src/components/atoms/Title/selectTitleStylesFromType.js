import { styles } from 'config/styles'
import { TITLE_TYPES } from 'config/variableOfComponents'

const secondaryStyle = `
  font-size: 24px;
  font-family: ${styles.fontMedium};
`

const primaryStyle = `
  font-size: 48px;
  margin-top: 8px;
  margin-bottom: 8px;
  font-family: ${styles.fontBlack};
  
  @media(min-width: ${styles.desktopQuery}) {
    font-size: 64px;
    margin-top: 0;
  }
`

const tertiaryStyle = `
  font-size: 16px;
  color: ${styles.hightAccent};
  font-family: ${styles.fontRegular};
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`

const allStylesOfTitle = {
  [TITLE_TYPES.primary]: primaryStyle,
  [TITLE_TYPES.secondary]: secondaryStyle,
  [TITLE_TYPES.tertiary]: tertiaryStyle,
  default: secondaryStyle,
}

export const handleSelectStylesFromType = (type) => {
  return allStylesOfTitle[type] || allStylesOfTitle.default
}
