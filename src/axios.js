import axios from "axios";
import { getToken } from "./composables/auth";
import { showMessage } from "./composables/util";

// 创建 Axios 实例
const instance = axios.create({
    baseURL: "/api", // 你的 API 基础 URL
    timeout: 7000, // 请求超时时间
})

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    let token = getToken()
    console.log('统一添加请求头中的 Token:' + token)
    // 当token不为空时
    if (token) {
        config.headers['Authorization'] = 'Bearer ' + token
    }

    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response.data
}, function (error) {

    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    let errorMessage = error.response.data.message || '请求失败'
    showMessage(errorMessage, 'error')

    return Promise.reject(error)
})

// 暴露出去
export default instance;