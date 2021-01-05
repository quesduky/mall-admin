<template>
	<div>
		<el-breadcrumb separator-class="el-icon-arrow-right">
		  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
		  <el-breadcrumb-item>用户数据</el-breadcrumb-item>
		</el-breadcrumb>
	</div>
</template>

<script>
	export default{
		name: 'UserData'
	}
</script>

<style>
</style>
