import styled from '@emotion/styled'
import { styles } from 'config/styles'

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
