import React from 'react'
import PropTypes from 'prop-types'
import { Switch, Route, Link } from 'react-router-dom'
import { Layout } from 'antd'

import Home from '../containers/Home/homeContainer'

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
class App extends React.Component {
  render() {
    return (
      <Layout>
        <Sider>Sider</Sider>
        <Layout>
          <Header>Header</Header>
          <Content>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/test" component={Home} />
            </Switch>
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    )
  }
}


export default App
