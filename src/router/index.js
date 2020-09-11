import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../components/Login.vue'

Vue.use(VueRouter)

  const routes = [
		{
			// 路由重定向
			path: '/',
			redirect: '/login'
		},
		{
			// 登陆
			path: '/login',
			component: Login
		}

	]

const router = new VueRouter({
  mode: 'hash',
  // base: process.env.BASE_URL,
  routes
})

export default router
