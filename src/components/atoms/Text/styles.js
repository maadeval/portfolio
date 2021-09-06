import styled from '@emotion/styled'
import { styles } from 'config/styles'
import { TEXT_TYPES } from 'config/variableOfComponents'

const lowTextStyle = `
text-align: center;

@media (min-width: ${styles.desktopQuery}) {
    text-align: center;
    padding-top: 16px;
    padding-bottom: 16px;
    margin: 0;
    max-width: 1200px;
  }
`

const normalTextStyle = `
  padding-top: 48px;
  padding-bottom: 40px;
`

const allStylesFromType = {
  [TEXT_TYPES.low]: lowTextStyle,
  [TEXT_TYPES.normal]: normalTextStyle,
  default: normalTextStyle,
}

const handleSelectStyleFromType = (type) => {
  return allStylesFromType[type] || allStylesFromType.default
}

export const Paragraph = styled.p`
  font-size: 16px;

  @media (min-width: ${styles.desktopQuery}) {
    text-align: left;
    padding-top: 40px;
    margin-top: 0;
  }

  ${({ type }) => handleSelectStyleFromType(type)}
`
