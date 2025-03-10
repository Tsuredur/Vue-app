import Mock from "mockjs"
import homeApi from './mockServeData/home'
import user from './mockServeData/user'
import permission from "./mockServeData/permission"

//定义Mock请求拦截(首页数据)
Mock.mock('/api/home/getData', homeApi.getStatisticalData)

//定义用户列表的数据(接口一般来自后端，此时用Mock模拟)
Mock.mock('/api/user/add', 'post', user.createUser)
Mock.mock('/api/user/edit', 'post', user.updateUser)
Mock.mock('/api/user/del', 'post', user.deleteUser)
Mock.mock(/api\/user\/getUser/, user.getUserList)

Mock.mock(/api\/permission\/getMenu/, 'post', permission.getMenu)


