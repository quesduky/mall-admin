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
					v-model="username"
					@blur="checkUser"
					ref="usernameref"
					clearable>
				</el-input>
				<!-- 密码框 -->
				<el-input
					class="public"
					placeholder="请输入密码"
					type="password"
					prefix-icon="el-icon-search"
					v-model="password"
					@blur="checkPw"
					ref="passwordref"
					clearable>
				</el-input>
				<div class="numCode public">
					<el-input
					  placeholder="请输入验证码"
					  v-model="numCode"
						@blur="checkCode"
						ref="code"
						class="numCodeInput"
					  clearable>
					</el-input>
					<img :src="imgUrl" alt="" class="numCodeImg" @click="getImgCode">
				</div>
			</div>
			<!-- 登陆 -->
			<div class="btn">
				<el-button type="primary" class="public" >登陆</el-button>
			</div>
			<!-- 找回密码 -->
			<div class="btn">
				<el-button type="info" class="public">找回密码</el-button>
			</div>
		</div>
	</div>
</template>

<script>
	// import request from '../axios/request.js'
	
	import axios from 'axios'
	export default{
		name: "Login",
		data(){
			return{
				username: '',
				password: '',
				numCode: '',
				imgUrl: 'https://user.api.it120.cc/code'
			}
		},
		created(){
			
		},
		methods:{
			// 用户名校验
			checkUser(){
				let n = this.$refs.usernameref.value
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
				// if(!/^(?![0-9]*$)(?![a-zA-Z]*$)[a-zA-Z0-9]{6,20}$/.test(n)){
				// 	this.$message.error('账号必须为6-20位字母和数字组合');
				// 	this.$refs.inputUser.value = ''
				// 	return false
				// }
				//这块用的手机号验证登陆
				if(!/^[1][3-9][0-9]{9}$/.test(n)){
					this.$message.error('账号必须为11位手机号');
					this.$refs.usernameref.value = ''
				}
				// console.log(this.inputUser)
			},
			// 密码校验
			checkPw(){
				let p = this.$refs.passwordref.value
				if(p == ''){
					this.$message.error('密码不能为空');
					return false
				}
				if(!/^(?![0-9]*$)(?![a-zA-Z]*$)[a-zA-Z0-9]{6,20}$/.test(p)){
					this.$message.error('密码必须为6-20位字母和数字组合');
					this.$refs.passwordref.value = ''
				}
			},
			// 短信验证码校验
			checkCode(){
				let c = this.$refs.code.value
				if(c == ''){
					this.$message.error('验证码不能为空');
					return false
				}
			},
			// 点击图片实现刷新功能
			getImgCode(){
				this.imgUrl = this.imgUrl + '?' + Math.random()
			}
			// 发送登陆请求
			// login(){
			// 	axios.post('https://user.api.it120.cc/login/userName/v2',{
			// 		params:{
			// 			mobile: 15668421689,
			// 			pwd: 123456,
			// 			imgcode: 4567,
			// 			k: 0.1
						
			// 		}
			// 	}).then( res =>{
			// 		console.log(res)
			// 	}).catch( err =>{
			// 		console.log(err)
			// 	})
			// }
			
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
	.numCode{
		display: flex;
	}
	.numCodeInput{
		width: 240px;
	}
	.numCodeImg{
		width: 80px;
		height: 40px;
		/* border: 1px #000 solid; */
		margin-left:0px;
	}
	.btn{
		width: 100%;
		display: flex;
	}
</style>
