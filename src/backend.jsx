import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Button } from 'antd'
import BackendApp from './backend/index'
import configureStore from './backend/redux/store';
//注意，不要直接这样做，要区分开发环境和生产环境
import DevTools from './backend/containers/DevTools';

const store = configureStore()


ReactDOM.render(
  <Provider store={store}>
    <div>
      <BackendApp />
      <DevTools />
    </div>
  </Provider>,
  document.getElementById('app')
)
