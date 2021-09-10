import styled from '@emotion/styled'
import { styles } from 'config/styles'

export const PageContainer = styled.section`
  width: 100%;
  padding-top: 48px;
`

export const ContainerUiProjects = styled.article`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  column-gap: 24px;
  row-gap: 24px;
  margin-top: 80px;
  margin-bottom: 80px;

  @media (min-width: ${styles.desktopQuery}) {
    grid-template-columns: repeat(3, 1fr);
  }
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
    box-sizing: border-box;
    font-size: 16px;
    background-color: ${styles.transparentBackground};
    color: ${styles.darkAccent};

    opacity: 0;
    font-size: 24px;
    padding: 25% 0 1rem;
    background: linear-gradient(transparent 10%, #fff 90%);
    transition: opacity 0.2s ease;
  }
  :hover::before {
    opacity: 1;
  }

  :hover > a {
    transform: translateY(0) translateX(-50%);
  }
`

export const LinkTo = styled.a`
  text-decoration: none;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  color: ${styles.darkAccent};
  position: absolute;
  right: 8px;
  top: 0;
  background-color: ${styles.transparentBackground};
  column-gap: 8px;
  cursor: pointer;

  margin-top: 0.5rem;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 99px;
  width: max-content;
  padding: 0.5rem 1rem;

  transform: translateX(-50%) translateY(calc(-100% - 0.5rem));
  transition: transform 0.2s ease;
`

export const UIImage = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
  display: block;
  margin: 0;
  background-color: ${styles.lowAccent};
`

export const TeacherAndSocialMediaBox = styled.div`
  display: flex;
  flex-direction: column;
  column-gap: 20px;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
  margin-bottom: 24px;

  @media (min-width: ${styles.desktopQuery}) {
    flex-direction: row;
  }
`
export const MapTeachersBox = styled.p`
  display: flex;
  align-items: center;
  column-gap: 8px;
`

export const Point = styled.span`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: ${styles.hightAccent};
`
