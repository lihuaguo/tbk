import React from 'react'
import ReactDOM from 'react-dom'
import { Button } from 'antd'
import './main.less'

const App = () => (
  <div>
    <Button>Hello worldu</Button>
  </div>
)

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
