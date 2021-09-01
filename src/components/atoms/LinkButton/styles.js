import styled from '@emotion/styled'
import { Link as LinkFromWouter } from 'wouter'
import { styles } from 'config/styles'

export const Link = styled(LinkFromWouter)`
  font-size: 24px;
  text-decoration: none;
  color: ${styles.mediumAccent};
  font-family: ${styles.fontLight};

  :hover {
    color: ${styles.darkAccent};
  }
`

export const Icon = styled.span`
  margin-left: 0.5rem;
`
