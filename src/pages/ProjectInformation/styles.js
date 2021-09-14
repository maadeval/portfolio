import styled from '@emotion/styled'
import { styles } from 'config/styles'

export const PageContainer = styled.section`
  width: 100%;
  padding-top: 48px;
  padding-bottom: 120px;
`

export const ButtonContainer = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
`

export const Image = styled.img`
  border-radius: 16px;
  box-sizing: border-box;
  box-shadow: ${styles.lowShadow};
  width: 100%;
`

export const GalleryOfImages = styled.div`
  padding-top: 40px;
`

export const SecondaryImagesBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 64px auto;
  grid-gap: 16px;
  max-width: 900px;
`

export const ConentForRecruiters = styled.div`
  display: grid;
  justify-items: center;
  row-gap: 1rem;
`
