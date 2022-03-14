import IconGitHub from 'components/ui/IconGitHub'

import votaapp from 'assets/img/votaapp.jpg'
import votaapp1 from 'assets/img/votaapp1.jpg'
import votaapp2 from 'assets/img/votaapp2.jpg'
import tomatito from 'assets/img/tomatito.jpg'
import tomatito1 from 'assets/img/tomatito1.jpg'
import tomatito2 from 'assets/img/tomatito2.jpg'
import randomhouse from 'assets/img/randomhouse.jpg'
import randomhouse1 from 'assets/img/randomhouse1.jpg'
import randomhouse2 from 'assets/img/randomhouse2.jpg'
import midudevAvatar from 'assets/img/midudev-avatar.jpg'
import goncyAvatar from 'assets/img/goncy-avatar.jpg'
import IconNext from 'components/ui/IconNext'
import IconReact from 'components/ui/IconReact'
import TypeScriptIcon from 'components/ui/TypeScriptIcon'
import TailwindIcon from 'components/ui/TailwindIcon'
import ChakraIcon from 'components/ui/ChakraIcon'
import CypressIcon from 'components/ui/CypressIcon'
import JestIcon from 'components/ui/JestIcon'

export const webProjects = [
  {
    title: 'Vota.app',
    description:
      '¿Siempre hay un grupo de Whatsapp en donde cuesta organizar una reunión? ¡Vota.app viene a ayudarte! Puedes crear una reunión y compartirla con tus amigos, de esta forma se organizarán mejor y más rápido.',
    extraDescription: null,
    aboutProject:
      'Desde el origen la aplicación fue pensada como un MVP (producto mínimo viable), y el hecho de hacerla en solo dos días fue un gran desafío, no solo por el tiempo, sino por enfrentarme a nuevas tecnologías que quería probar (como lo fueron Prisma, NextAuth y Railway.js).Lo que aprendí, más allá del código, fue entender que este tipo de aplicaciones se pueden hacer, y cambiar el paradigma de siempre querer entregar un producto completo a la primera entrega.',
    img: votaapp,
    images: [votaapp1, votaapp2],
    url: 'https://vota-app.vercel.app/',
    codeUrl: 'https://github.com/Mateoac12/vota-app',
    videoUrl: null,
    icon: <IconGitHub />,
    tecnologies: [
      {
        name: 'Next.js',
        icon: <IconNext />,
      },
      {
        name: 'TypeScript',
        icon: <TypeScriptIcon />,
      },
      {
        name: 'TailwindCSS',
        icon: <TailwindIcon />,
      },
    ],
  },
  {
    title: 'Random House',
    description:
      'Desarrollo web destinado a mejorar la experiencia de usuario por parte del cliente a la hora de realizar sus pedidos, y brindar al empleado información más detallada y serializada del mismo.',
    extraDescription:
      'El proyecto se planteó con fines lucrativos, por lo que el código del mismo no es público. Aun así si desea conocer un poco más el planteo o ideación del mismo, se puede hablar sin problema.',
    aboutProject:
      'Las cartas digitales dentro de los bares se han popularizado en estos últimos meses con la llegada de la pandemia, sin embargo el uso de ellas ha sido muchas veces por medio de un documento PDF de Google Sheet. Pero qué tal si llevamos esto a otro nivel? La idea es crear un catálogo de productos con mecánica “Pedido Ya” y poder hacer el pedido por medio del checkout de la aplicación, dándole al usuario mayor información y control sobre su pedido, y una gestión organizada al local comercial.',
    img: randomhouse,
    images: [randomhouse1, randomhouse2],
    url: 'https://random-house-madeval.vercel.app/',
    codeUrl: null,
    videoUrl: null,
    icon: <IconGitHub />,
    tecnologies: [
      {
        name: 'Next.js',
        icon: <IconNext />,
      },
      {
        name: 'TypeScript',
        icon: <TypeScriptIcon />,
      },
      {
        name: 'Chakra UI',
        icon: <ChakraIcon />,
      },
      {
        name: 'Cypress',
        icon: <CypressIcon />,
      },
      {
        name: 'Jest',
        icon: <JestIcon />,
      },
    ],
  },
  {
    title: 'Tomatito',
    description:
      '¡Un Pomodoro con distintas metodologías dentro de él! Puedes elegir una de las 3 que hay, y cada día se guardará el progreso que hiciste en tus tareas! Así podrás trabajar duro y con descansos merecidos.',
    extraDescription: null,
    aboutProject:
      'El método Pomodoro es genial y hay muchos sitios web que tienen la posibilidad de usarlo. Pero... ¿Todos se adaptan a las necesidades del usuario? En mi caso no 😥 por eso cree uno a mi gusto! y con las metodologías que más uso en mi dia a dia. Tomatito es una aplicación que te ayudará a mejorar tu tiempo! Y con una bonita interfaz ✨',
    img: tomatito,
    images: [tomatito1, tomatito2],
    url: 'https://tomatito.vercel.app/',
    codeUrl: 'https://github.com/Mateoac12/pomodoro',
    videoUrl: null,
    icon: <IconGitHub />,
    tecnologies: [
      {
        name: 'React',
        icon: <IconReact />,
      },
      {
        name: 'TypeScript',
        icon: <TypeScriptIcon />,
      },
      {
        name: 'TailwindCSS',
        icon: <TailwindIcon />,
      },
    ],
  },
]

export const githubAccount = {
  title: 'GitHub',
  url: 'https://github.com/Mateoac12',
  icon: <IconGitHub />,
}

export const webProjectsTeach = [
  {
    img: midudevAvatar,
    title: 'Midudev',
    url: 'https://www.youtube.com/channel/UC8LeXCWOalN8SxlrPcG-PaQ',
  },
  {
    img: goncyAvatar,
    title: 'Goncy',
    url: 'https://www.youtube.com/c/GonzaloPozzo',
  },
]
