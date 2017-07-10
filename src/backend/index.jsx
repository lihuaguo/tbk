import React from 'react'
import { HashRouter as Router, Switch, Redirect, Route, Link } from 'react-router-dom'
import styles from './common.less'
// import routes from './routes'
import { Layout } from 'antd'

import Login from './containers/Login/loginContainer'
// import App from './containers/Home/HomeContainer'
import Home from './containers/Home/homeContainer'

const { Header, Footer, Sider, Content } = Layout


const test = () => (
  <div>
    <p>Test Page</p>
    <p>Test Page</p>
    <p>Test Page</p>
    <p>Test Page</p>
    <p>Test Page</p>
    <p>Test Page</p>
    <p>Test Page</p>
    <p>Test Page</p>
    <p>Test Page</p>
    <p>Test Page</p>
    <p>Test Page</p>
    <p>Test Page</p>
    <p>Test Page</p>
    <p>Test Page</p>
    <p>Test Page</p>
    <p>Test Page</p>
    <p>Test Page</p>
    <p>Test Page</p>
    <p>Test Page</p>
    <p>Test Page</p>
  </div>
)

const fakeAuth = {
  isAuthenticated: true,
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100) // 模拟异步。
  },
  signout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100)
  }
}

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
  <Route {...rest} render={props => (
    fakeAuth.isAuthenticated ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
)}

class BackendApp extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute path="/test" component={test} />
          <Route path="/login" component={Login} />
        </Switch>
      </Router>
    )
  }
}


export default BackendApp
