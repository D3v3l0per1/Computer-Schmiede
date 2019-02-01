import Vue from 'vue'
import Router from 'vue-router'

import AuthGuard from './auth-guard'

Vue.use(Router)

function loadView (view) {
  return () => import(/* webpackChunkName: "view-[request]" */ `@/views/${view}.vue`)
}

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: loadView('Home')
    },
    {
      path: '/about',
      name: 'About',
      component: loadView('About')
    },
    {
      path: '/computerschmiede-pc',
      name: 'CSPC',
      component: loadView('CSPC')
    },
    {
      path: '/signin',
      name: "SignIN",
      component: loadView('SignIn')
    },
    {
      path: '/admin',
      name: 'admin',
      beforeEnter: AuthGuard,
      component: loadView('Dashboard')
    },
    {
      path: '/3d-druck',
      name: '3DPrint',
      component: loadView('3DPrint')
    },
    {
      path: '/3d-druck/neu',
      name: 'Create3DPrint',
      beforeEnter: AuthGuard,
      component: loadView('CreatePrint')
    },
    {
      path: '/3d-druck/:id',
      name: '3DPrint',
      props: true,
      component: loadView('ViewPrint')
    },
    {
      path: '/kontakt',
      name: 'Kontakt',
      component: loadView('Kontakt')
    },
    {
      path: '*',
      name: "404Error",
      component: loadView('FOFError')
    }
  ]
})
