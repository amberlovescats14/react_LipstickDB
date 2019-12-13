import React from 'react'
import { Switch, Route } from 'react-router-dom'
import LandingContainer from './containers/LandingContainer'
import LipsticksContainer from './containers/LipsticksContainer'

export default function Router() {
  return (
    <Switch>
      <Route exact strict path="/" component={LandingContainer}/>
      <Route exact strict path='/lipsticks' component={LipsticksContainer}/>
    </Switch>
  )
}

