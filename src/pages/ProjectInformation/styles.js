import styled from '@emotion/styled'
import { styles } from 'config/styles'

export const PageContainer = styled.section`
  margin-top: 120px;
  @media (min-width: ${styles.desktopQuery}) {
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
  @media (min-width: ${styles.desktopQuery}) {
    box-shadow: ${styles.mediumShadow};
    transform: rotateY(8deg);
  }
`

export const HeaderContainer = styled.header`
  text-align: left;
  margin-top: 1rem;
`

export const ButtonsContainer = styled.div`
  text-align: left;
  display: flex;
  align-items: center;
`
