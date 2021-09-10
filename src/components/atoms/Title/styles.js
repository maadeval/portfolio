import styled from '@emotion/styled'
import { handleSelectStylesFromType } from './selectTitleStylesFromType'

export const Text = styled.h1`
  font-weight: 400;
  margin-top: 0;
  margin-bottom: 0;
  ${({ type }) => handleSelectStylesFromType(type)}
`
