import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'

import styles from './style/home.less'
import Bcrumb from '../../components/bcrumb/index'

import LayoutWrapper from '../Layout/Layout.jsx'
import Axios from 'axios'

import { Icon, Row, Col, Card, Steps, Button, message, Tag } from 'antd'

const Step = Steps.Step

class HomeContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      navigator: [],
      pageList: []
    }
  }

  componentWillMount() {
    let q = '女装'
    const that = this
    Axios.get('/search?q=' + q).then(function(response) {
      that.setState({
        pageList: response.data.data.pageList,
        navigator: response.data.data.navigator,
      })
    }).catch(function (error) {
      console.log(error);
    });
  }

  render() {
    const { pageList, navigator } = this.state;
    const cards = pageList.map(item => {
      return (
        <li key={item.auctionId}>
          <Card>
            <div className="custom-image">
              <a href={item.auctionUrl}><img alt="example" width="100%" src={item.pictUrl} /></a>
            </div>
            <div className="custom-card">
              <a href={item.auctionUrl}><div dangerouslySetInnerHTML={{__html: item.title}} /></a>
              <p>{item.shopTitle}</p>
              <p>
                <Tag color="pink">折扣价: {item.zkPrice}</Tag>
                <Tag color="red">收入比率: {item.tkRate}</Tag>
              </p>
              <p>
                <span>月销量: {item.biz30day}</span>
                <span>佣金: {item.tkCommFee}</span>
              </p>
            </div>
          </Card>
        </li>
      )
    })
    console.log(cards)
    return (
      <div className="home-container">
        <div style={{ background: '#ECECEC', padding: '30px' }}>
          <ul className="list">
            {cards}
          </ul>
        </div>
      </div>
    )
  }
}

export default LayoutWrapper(connect()(HomeContainer))
