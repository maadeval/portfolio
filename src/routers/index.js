import { Route, Switch } from 'wouter'

import Home from 'pages/Home'
import Error404 from 'pages/Error404'
import MyHistory from 'pages/MyHistory'
import UIThings from 'pages/UIThings'
import Projects from 'pages/Projects'
import Contact from 'pages/Contact'

const PageRouters = () => {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about-me" component={MyHistory} />
      <Route path="/ui-design/:title?" component={UIThings} />
      <Route path="/projects" component={Projects} />
      <Route path="/contact" component={Contact} />
      <Route component={Error404} />
    </Switch>
  )
}

export default PageRouters
