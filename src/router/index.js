import Vue from 'vue'
import VueRouter from 'vue-router'

const routes = [
{
  path: '/',
  component: () => import(/* webpackChunkName: "home" */'@/view/home')
},
{
  path: '/abc',
  component: () => import(/* webpackChunkName: "abc" */'@/view/abc')
}]


Vue.use(VueRouter)

export default new VueRouter({
  routes
})
