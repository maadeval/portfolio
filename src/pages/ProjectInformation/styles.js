import styled from '@emotion/styled'
import { styles } from 'config/styles'

export const PageContainer = styled.section`
  @media (min-width: ${styles.desktopQuery}) {
    margin-top: 120px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 40px;
  }
`

export const ImagesArticleContainer = styled.article`
  perspective: 1000px;
`

export const ImageOfGallery = styled.img`
  width: 100%;
  box-shadow: ${styles.mediumShadow};
  @media (min-width: ${styles.desktopQuery}) {
    transform: rotateY(8deg);
  }
`

export const HeaderContainer = styled.header`
  text-align: left;
  margin-top: 1rem;
`

export const ButtonsContainer = styled.div`
  text-align: left;
`
