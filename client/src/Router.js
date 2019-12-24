import React from 'react'
import { Switch, Route } from 'react-router-dom'
import LandingContainer from './containers/LandingContainer'
import LipsticksContainer from './containers/LipsticksContainer'
import InventoryContainer from './containers/InventoryContainer'

export default function Router() {
  return (
    <Switch>
      <Route exact strict path="/" component={LandingContainer}/>
      <Route exact strict path='/lipsticks' component={LipsticksContainer}/>
      <Route exact strict path='/inventory' component={InventoryContainer}/>
    </Switch>
  )
}

