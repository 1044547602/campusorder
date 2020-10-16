import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '@/views/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: index,
    redirect: '/login',

      children:[
        {
            path:'register',
            name:'register',
            component: () => import('@/views/register')
        },{
            path:'login',
            name:'login',
            component: () => import('@/views/login')
        }
    ]
    
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import("../views/home")
}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
