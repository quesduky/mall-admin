import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../components/Login.vue'
import Home from  '../components/Home.vue'

import Welcome from '../components/Welcome.vue'
import OrderData from '../components/data/OrderData.vue'
import UserData from '../components/data/UserData.vue'

Vue.use(VueRouter)

  const routes = [
		{
			// 路由重定向
			path: '/',
			redirect: '/home'
		},
		{
			// 登陆
			path: '/login',
			component: Login
		},
		{
			// 主页
			path: '/home',
			component: Home,
			redirect: '/welcome',
			children:[
				{
					path: '/welcome',
					component: Welcome
				},
				{
					path: '/orderData',
					component: OrderData
				},
				{
					path: '/userData',
					component: UserData
				}
			]
		}
		

	]

const router = new VueRouter({
  mode: 'hash',
  // base: process.env.BASE_URL,
  routes
})

export default router
