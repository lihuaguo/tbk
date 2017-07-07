import React from 'react'
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom'
import styles from './common.less'
import routes from './routes'
import { Layout } from 'antd'

import Login from './containers/Login/loginContainer'
import App from './containers/app'
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

// const PrivateRoute = ({component: Component, ...rest}) => (
//   <Route {...rest} render={ props => <Component {...props} /> } />
// )

class PrivateRoute extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { component } = this.props;
    return {
      <Layout>
        <Sider>Sider</Sider>
        <Layout>
          <Header>Header</Header>
          <Content>
              <component {...this.props} />
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    }
  }
}

class BackendApp extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute exact path="/test" component={test} />
          <Route path="/login" component={Login} />
        </Switch>
      </Router>
    )
  }
}


export default BackendApp
