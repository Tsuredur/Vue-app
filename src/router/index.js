import Vue from 'vue';
import VueRouter from 'vue-router';
//引入路由组件
import Home from '../views/Home.vue';
import User from '../views/User.vue';
import Main from '../views/Main.vue';
import Mall from '../views/Mall.vue';
import PageOne from '../views/PageOne.vue';
import PageTwo from '../views/PageTwo.vue'
import Login from '../views/Login.vue'
Vue.use(VueRouter)

//映射 route and component
const routes = [
    //主路由
    {
        path: '/',
        component: Main,
        name: 'Main',
        redirect: '/home',  //path为'/'时重定向到'/home'
        children: [
            //子路由
            {path: 'home', name: 'home', component: Home},
            {path: 'user', name: 'user', component: User},
            {path: 'mall', name: 'mall', component: Mall},
            {path: 'page1', name: 'page1', component: PageOne},
            {path: 'page2', name: 'page2', component: PageTwo},

        ]
    },
     
    {
        path: '/login',
        name: 'login',
        component: Login
    }
 
]

//创建实例，传入配置
const router = new VueRouter({
    routes
})

//暴露
export default router



