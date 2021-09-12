import { useEffect, useState } from 'react'

const useFindProjectInformation = (listOfProjects, projectName) => {
  const [projectInfo, setProjectInfo] = useState({})

  useEffect(() => {
    const projectFound = listOfProjects.find(
      ({ title }) => decodeURI(projectName) === title
    )
    setProjectInfo(projectFound)
  }, [])

  return { projectInfo }
}

export default useFindProjectInformation
