import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Login, Homepage } from './components'

const Main = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/Login/:usertype" component={Login} />
        <Route exact path="/homepage" component={Homepage} />
      </Switch>
    </Router>
  )
}

export default Main
