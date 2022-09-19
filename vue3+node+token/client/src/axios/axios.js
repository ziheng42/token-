import axios from 'axios'
import router from '../router/index'

let baseUrl

// 判断开发环境（一般用于本地代理）
if (process.env.NODE_ENV === 'development') { // 开发环境
    baseUrl = 'http://localhost:3000'    
} else {                                      // 编译环境
    if (process.env.type === 'test') {        // 测试环境
        baseUrl = 'http://sw.apitest.com'
    } else {                                  // 正式环境
        baseUrl = 'http://sw.api.com'
    }
}

axios.defaults.timeout = 4000   //请求超时
axios.defaults.baseURL = baseUrl //全局地址
axios.defaults.responseType = 'json' //接收数据格式。默认json格式
axios.defaults.withCredentials = true //是否携带cookie

//请求拦截
axios.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token')
        if (token) config.headers.Authorization = `Bearer ${token}`
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)
//响应拦截
axios.interceptors.response.use(
    (response) => response,
    (error) => {
        let { status } = error.response
        if (status === 401) {
            router.replace({ name: 'Login' })
            localStorage.clear('token')
        }
    }
)

export default axios