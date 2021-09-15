import IconGitHub from 'components/ui/IconGitHub'
import IconReact from 'components/ui/IconReact'
import IconFirebase from 'components/ui/IconFirebase'

import netflix from 'assets/img/netflix.png'
import dorianDesignsAvatar from 'assets/img/dorian-designs-avatar.jpg'
import midudevAvatar from 'assets/img/midudev-avatar.jpg'

export const webProjects = [
  {
    title: 'Voy al Gym',
    description:
      'Un sitio destinado a deportistas y dueños de gimnasios. La idea es simple, ayudar a los dueños a gestionar los cupos de sus clases por hora y día. Y permitirle a los socios registrarse a un cupo limitado solo con un click.',
    extraDescription:
      'Si quieres ver la demo sin tener que registrarte dentro de la app, puedes ver el video en YouTube. Donde resumo el funcionamiento y la ruta de usuario del proyecto.',
    img: netflix,
    images: [netflix, netflix, netflix, netflix],
    url: 'https://github.com/Mateoac12/goGym',
    codeUrl: 'https://github.com/Mateoac12/goGym',
    videoUrl: 'https://github.com/Mateoac12/goGym',
    icon: <IconGitHub />,
    tecnologies: [
      {
        name: 'React',
        icon: <IconReact />,
      },
      {
        name: 'Firebase',
        icon: <IconFirebase />,
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
    img: dorianDesignsAvatar,
    title: 'Dorian Desings',
    url: 'https://www.youtube.com/channel/UCzuwt7Pi_VB8cP5q5UE4u-A',
  },
]
