import styled from '@emotion/styled'
import { styles } from 'config/styles'
import { TEXT_ALIGN, TEXT_TYPES } from 'config/variableOfComponents'

const lowTextStyle = `
@media (min-width: ${styles.desktopQuery}) {
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

const handleSelectAlign = (align) => {
  switch (align) {
    case TEXT_ALIGN.left:
      return 'text-align: left;'

    case TEXT_ALIGN.center:
      return 'text-align: center;'

    case TEXT_ALIGN.rigth:
      return 'text-align: rigth;'

    default:
      return 'text-align: center;'
  }
}

export const Paragraph = styled.p`
  font-size: 16px;
  text-align: left;

  @media (min-width: ${styles.desktopQuery}) {
    padding-top: 40px;
    margin-top: 0;
    ${({ align }) => handleSelectAlign(align)}
  }

  ${({ type }) => handleSelectStyleFromType(type)}
`
