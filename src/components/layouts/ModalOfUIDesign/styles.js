import styled from '@emotion/styled'
import { styles } from 'config/styles'

export const ProjectContainer = styled.div`
  cursor: zoom-out;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Image = styled.img`
  border-radius: 10px;
  width: auto;
  max-width: 100%;

  @media (min-width: ${styles.desktopQuery}) {
    width: 100%;
    max-width: 1280px;
  }
`
