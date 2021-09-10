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

const iconButton = `
  background-color: ${styles.background};
  width: 24px;
  heigth: 24px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  margin: 4px;
  border-radius: 50%;
  border: 1px solid ${styles.lowAccent};
  transition: box-shadow .2s ease;
  
  :hover {
    border: 1px solid transparent;
    box-shadow:  ${styles.mediumShadow};
  }
`

const primaryButton = `
  background-color: ${styles.background};
  padding: 8px 32px;
  box-sizing: border-box;
  font-size: 16px;
  color: ${styles.mediumAccent};
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border: 1px solid ${styles.lowAccent};
  border-radius: 5px;
  margin: 16px 0;
  transition: box-shadow .2s ease;

  
  :hover {
    border: 1px solid transparent;
    box-shadow:  ${styles.mediumShadow};
    color: ${styles.darkAccent};
  }
  
  :last-child {
    background-color: ${styles.darkAccent};
    border: 1px solid transparent;
    color: ${styles.background};

    > span {
      width: 16px;
    }
  
    > span > svg > path {
      stroke: ${styles.background};
    }
    
    :hover {
      background-color: ${styles.background};
      color: ${styles.darkAccent};
      border: 1px solid ${styles.darkAccent};

      > span > svg > path {
        stroke: ${styles.darkAccent};
      }
    }
  }

  @media(min-width: ${styles.desktopQuery}) {
    display: inline-flex;
    width: auto;
    margin: 8px 16px 8px 0;
  }
`

const allStylesFromType = {
  [BUTTONS_TYPES.primary]: primaryButton,
  [BUTTONS_TYPES.menu]: menuButton,
  [BUTTONS_TYPES.icon]: iconButton,
  default: menuButton,
}

export const handleSelectStyleFromType = (type) => {
  return allStylesFromType[type] || allStylesFromType.default
}
