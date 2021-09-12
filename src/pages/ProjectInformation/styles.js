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

export const TecnologiesAndSubDescriptionBox = styled.article`
  margin-top: 64px;
`

export const ListOfTecnologies = styled.section`
  display: flex;
  margin: 32px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  column-gap: 24px;
  row-gap: 24px;
`

export const SingleTecnologyStack = styled.article`
  display: flex;
  padding: 16px 40px;
  column-gap: 16px;
  border-radius: 8px;
  box-shadow: ${styles.lowShadow};
`

export const ConentForRecruiters = styled.div`
  display: grid;
  justify-items: center;
  row-gap: 1rem;
`
