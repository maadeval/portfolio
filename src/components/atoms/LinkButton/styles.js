import styled from '@emotion/styled'
import { Link as LinkFromWouter } from 'wouter'
import { styles } from 'config/styles'
import { BUTTONS_TYPES } from 'config/variableOfComponents'

const menuButton = `
  font-size: 24px;
  text-decoration: none;
  color: ${styles.mediumAccent};
  font-family: ${styles.fontLight};

  :hover {
    color: ${styles.darkAccent};
  }

  @media(min-width: ${styles.desktopQuery}) {
    display: flex;
    align-items: center;
    font-size: 16px;
    font-family: ${styles.fontRegular};
    width: 100%;
    text-align: left;
    padding: 8px 0 8px 1rem;
  }
`

const allStylesFromType = {
  [BUTTONS_TYPES.menu]: menuButton,
  default: menuButton,
}

const handleSelectStyleFromType = (type) => {
  return allStylesFromType[type] || allStylesFromType.default
}

export const Link = styled(LinkFromWouter)`
  ${({ type }) => handleSelectStyleFromType(type)}
`

export const Icon = styled.span`
  margin-left: 0.5rem;
  display: inline-flex;
  align-items: center;

  @media (min-width: ${styles.desktopQuery}) {
    width: 16px;
  }
`
