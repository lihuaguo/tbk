import React from 'react'
import { Route, Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import { Layout } from 'antd'
const { Header, Footer, Sider, Content } = Layout

import HeaderContainer from './_header'
import SiderContainer from './_sider'

import './style/layout.less'

export default (WrappedComponent, name) => {
  class LayoutComponent extends React.Component {
    constructor(props) {
      super(props);
		  const collapsed = localStorage.getItem('COLLAPSED') == 'YES' ? true : false
      this.state = {
        collapsed: collapsed,
        mode: collapsed ? 'vertical' : 'inline',
      }
    }

    onCollapse = (collapsed) => {
	    if (collapsed) {
        localStorage.setItem('COLLAPSED', 'YES')
      } else {
        localStorage.setItem('COLLAPSED', 'NO')
      }
	    this.setState({
	      collapsed,
	      mode: collapsed ? 'vertical' : 'inline'
	    })
	  }
  	toggle = (collapsed) => {
      if (collapsed) {
        localStorage.setItem('COLLAPSED', 'YES')
      } else {
        localStorage.setItem('COLLAPSED', 'NO')
      }
      this.setState({
        collapsed: collapsed,
        mode: collapsed ? 'vertical' : 'inline'
      })
    }
    render() {
      return (
        <Layout className="layout">
          <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
            <div className="layout-logo">
		        	<Link to="/home">
			        	<span className="logo-text">TKB后台</span>
		        	</Link>
		        </div>
            <SiderContainer mode={ this.state.mode }/>
          </Sider>

          <Layout>
            <HeaderContainer collapsed={this.state.collapsed} toggle={ collapsed => this.toggle(collapsed) }/>
            <Content className="layout-content">
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
