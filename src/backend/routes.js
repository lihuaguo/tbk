import Login from './containers/Login/loginContainer'
import Home from './containers/Home/homeContainer'
import Auth from './containers/Auth/Auth'

const routes = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/',
    component: Auth,
    routes: [
      {
        path: '/',
        component: Home
      }
    ]
  }
]

export default routes;
