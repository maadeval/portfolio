import { useLocation } from 'wouter'

export const useRedirectPage = (staticPath) => {
  const [, setLocation] = useLocation()
  const setRedirectPage = (url) => setLocation(`${staticPath}/${url}`)

  return { setRedirectPage }
}
