import http from "../utils/request";

// 请求首页数据
export const getData = () => {
    //这是一个promise对象,用then() 可以得到结果
    return http.get('/home/getData')
}

export const getUser = (params) => {
    //返回用户列表
    return http.get('/user/getUser', params)
}

//Axios的get用params存放数据，post用data存放

export const addUser = (data) => {
    return http.post('/user/add', data)
}
export const editUser = (data) => {
    return http.post('/user/edit', data)
}
export const delUser = (data) => {
    return http.post('/user/del', data)
}
export const getMenu = (data) => {
    return http.post('/permission/getMenu', data)
}
