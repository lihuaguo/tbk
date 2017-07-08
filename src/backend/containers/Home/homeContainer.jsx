import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'

import styles from './style/home.less'
import Bcrumb from '../../components/bcrumb/index'

import Layout from '../Layout/Layout'

import { Icon, Row, Col, Card, Steps, Button, message } from 'antd'

const Step = Steps.Step

class HomeContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      current: 0
    }
  }

  next() {
    const current = this.state.current + 1
    this.setState({ current })
  }

  prev() {
    const current = this.state.current - 1
    this.setState({ current })
  }

  render() {
    const steps = [{
          title: '下载',
          content: '<p>$&nbsp;&nbsp;&nbsp;git clone</p><p>$&nbsp;&nbsp;&nbsp;git clone https://github.com/sosout/react-antd.git</p><p>$&nbsp;&nbsp;&nbsp;cd react-antd</p>',
        }, {
          title: '安装',
          content: '<p>// 安装前请先确保已安装node和npm</p><p>// 需要提前在全局安装webpack和webpack-dev-server,如果已安装请忽略</p><p>$&nbsp;&nbsp;&nbsp;npm install webpack -g</p><p>$&nbsp;&nbsp;&nbsp;npm install webpack-dev-server -g</p><p>// 安装成功后,再安装依赖</p><p>$&nbsp;&nbsp;&nbsp;npm install</p>',
        }, {
          title: '运行',
          content: '<p>$&nbsp;&nbsp;&nbsp;npm run dev （正常编译模式，注意：index.html里必须手动引用app.css，{linkHtml}，否则没有样式）</p><p>$&nbsp;&nbsp;&nbsp;npm run hot （热替换编译模式，注意：热替换模式下index.html里去掉引用app.css）</p><p>$&nbsp;&nbsp;&nbsp;npm run dist （发布生产版本，对代码进行混淆压缩，提取公共代码，分离css文件）</p>',
        }];
    const { current } = this.state;
    return (
      <div className="home-container">
        <Bcrumb title="快速入门" />
        <Row>
          <Col span={24}>
            <Card title="项目前言" extra={<a href="https://github.com/sosout/react-antd">如果觉得不错的话，请star一下吧 😊</a>} bordered={false}>
              <p>本工程主要基于react + redux + immutable + less + ES6/7 + webpack + fetch + react-router + antd(1.x)实现的SPA后台管理系统模板。</p>
              <p>编码时间：8:00——9:30, 下班时间——24:00，其他时间要工作。代码未优化，处女座代码必须要优化。由于代码延后，先向大家说声抱歉。您有什么问题可以私信我<a href="https://segmentfault.com/u/sosout">segmentfault</a>。</p>
            </Card>
              <Card title="项目上手" className="mg-top20">
                  <Steps current={current}>
                    {steps.map(item => <Step key={item.title} title={item.title} />)}
                  </Steps>
                  <div className="steps-content" dangerouslySetInnerHTML={{__html: steps[this.state.current].content}}></div>
                  <div className="steps-action">
                    {
                      this.state.current < steps.length - 1
                      &&
                      <Button type="primary" onClick={() => this.next()}>下一步</Button>
                    }
                    {
                      this.state.current === steps.length - 1
                      &&
                      <Button type="primary" onClick={() => message.success('恭喜您，大牛!')}>完成</Button>
                    }
                    {
                      this.state.current > 0
                      &&
                      <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
                        上一步
                      </Button>
                    }
                  </div>
              </Card>
              <Card title="访问" className="mg-top20">
                  <p>在浏览器地址栏输入http://127.0.0.1:8888</p>
              </Card>
              <Card title="项目说明" className="mg-top20">
                  <p>此项目是本人空余时间搭建的。希望大家提供宝贵的意见和建议，谢谢。</p>
              </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Layout(connect()(HomeContainer), 'Home')
