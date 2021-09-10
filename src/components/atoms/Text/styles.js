import styled from '@emotion/styled'
import { styles } from 'config/styles'

import { handleSelectAlign } from './handleSelectAlign'
import { handleSelectStyleFromType } from './handleSelectStyleFromType'

export const Paragraph = styled.p`
  font-size: 16px;
  text-align: center;

  @media (min-width: ${styles.desktopQuery}) {
    padding-top: 40px;
    margin-top: 0;
    ${({ align }) => handleSelectAlign(align)}
  }

  ${({ type }) => handleSelectStyleFromType(type)}
`
