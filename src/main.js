import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Button } from 'antd'
import Home from './components/Home'
import configureStore from './store';
//注意，不要直接这样做，要区分开发环境和生产环境
import DevTools from './containers/DevTools';

import './main.less'

const store = configureStore()


ReactDOM.render(
  <Provider store={store}>
    <div>
      <Home />
      <DevTools />
    </div>
  </Provider>,
  document.getElementById('app')
)
