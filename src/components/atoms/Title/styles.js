import styled from '@emotion/styled'
import { styles } from 'config/styles'
import { handleSelectStylesFromType } from './selectTitleStylesFromType'

export const Text = styled.h1`
  color: ${styles.darkAccent};
  font-weight: 400;
  margin-top: 0;
  margin-bottom: 0;
  ${({ type }) => handleSelectStylesFromType(type)}
`
