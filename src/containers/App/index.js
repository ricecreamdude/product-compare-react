import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'

import {Home, NotFound, Header} from '../'

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="container mt-4">
          <Header></Header>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route component={NotFound}/>
          </Switch>
        </div>
      </div>
    )
  }
}

export default App
