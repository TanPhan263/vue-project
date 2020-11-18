import Vue from 'vue'
import Router from 'vue-router'

// Containers
const TheContainer = () => import('@/containers/TheContainer')

// Views
const Dashboard = () => import('@/views/Dashboard')
const Charts = () => import('@/views/charts/Charts')
const Widgets = () => import('@/views/widgets/Widgets')

// Views - Pages
const Page404 = () => import('@/views/pages/Page404')
const Page500 = () => import('@/views/pages/Page500')
const Login = () => import('@/views/pages/Login')
const Register = () => import('@/views/pages/Register')

// Users
const Users = () => import('@/views/users/Users')
const User = () => import('@/views/users/User')
//store
const Store = () => import('@/views/stores/Store')
const Stores = () => import('@/views/stores/Stores')
const inforUser = () => import('@/views/inforUser/update')
//change pass
const Changepass = () => import('@/views/change-pass/changepass')

//Homepage
const Homepage = () => import('@/client/views/HomePage') 

Vue.use(Router)

const isAuthen = (to, from, next) => {  
  var isAuthen = localStorage.getItem("isAuthen");

  if (!isAuthen){
    next();
    return;
  }
  next("/login");
};

export default new Router({
  mode: 'history', // https://router.vuejs.org/api/#mode
  linkActiveClass: 'active',
  scrollBehavior: () => ({ y: 0 }),
  routes: configRoutes()
})

function configRoutes () {
  return [
    {
      path: '/',      
      name: 'Home',
      component: TheContainer,
      beforeEnter: isAuthen,
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: Dashboard,
          beforeEnter: isAuthen    
        },       
        {
          path: 'charts',
          name: 'Charts',
          component: Charts
        },
        {
          path: 'widgets',
          name: 'Widgets',
          component: Widgets
        },
        {
          path: 'users',
          meta: {
            label: 'Users'
          },
          component: {
            render(c) {
              return c('router-view')
            }
          },
          children: [
            {
              path: '',
              name: 'Users',
              component: Users
            },
            {
              path: ':id',
              meta: {
                label: 'User Details'
              },
              name: 'User',
              component: User
            }
          ]
        },
        {
          path: 'store',
          meta: {
            label: 'Stores'
          },
          component: {
            render(c) {
              return c('router-view')
            }
          },
          children: [
            {
              path: '',
              name: 'Stores',
              component: Stores
            },
            {
              path: ':id',
              meta: {
                label: 'Store Details'
              },
              name: 'Store',
              component: Store
            }
          ]
        },
        {
          path: 'update',
          component: {
            render(c) {
              return c('router-view')
            }
          },
          children: [ {
            path: '',
            name: 'update',
            component: inforUser
            }
          ]
        },
        {
          path: 'changepass',
          component: {
            render(c) {
              return c('router-view')
            }
          },
          children: [
            {
              path: '',
              name: 'changepass',
              component: Changepass
            }
          ]
        },
      ]
    },
    {
      path: '/pages',
      redirect: '/pages/404',
      name: 'Pages',
      component: {
        render (c) { return c('router-view') }
      },
      children: [
        {
          path: '404',
          name: 'Page404',
          component: Page404
        },
        {
          path: '500',
          name: 'Page500',
          component: Page500
        },
        {
          path: 'login',
          name: 'login',
          component: Login
        },
        {
          path: 'register',
          name: 'Register',
          component: Register
        }
      ]
    },
    {
      path: '/login',      
      name: 'Login',
      component: Login     
    },
    {
      path: '/register',      
      name: 'Register',
      component: Register     
    },
    {
      path: '/Homepage',      
      name: 'Homepage',
      component: Homepage     
    }
  ]
}



