import IconDribbble from 'components/ui/IconDribbble'

import emprendeAprendiendo from 'assets/img/emprende-aprendiendo.jpg'
import mercadoLibre from 'assets/img/mercado-libre.png'
import netflix from 'assets/img/netflix.png'
import salomonSanchez from 'assets/img/salomon-sanchez-avatar.jpg'

export const uiProjects = [
  {
    title: 'Netflix',
    img: netflix,
    url: 'https://dribbble.com/shots/16051253-Netflix-Redesign',
    description:
      'Fue uno de mis primeros trabajos en Figma. Me gustó sobre todo por ver lo bien que queda la transparencia en enlaces no activos y el contraste de los colores claves de Netflix.',
  },
  {
    title: 'Mercado Libre',
    img: mercadoLibre,
    url: 'https://dribbble.com/shots/16051229-E-commerce-MeLi-Redesign',
    description:
      'Una alternativa que no refleja el color principal de la marca, pero que utiliza sus colores secundarios para resaltar el logo de la marca y el propio producto en búsqueda.',
  },
  {
    title: 'Emprende Aprendiendo',
    img: emprendeAprendiendo,
    url: 'https://dribbble.com/shots/16969757-Emprende-Aprendiendo',
    description:
      'Este es el rediseño de un sitio que existe actualmente. Una de las cosas bellas del diseño UI es que puedes crear tus propias interpretaciones de cómo te gustaría que se viera un producto, y es mucho más satisfactorio cuando ese producto lo usas.',
  },
]

export const dribbbleAccount = {
  title: 'Dribbble',
  url: 'https://dribbble.com/madeval',
  icon: <IconDribbble />,
}

export const uiProjectsTeach = [
  {
    img: salomonSanchez,
    title: 'Salomon Sanchez',
    url: 'https://www.youtube.com/c/SalomonSanchez',
  },
]
