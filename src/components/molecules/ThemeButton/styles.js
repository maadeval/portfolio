import styled from '@emotion/styled'
import { styles } from 'config/styles'

export const Circle = styled.button`
  width: 24px;
  height: 24px;
  background-color: ${styles.hightAccent};
  border-radius: 50%;
  border: none;
  display: block;
`

export const BoxContainer = styled.div`
  display: none;

  @media (min-width: ${styles.desktopQuery}) {
    display: flex;
    justify-content: flex-end;
    flex: 1;
    user-select: none;
  }

  ${({ type }) =>
    type === 'mobile' &&
    `
    display: flex;
    font-size: 24px;
    font-family: ${styles.fontLight};

    @media(min-width: ${styles.desktopQuery}) {
      display: none;
    }
  `}
`

export const ThemeButtonContainer = styled.div`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  color: ${styles.hightAccent};
`

export const ThemeText = styled.span`
  margin-right: 1rem;
`
