import styled from '@emotion/styled'
import { styles } from 'config/styles'

export const PageContainer = styled.section`
  width: 100%;
  padding-top: 48px;
  padding-bottom: 120px;
  margin-left: auto;
  margin-right: auto;
  max-width: ${styles.headerMaxWidth};
`

export const VerticalLine = styled.div`
  height: 100px;
  width: 1px;
  margin: 40px auto;
  background-color: ${styles.lowAccent};
`

export const BoxSection = styled.div`
  display: grid;
  row-gap: 8px;
`
