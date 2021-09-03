import styled from '@emotion/styled'
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

const allStylesOfTitle = {
  [TITLE_TYPES.primary]: primaryStyle,
  [TITLE_TYPES.secondary]: secondaryStyle,
  default: secondaryStyle,
}

const handleSelectStylesFromType = (type) => {
  return allStylesOfTitle[type] || allStylesOfTitle.default
}

export const Text = styled.h1`
  font-weight: 400;
  margin-top: 0;
  margin-bottom: 0;
  ${({ type }) => handleSelectStylesFromType(type)}
`
