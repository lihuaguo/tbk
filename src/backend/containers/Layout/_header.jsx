import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Router } from 'react-router'
// import { is, fromJS } from 'immutable';
import { Layout, Menu, Icon } from 'antd'
// import Config from '../../config/index';
const SubMenu = Menu.SubMenu
const { Header } = Layout

/**
 * 公共头部
 *
 * @export
 * @class Lheader
 * @extends {Component}
 */
 export default class HeaderContainer extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

	constructor(props, context) {
		super(props, context); //后才能用this获取实例化对象
	}
	// shouldComponentUpdate(nextProps, nextState) {
  //       // return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state),fromJS(nextState))
  // }
	toggle = () => {
		this.props.toggle(!this.props.collapsed);
  }

  logout= (e) => {
  	// 模拟退出
  	// if(e.key == 'logout') {
  	// 	Config.removeLocalItem(Config.localKey.userToken);
    // 		this.context.router.push({
    // 		pathname: '/login'
    // 	});
  	// }
  }
	render() {
		return (
			<Header className="layout-header">
	      <Icon className="trigger" type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'} onClick={this.toggle} />
	      <Menu mode="horizontal" onClick={this.logout}   className="layout-header-menu">
		        <SubMenu title={<span><Icon type="user" />sosout</span>}>
	              <Menu.Item key="logout">注销</Menu.Item>
		        </SubMenu>
			  </Menu>
	    </Header>
		)
	}
}
