import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Breadcrumb, Icon } from 'antd'
import { Link } from 'react-router-dom'
import styles from './style/bcrumb.less'

class Bcrumb extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Breadcrumb className="bread-crumb">
        <Breadcrumb.Item>
            <Link to="/home"><Icon type="home" /><span>主页</span></Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
            <Icon type={this.props.icon ? this.props.icon : 'laptop'} /><span>{ this.props.title }</span>
        </Breadcrumb.Item>
      </Breadcrumb>
    )
  }
}

export default Bcrumb
