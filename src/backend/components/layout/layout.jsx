import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

// 公共头部
// import { Lheader } from './lheader';
// 公共菜单
import { Lmenu } from './lmenu'
// 公共底部
import { Lfooter } from './lfooter'

// 布局样式
import './style/layout.less';

import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class LayoutMain extends Component {
  constructor(props) {
    super(props)
    const collapsed = localStorage.getItem('COLLAPSED') == 'YES' ? true : false;
    this.state = {
			collapsed: collapsed,
    	mode: collapsed ? 'vertical' : 'inline',
		}
  }

  onCollapse = (collapsed) => {
		if(collapsed) localStorage.setItem('COLLAPSED', 'YES'); else Config.localItem('COLLAPSED', 'NO');
	    this.setState({
	      collapsed,
	      mode: collapsed ? 'vertical' : 'inline'
	    });
	}
	toggle = (collapsed) => {
		if(collapsed) localStorage.setItem('COLLAPSED', 'YES'); else Config.localItem('COLLAPSED', 'NO');
	    this.setState({
	      collapsed: collapsed,
	      mode: collapsed ? 'vertical' : 'inline'
	    });
  	}
  	shouldComponentUpdate(nextProps, nextState) {
        // return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state),fromJS(nextState))
    }
  render() {
    return (
      <Layout className="layout">
	        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
		        <div className="layout-logo">
		        	<Link to="/home">
			        	<span className="logo-text">logoText</span>
		        	</Link>
		        </div>
	        </Sider>
	        <Layout>

	          <Content className="layout-content">
	           	{this.props.children}
	          </Content>
	          <Lfooter />
	        </Layout>
	    </Layout>
    )
  }
}

export default LayoutMain
