import axios  from "axios";

const http = axios.create({
    //通用请求地址的前缀
    baseURL: '/api',
    //超时 时间
    timeout: 10000
})

//请求拦截器
http.interceptors.request.use(function (config) {
    //发送请求之前加工
    return config
}, function (error) {
    //发送请求错误加工
    return Promise.reject(error)
})
//响应拦截器
http.interceptors.response.use(function (response) {
    //响应数据加工
    return response
}, function (error) {
    //响应错误加工
    return Promise.reject(error)
})


export default http