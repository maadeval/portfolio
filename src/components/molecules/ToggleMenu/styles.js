import styled from '@emotion/styled'
import { styles } from 'config/styles'

const handleViewMenu = (isShow) => {
  return isShow ? 'transform: translateY(0%);' : 'transform: translateY(100%);'
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

  transition: transform 0.2s ease;
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
      top: 40%;
      transform: translateY(50%);
      width: 4px;
      height: 4px;
      background-color: ${styles.hightAccent};
      border-radius: 50%;
    }
  `}
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
`
