import styled from '@emotion/styled'
import { styles } from 'config/styles'

import { handleChangeStylesIfClicked } from './stylesIfButtonClicked'

export const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  width: 24px;
  height: 24px;
`

export const Lines = styled.div`
  width: 100%;
  height: 3px;
  background-color: ${styles.darkAccent};
  border-radius: 999px;

  transition: background-color 0.2s ease;

  ::before,
  ::after {
    content: '';
    position: absolute;
    left: 0;
    height: 3px;
    width: 100%;
    background-color: ${styles.darkAccent};
    border-radius: 999px;
    transition: transform 0.2s ease;
  }

  ::before {
    transform: translateY(8px) rotate(0);
  }
  ::after {
    transform: translateY(-8px) rotate(0);
  }

  ${({ isClicked }) => handleChangeStylesIfClicked(isClicked)}
`
