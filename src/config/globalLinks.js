import IconDownload from 'components/ui/IconDownload'
import IconGitHub from 'components/ui/IconGitHub'
import IconLinkedIn from 'components/ui/IconLinkedIn'

export const linksToToggleMenu = [
  {
    title: 'Inicio',
    url: '/',
    icon: null,
  },
  {
    title: 'Mi Historia',
    url: '/about-me',
    icon: null,
  },
  {
    title: 'Cosas de UI',
    url: '/ui-design',
    icon: null,
  },
  {
    title: 'Proyectos',
    url: '/projects',
    icon: null,
  },
  {
    title: 'Formas de contacto',
    url: '/contact',
    icon: null,
  },
  {
    title: 'Curriculum',
    url: '/curriculum',
    icon: <IconDownload />,
  },
]

export const socialMediaLinks = [
  {
    title: 'GitHub',
    url: 'https://github.com/Mateoac12',
    icon: <IconGitHub />,
  },
  {
    title: 'LinkedIn',
    url: 'https://www.linkedin.com/in/mateo-%C3%A1lvarez-731313188/',
    icon: <IconLinkedIn />,
  },
]
