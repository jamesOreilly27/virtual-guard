import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Login } from './components'

const Main = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/Login/:usertype" component={Login} />
      </Switch>
    </Router>
  )
}

export default Main
