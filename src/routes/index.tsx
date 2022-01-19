import React, { Component } from 'react'
import { HashRouter as Router, withRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

import IndexPage  from 'pages/index'
import LoginPage from 'pages/login'
import App from '../App'

const allRouters = [
  {
    path: '/index',
    component: IndexPage,
    title: '',
    exact: false
    
  },
  {
    path: '/login',
    component: LoginPage,
    title: '',
    exact: false
  },
]

const AppWrap = withRouter(App)

class AppRoute extends Component {
  render() {
    return (
      <div>
        <Router>
          <AppWrap>
            { renderRoutes(allRouters.map(item => ({...item, key: item.path}))) }
          </AppWrap>
        </Router>
      </div>
    )
  }
}

export default AppRoute

