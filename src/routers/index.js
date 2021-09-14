import { Redirect, Route, Switch } from 'wouter'

import Home from 'pages/Home'
import MyHistory from 'pages/MyHistory'
import UIThings from 'pages/UIThings'
import Projects from 'pages/Projects'
import ProjectInformation from 'pages/ProjectInformation'
import Contact from 'pages/Contact'

const PageRouters = () => {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about-me" component={MyHistory} />
      <Route path="/ui-design/:title?" component={UIThings} />
      <Route path="/projects" component={Projects} />
      <Route path="/projects/:title" component={ProjectInformation} />
      <Route path="/contact" component={Contact} />
      <Redirect to="/" />
    </Switch>
  )
}

export default PageRouters
