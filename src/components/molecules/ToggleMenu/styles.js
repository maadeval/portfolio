import styled from '@emotion/styled'
import { styles } from 'config/styles'

const handleViewMenu = (isShow) => {
  return isShow ? 'transform: translateY(0%);' : 'transform: translateY(100%);'
}

const handleViewMenuOnBigScreen = (isShow) => {
  return isShow
    ? 'transform: translateY(100%) rotateX(0)'
    : 'transform: translateY(100%) rotateX(90deg)'
}

export const MenuBox = styled.ul`
  ${({ isShow }) => handleViewMenu(isShow)}
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 0;
  list-style: none;

  position: fixed;
  bottom: 0;
  left: 0;

  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 24px;
  padding: 104px 0 144px;
  max-height: 30vh;
  background-color: ${styles.transparentBackground};
  backdrop-filter: blur(4px);
  border-radius: 30px 30px 0 0;
  box-shadow: ${styles.lowShadow};

  transition: transform 0.2s ease;

  @media (min-width: ${styles.desktopQuery}) {
    position: absolute;
    background-color: ${styles.background};
    min-width: max-content;
    width: 224px;
    border-radius: 10px;
    padding: 16px 0;
    bottom: -0.75rem;
    left: 0.5rem;
    row-gap: 0;
    max-height: none;
    transform: translateY(100%) rotateX(0);
    transform-origin: top;
    transition: transform 0.2s ease;
    ${({ isShow }) => handleViewMenuOnBigScreen(isShow)}
  }
`

export const ListItem = styled.li`
  position: relative;
  ${({ isOpenPage }) =>
    isOpenPage &&
    `
    ::before {
      content: '';
      position: absolute;
      left: -1rem;
      top: 50%;
      transform: translateY(-50%);
      width: 4px;
      height: 4px;
      background-color: ${styles.hightAccent};
      border-radius: 50%;
    }
  `}

  @media (min-width: ${styles.desktopQuery}) {
    width: 100%;
    padding: 0;
    box-sizing: border-box;
    :hover {
      background-color: ${styles.veryLowAccent};
    }

    ::before {
      left: 0;
      top: 0;
      transform: translateY(0);
      width: 2px;
      height: 100%;
      background-color: ${styles.hightAccent};
      border-radius: 0;
    }
  }
`

export const Button = styled.button`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  cursor: pointer;
  background-color: transparent;
  border: none;
`

export const IndexNamePage = styled.span`
  font-size: 16px;
  font-family: ${styles.fontRegular};
  margin-right: 1rem;

  @media (min-width: ${styles.desktopQuery}) {
    order: 1;
    margin-right: 0;
    margin-left: 1rem;
  }
`

export const NavContainer = styled.nav`
  @media (min-width: ${styles.desktopQuery}) {
    position: relative;
    flex: 1;
    order: -1;
  }
`
