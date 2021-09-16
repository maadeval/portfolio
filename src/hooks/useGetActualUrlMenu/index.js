import { linksToToggleMenu } from 'config/globalLinks'
import { useEffect, useState } from 'react'
import { useLocation } from 'wouter'

const useGetActualUrlMenu = () => {
  const [actualUrl] = useLocation()
  const [pageName, setPageName] = useState('')

  useEffect(() => {
    const linkDescriptionFound = linksToToggleMenu.find(
      ({ url }) => url === actualUrl
    )
    setPageName(linkDescriptionFound?.title || '')
  }, [actualUrl])

  return { pageName }
}

export default useGetActualUrlMenu
