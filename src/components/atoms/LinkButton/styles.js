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
    font-size: 16px;
    font-family: ${styles.fontRegular};
    display: block;
    width: 100%;
    text-align: left;
    padding: 8px 0 8px 1rem;
  }
`

const allStylesFromType = {
  [BUTTONS_TYPES.menu]: menuButton,
}

const handleSelectStyleFromType = (type) => {
  switch (type) {
    case BUTTONS_TYPES.menu:
      return allStylesFromType[BUTTONS_TYPES.menu]

    default:
      break
  }
}

export const Link = styled(LinkFromWouter)`
  ${({ type }) => handleSelectStyleFromType(type)}
`

export const Icon = styled.span`
  margin-left: 0.5rem;
`
