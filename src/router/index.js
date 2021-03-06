import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home'
import login from '../views/login'
import Home2 from '../views/home/home.vue'
Vue.use(VueRouter)

const routes = [{
  path: '/',
  component: login
},
{
  path: '/login',
  name: 'login',
  component: login
},
{
  path: '/home',
  name: 'home',
  component: Home,
  children: [{
    path: '',
    component: Home2
  }, {
    path: 'comment',
    component: () => import('../views/comment')
  }, {
    path: 'articles',
    component: () => import('../views/articles')
  }, {
    path: 'publish',
    component: () => import('../views/publish')
  }, {
    path: 'publish/:articleId',
    component: () => import('../views/publish')
  }, {
    path: 'material',
    component: () => import('../views/material')
  }]
}
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //             import (/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
