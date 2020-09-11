<template>
	<div class="login">
		<div class="container">
			<div class="title">后台管理系统</div>
			<!-- 账号密码输入区域 -->
			<div class="input">
				<!-- 输入账号框 -->
				<el-input
					class="public"
					placeholder="请输入账号"
					prefix-icon="el-icon-search"
					v-model="inputUser"
					@blur="checkUser"
					ref="inputUser"
					clearable>
				</el-input>
				<!-- 密码框 -->
				<el-input
					class="public"
					placeholder="请输入密码"
					type="password"
					prefix-icon="el-icon-search"
					v-model="inputPw"
					@blur="checkPw"
					ref="inputPw"
					clearable>
				</el-input>
			</div>
			<!-- 登陆 -->
			<div class="btn">
				<el-button type="primary" class="public">登陆</el-button>
			</div>
			<!-- 找回密码 -->
			<div class="btn">
				<el-button type="info" class="public">找回密码</el-button>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name: "Login",
		data(){
			return{
				inputUser: '',
				inputPw: ''
			}
		},
		methods:{
			// 用户名校验
			checkUser(){
				let n = this.$refs.inputUser.value
				// 空值校验
				if(n == ''){
					this.$message.error('账号不能为空');
					return false
				}
				// 长度校验  啰嗦了 用不到这个
				// if(n.length>20){
				// 	console.log("输入账号过长")
				// }
				// 正则校验,账号必须为6-20位字母和数字组合
				if(!/^(?![0-9]*$)(?![a-zA-Z]*$)[a-zA-Z0-9]{6,20}$/.test(n)){
					this.$message.error('账号必须为6-20位字母和数字组合');
					this.$refs.inputUser.value = ''
					return false
				}
				// console.log(this.inputUser)
			},
			// 密码校验
			checkPw(){
				let p = this.$refs.inputPw.value
				if(p == ''){
					this.$message.error('密码不能为空');
					return false
				}
				if(!/^(?![0-9]*$)(?![a-zA-Z]*$)[a-zA-Z0-9]{6,20}$/.test(p)){
					this.$message.error('密码必须为6-20位字母和数字组合');
					this.$refs.inputPw.value = ''
				}
			}
		}
	}
</script>

<style scoped>
	.login{
		width: 100%;
		height: 100%;
		background-image: url(../assets/img/login/login-bg.jpg);
		background-size: 100% 100%;
	}
	.container{
		width: 420px;
		height: 360px;
		position: absolute;
		top:50%;
		left: 50%;
		background-color: #d7d7d7;
		border-radius: 5px;
		padding: 12px;
		transform: translate(-50%,-50%);
		-webkit-transform:translate(-50%,-50%);
	}
	.title{
		font-size: 24px;
		text-align: center;
		font-weight: 800;
	}
	.input{
		margin: 20px 0;
		display: flex;
		flex-wrap: wrap;
	}
	.public{
		width: 320px;	
		margin: 10px auto;
	}
	.btn{
		width: 100%;
		display: flex;
	}
</style>
