import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import Auth from './containers/Auth/auth'
import Login from './containers/Login/login'
import Home from './components/Home'
import './common.less'

class BackendApp extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Auth path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
        </div>
      </Router>
    )
  }
}


export default BackendApp
