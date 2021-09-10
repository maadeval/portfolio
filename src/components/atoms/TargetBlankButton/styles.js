import styled from '@emotion/styled'

import { styles } from 'config/styles'
import { BUTTONS_TYPES } from 'config/variableOfComponents'
import { handleSelectStyleFromType } from './selectStyleFromType'

export const Icon = styled.span`
  margin-left: 0.5rem;
  display: inline-flex;
  align-items: center;

  ${({ type }) => type === BUTTONS_TYPES.icon && `margin: 0;`}

  @media (min-width: ${styles.desktopQuery}) {
    width: 16px;
  }
`

export const Link = styled.a`
  ${({ type }) => handleSelectStyleFromType(type)}
`
