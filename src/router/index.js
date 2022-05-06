import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path:'/table',
    name:'table',
    component:()=>import('../views/table/index.vue')
  },
  {
    path:'/editor',
    name:'editor',
    component:()=>import('../views/editor/index.vue')
  },
  {
    path:'/ckEditor',
    name:'ckEditor',
    component:()=>import('../views/editor/ckEditor.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
