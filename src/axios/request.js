import axios from 'axios'

// axios实例
const instance = axios.create({
	baseURL: //请求的网址
	method: 'post'
	timeout:5000 //请求超时时间
})