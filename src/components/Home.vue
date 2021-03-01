<template>
	<el-container class="el-container">
		<!-- 头部区域 -->
		<el-header class="el-header">
			<!-- 头部左侧logo区域 -->
			<div>
				<img src="" alt="">
				<span class="el-text-logo">后台管理系统</span>
			</div>
			<!-- 头部右侧用户信息区域 -->
			<div>
				<el-dropdown>
					<i class="el-icon-setting" style="margin-right: 22px"></i>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item>个人中心</el-dropdown-item>
						<el-dropdown-item>修改密码</el-dropdown-item>
						<el-dropdown-item >
							<el-button type="text" @click="logout">注销登陆</el-button>
						</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
				<span>admin</span>
			</div>
		</el-header>

		<el-container>
			<!-- 左侧导航区域 -->
			<el-aside width="220px" class="el-aside">
				<el-menu background-color="#303133" text-color="#fff" active-text-color="#409eff" unique-opened router></unique-opened>
					<!-- 数据统计 -->
					<el-submenu index="1">
						<template slot="title"><i class="el-icon-s-data"></i>图表</template>
						<el-menu-item index="/orderData">折线图</el-menu-item>
						<el-menu-item index="/radarData">雷达图</el-menu-item>
						<el-menu-item index="/userData">数据列表</el-menu-item>
					</el-submenu>
					<!-- 商品管理 -->
					<el-submenu index="2">
						<template slot="title"><i class="el-icon-menu"></i>商品管理</template>
						<el-menu-item index="/sort">分类管理</el-menu-item>
						<el-menu-item index="/goods">商品列表</el-menu-item>
					</el-submenu>
					<!-- 订单管理 -->
					<el-submenu index="3">
						<template slot="title"><i class="el-icon-s-order"></i>订单管理</template>
							<el-menu-item index="3-1">订单列表</el-menu-item>
							<el-menu-item index="3-1">售后订单</el-menu-item>
							<el-menu-item index="3-2">评价管理</el-menu-item>
					</el-submenu>
					<!-- 财务管理 -->
					<el-submenu index="4">
						<template slot="title"><i class="el-icon-success"></i>财务管理</template>
							<el-menu-item index="4-1">对账管理</el-menu-item>
							<el-menu-item index="4-2">提现管理</el-menu-item>
					</el-submenu>
					<!-- 系统设置 -->
					<el-submenu index="5">
						<template slot="title"><i class="el-icon-setting"></i>财务管理</template>
							<el-menu-item index="5-1">对账管理</el-menu-item>
							<el-menu-item index="5-2">提现管理</el-menu-item>
					</el-submenu>
				</el-menu>
			</el-aside>
			<!-- 内容主体部分 -->
			<el-main class="el-main">
				<router-view></router-view>
			</el-main>
		</el-container>
	</el-container>
</template>

<script>
	export default {
		name: "Home",
		methods:{
			logout() {
				//注销登录 为注销按钮添加点击事件 然后清空session storage中的token
				//设置跳转到登录页面
				this.$router.push('/login')
			}
		}
	}
</script>

<style scoped>
	.el-container {
		height: 100%;
	}

	.el-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		color: #fff;
		background-color: #403535;
	}

	.el-text-logo {
		font-size: 24px;
	}

	.el-aside {
		background-color: #303133;
	}
	.el-menu{
		border-right: 0;
	}
</style>
