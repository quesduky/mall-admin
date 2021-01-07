<template>
	<div>
		<!-- 面包屑导航 -->
		<el-breadcrumb separator-class="el-icon-arrow-right">
			<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
			<el-breadcrumb-item>用户数据</el-breadcrumb-item>
		</el-breadcrumb>
		<!-- 卡片区域 -->
		<el-card>
			<!-- 分栏间隔布局 -->
			<el-row :gutter="25">
				<el-col :span="6">
					<!-- 搜索栏 -->
					<el-input placeholder="请输入内容">
						<el-button slot="append" icon="el-icon-search"></el-button>
					</el-input>
				</el-col>
				<!-- 添加用户按钮 -->
				<el-col :span="6">
					<el-button type="primary" @click="dialogVisible = true">添加用户</el-button>
				</el-col>
			</el-row>

			<!-- 用户表格区域 -->
			<el-table :data="tableData" stripe style="width: 100%" border>
				<el-table-column type="index" label="#"></el-table-column>
				<el-table-column prop="username" label="姓名" width="180"></el-table-column>
				<el-table-column prop="email" label="邮箱" width="180"></el-table-column>
				<el-table-column prop="mobile" label="手机"></el-table-column>
				<el-table-column prop="role_name" label="角色"></el-table-column>
				<el-table-column label="状态">
					<!-- 作用域插槽：子元素获取当前行的数据，双向绑定到switch上 -->
					<template slot-scope="scope">
						<el-switch v-model="scope.row.mg_state" @change="switchStatuChange(scope.row)">
						</el-switch>
					</template>
				</el-table-column>
				<el-table-column label="操作">
					<template slot-scope="scope">
						<el-tooltip effect="dark" content="编辑用户" placement="top" :enterable="false">
							<el-button type="primary" icon="el-icon-edit" size="mini"></el-button>
						</el-tooltip>
						<el-tooltip effect="dark" content="删除用户" placement="top" :enterable="false">
							<el-button type="danger" icon="el-icon-delete" size="mini"></el-button>
						</el-tooltip>
					</template>
				</el-table-column>
			</el-table>

			<!-- 底部分页区域 -->
			<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="queryInfo.pageNum"
			 :page-sizes="[2, 5, 10, 15]" :page-size="queryInfo.pageSize" layout="total, sizes, prev, pager, next, jumper"
			 :total="40">
			</el-pagination>
		</el-card>

		<!-- 添加用户的对话框 -->
		<el-dialog title="添加用户" :visible.sync="dialogVisible" width="50%">
			<!-- 内容主体区域,添加用户表单 -->
			<el-form :model="addUser" :rules="addUserRules" ref="addUserRef" label-width="80px">
			  <el-form-item label="用户名" prop="username">
			    <el-input v-model="addUser.username"></el-input>
			  </el-form-item>
				<el-form-item label="密码" prop="password">
				  <el-input v-model="addUser.password"></el-input>
				</el-form-item>
				<el-form-item label="邮箱" prop="email">
				  <el-input v-model="addUser.email"></el-input>
				</el-form-item>
				<el-form-item label="手机" prop="mobile">
				  <el-input v-model="addUser.mobile"></el-input>
				</el-form-item>
			</el-form>
			<!-- 底部按钮区域 -->
			<span slot="footer" class="dialog-footer">
				<el-button @click="dialogVisible = false">取 消</el-button>
				<el-button type="primary" @click="dialogVisible = false">确 定</el-button>
			</span>
		</el-dialog>
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		name: 'UserData',
		data() {
			return {
				tableData: [],
				// 请求数据页码等信息
				queryInfo: {
					pageSize: 2, //每页展示的数据数量
					pageNum: 1 //当前页展示的数据数
				},
				// 添加用户对话框的显示隐藏
				dialogVisible : false,
				// 添加用户数据
				addUser:{
					username: '',
					password: '',
					email: '',
					mobile :'',
				},
				addUserRules:{
					username:[
						{
							required: true, message: '请输入用户名', trigger: 'blur'
						},
						{
							min: 11, max: 11, message: '长度在11个字符的手机号', trigger: 'blur'
						}
					],
					password:[
						{
							required: true, message: '请输入密码', trigger: 'blur'
						},
						{
							min: 6, max: 18, message: '长度在6-18个字符', trigger: 'blur'
						}
					],
					email: [
						{
							required: true, message: '请输入邮箱', trigger: 'blur'
						}
					],
					mobile: [
						{
							required: true, message: '请输入手机号', trigger: 'blur'
						},
						{
							min: 11, max: 11, message: '长度在11个字符的手机号', trigger: 'blur'
						}
					]
				}
			}
		},
		created() {
			// 请求用户列表数据
			axios.get('https://api.it120.cc/az/mock/v1/users', {}).then(res => {
					res = JSON.parse(res.data) //json 数据处理
					this.tableData = res.data.users
				})
				.catch(err => {
					this.$message.error("获取用户列表出错")
				})
		},
		methods: {
			// 监听pagesize改变的事件
			handleSizeChange(newSize) {
				this.queryInfo.pageSize = newSize //获取新的每页展示的数据量
				// 此处需要再次调用数据请求重新获取数据，因为是模拟接口，一次性获取 全部的数据
			},
			// 监听页码改变的事件
			handleCurrentChange(newPage) {
				console.log(newPage)
				this.queryInfo.pageNum = newPage
			},
			// 监听switch开关的状态变化
			switchStatuChange(usrtInfo) {
				// 获取到switch开关变化,此时要发起网络请求,请求接口修改用户状态
				console.log(usrtInfo)
			}
		}
	}
</script>

<style>
</style>
