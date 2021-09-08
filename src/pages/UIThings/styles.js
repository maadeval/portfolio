import styled from '@emotion/styled'
import { styles } from 'config/styles'

export const PageContainer = styled.section`
  width: 100%;
  padding-top: 48px;
`

export const ContainerUiProjects = styled.article`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  column-gap: 24px;
  row-gap: 24px;
  margin-top: 64px;
`

export const UiImageContain = styled.figure`
  display: block;
  margin: 0;
  cursor: zoom-in;
  position: relative;
  box-shadow: ${styles.mediumShadow};
  border-radius: 8px;
  overflow: hidden;

  ::before {
    content: ${({ title }) => `'${title}'`};
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    padding: 1rem;
    box-sizing: border-box;
    font-size: 16px;
    background-color: ${styles.transparentBackground};
    color: ${styles.darkAccent};
    transform: translateY(100%);
    transition: transform 0.2s ease;
  }
  :hover::before {
    transform: translateY(0);
  }

  :hover > a {
    transform: translateY(0);
  }
`

export const LinkTo = styled.a`
  text-decoration: none;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  color: ${styles.darkAccent};
  padding: 0.5rem;
  position: absolute;
  right: 8px;
  top: 0;
  background-color: ${styles.transparentBackground};
  border-radius: 0 0 8px 8px;
  column-gap: 8px;
  cursor: pointer;

  transform: translateY(-100%);
  transition: transform 0.2s ease;
`

export const UIImage = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
  display: block;
  margin: 0;
`
