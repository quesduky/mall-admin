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
						<el-dropdown-item>注销登陆</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
				<span>admin</span>
			</div>
		</el-header>

		<el-container>
			<!-- 左侧导航区域 -->
			<el-aside width="220px" class="el-aside">
				<el-menu background-color="#303133" text-color="#fff" active-text-color="#409eff" unique-opened router></unique-opened>
					<el-submenu index="1">
						<template slot="title"><i class="el-icon-s-data"></i>数据统计</template>
						<el-menu-item index="/orderData">订单数据</el-menu-item>
						<el-menu-item index="userData">用户数据</el-menu-item>
					</el-submenu>
					<el-submenu index="2">
						<template slot="title"><i class="el-icon-menu"></i>导航二</template>
						<el-menu-item-group>
							<template slot="title">分组一</template>
							<el-menu-item index="2-1">选项1</el-menu-item>
							<el-menu-item index="2-2">选项2</el-menu-item>
						</el-menu-item-group>
						<el-menu-item-group title="分组2">
							<el-menu-item index="2-3">选项3</el-menu-item>
						</el-menu-item-group>
						<el-submenu index="2-4">
							<template slot="title">选项4</template>
							<el-menu-item index="2-4-1">选项4-1</el-menu-item>
						</el-submenu>
					</el-submenu>
					<el-submenu index="3">
						<template slot="title"><i class="el-icon-setting"></i>导航三</template>
						<el-menu-item-group>
							<template slot="title">分组一</template>
							<el-menu-item index="3-1">选项1</el-menu-item>
							<el-menu-item index="3-2">选项2</el-menu-item>
						</el-menu-item-group>
						<el-menu-item-group title="分组2">
							<el-menu-item index="3-3">选项3</el-menu-item>
						</el-menu-item-group>
						<el-submenu index="3-4">
							<template slot="title">选项4</template>
							<el-menu-item index="3-4-1">选项4-1</el-menu-item>
						</el-submenu>
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
		name: "Home"
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
