import React from 'react'
import { Route, Link, Redirect } from 'react-router-dom'

class Auth extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      token: ''
    }
  }
  render() {
    const { component } = this.props
    return (
      this.state.token ? <component {...this.props}/> : <Redirect to="/login"/>
    )
  }
}

export default Auth
