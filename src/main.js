import Vue from 'vue'
import router from './router'
import axios from 'axios'
import App from './App.vue'
import VueAxios from 'vue-axios'
import env from './env'

// 接口代理方式
axios.defaults.baseURL = 'http://test-www.imooc.com/api';
axios.defaults.timeout = 8000;

// 根据环境变量获取不同的请求地址
axios.defaults.baseURL = env.baseURL;

// 错误拦截器
axios.interceptors.response.use(function (response) {
  let res = response.data;
  if (res.status == 0) {
    return res.data;
  } else if (res.status == 10) {
    window.location.href = '/#/login'
  } else {
    alert(res.msg);
  }
})

// 将axios挂载在vue实例上
Vue.use(VueAxios, axios);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')