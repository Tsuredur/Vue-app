import Vue from 'vue';
import ElementUI from 'element-ui';
import App from './App.vue';
import router from './router'
import store from './store'
import './api/mock'
import Cookie from 'js-cookie';
Vue.use(ElementUI)


Vue.config.productionTip = false


//添加全局前置导航守卫
router.beforeEach((to, from, next) => {
  //token是否存在
  const token = Cookie.get('token')
  //token 不存在，说明当前用户未登录，应跳转至登录页
  if(!token && to.name !== 'login') {
    next({ name: 'login' })
  } else if(token && to.name === 'login') { //token存在，说明已经登陆，此时跳转至首页
    next({ name: 'home' })
  } else {
    next()
  }
})

new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    store.commit('addMenu', router)
  }
}).$mount('#app')
