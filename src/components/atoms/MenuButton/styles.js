import styled from '@emotion/styled'
import { styles } from 'config/styles'

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

  ::before,
  ::after {
    content: '';
    position: absolute;
    left: 0;
    height: 3px;
    width: 100%;
    background-color: ${styles.darkAccent};
    border-radius: 999px;
  }

  ::before {
    transform: translateY(8px);
  }
  ::after {
    transform: translateY(-8px);
  }
`
