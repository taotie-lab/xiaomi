import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Emphasis from '../views/Home/Emphasis.vue'

import Classfig from '../views/Classfig.vue'
import Newproduct from '../views/Classfig/Newproduct.vue'

import Shopping from '../views/Shopping.vue'
import Guess from '../views/Shopping/Guess.vue'

import My from '../views/My.vue'
import Personalcenter from '../views/My/Personalcenter.vue'

import Login from '../views/Login.vue'
import Landing from '../views/Landing.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: 'emphasis',
        component: Emphasis
      },
      {
        path: '/classfig',
        component: Classfig,
        children: [
          {
            path: 'newproduct',
            component: Newproduct
          }
        ]
      },
      {
        path: '/shopping',
        component: Shopping,
        children: [
          {
            path: 'guess',
            component: Guess
          }
        ]
      },
      {
        path: '/my',
        component: My,
        children: [
          {
            path: 'personalcenter',
            component: Personalcenter
          }
        ]
      }
    ]
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/landing',
    component: Landing
  },
  {
    path: '/',
    redirect: '/home/emphasis'
  }
]

const router = new VueRouter({
  routes
})

export default router
