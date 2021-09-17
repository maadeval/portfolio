import { Redirect, Route, Switch } from 'wouter'

import Contact from 'pages/Contact'
import Curriculum from 'pages/Curriculum'
import Home from 'pages/Home'
import MyHistory from 'pages/MyHistory'
import ProjectInformation from 'pages/ProjectInformation'
import Projects from 'pages/Projects'
import UIThings from 'pages/UIThings'

const PageRouters = () => {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about-me" component={MyHistory} />
      <Route path="/ui-design/:title?" component={UIThings} />
      <Route path="/projects" component={Projects} />
      <Route path="/projects/:title" component={ProjectInformation} />
      <Route path="/contact" component={Contact} />
      <Route path="/curriculum" component={Curriculum} />
      <Redirect to="/" />
    </Switch>
  )
}

export default PageRouters
