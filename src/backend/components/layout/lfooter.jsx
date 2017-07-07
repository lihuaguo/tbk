import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { layout } from 'antd'
const { Footer } = layout

export class Lfooer extends Component {
  constructor(props, context) {
    super(props, context)
  }
  render() {
    return (
      <Footer className="layout-footer">
        网站底部
      </Footer>
    )
  }
}
