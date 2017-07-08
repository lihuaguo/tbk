import React from 'react'
import { Route, Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import { Layout } from 'antd'
const { Header, Footer, Sider, Content } = Layout

export default (WrappedComponent, name) => {
  class LayoutComponent extends React.Component {
    constructor() {
      super()
        console.log('constructor')
    }
    componentWillMount() {
    }

    render() {
      return (
        <Layout>
          <Sider>Sider</Sider>
          <Layout>
            <Header>Header</Header>
            <Content>
                <WrappedComponent {...this.props} />
            </Content>
            <Footer>Footer</Footer>
          </Layout>
        </Layout>
      )
    }
  }
  return LayoutComponent
}
