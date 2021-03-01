import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../components/Login.vue'
import Home from  '../components/Home.vue'

import Welcome from '../components/Welcome.vue'
import OrderData from '../components/data/OrderData.vue'
import RadarData from '../components/data/RadarData.vue'
import UserData from '../components/data/UserData.vue'
import Sort from '../components/data/Sort.vue'
import Goods from '../components/data/Goods.vue'

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
		},
		{
			// 主页
			path: '/home',
			component: Home,
			redirect: '/welcome',
			children:[
				{ 
					//欢迎页
					path: '/welcome',
					component: Welcome
				},
				{
					//折线图
					path: '/orderData',
					component: OrderData
				},
				{ //雷达图
					path: '/radarData',
					component: RadarData
				},
				{
					//用户数据
					path: '/userData',
					component: UserData
				},
				{
					// 分类管理
					path: '/sort',
					component: Sort
				},
				{
					//商品管理
					path:'/goods',
					component: Goods
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
