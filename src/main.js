import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import qs from 'qs'

axios.defaults.timeout = 100000;              //超时默认值
axios.defaults.baseURL = "http://lab2lab.smart-monitor.cn/mock/15/";    //默认baseUrl
axios.defaults.responseType = 'json';       //默认数据相应类型
// http response 拦截器
// ajax请求回调之前拦截 对请求返回的信息做统一处理 比如error为401无权限则跳转到登陆界面

axios.interceptors.response.use(

    response=> {
      // store.commit("changeLogin",true);

      if (!store.state.hasLogin&&router.history.current.path!="/login") {
        router.push({
          path: '/login'
        });
        return;
      }

      return response.data;
    },
    function (err) {

      if (err && err.response) {
        switch (err.response.status) {
          case 400:
            err.message = '请求错误(400)';
            break;
          case 401:
            err.message = '未授权，请重新登录(401)';
            break;
          case 403:
            err.message = '拒绝访问(403)';
            break;
          case 404:
            err.message = '请求出错(404)';
            break;
          case 408:
            err.message = '请求超时(408)';
            break;
          case 500:
            err.message = '服务器错误(500)';
            break;
          case 501:
            err.message = '服务未实现(501)';
            break;
          case 502:
            err.message = '网络错误(502)';
            break;
          case 503:
            err.message = '服务不可用(503)';
            break;
          case 504:
            err.message = '网络超时(504)';
            break;
          case 505:
            err.message = 'HTTP版本不受支持(505)';
            break;
          default:
            err.message = "连接出错(" + err.response.status + ")!";
        }
      } else {
        err.message = '连接服务器失败!'
        // alert(config.base_url)
      }

      // ca.prompt(err.message);
      return Promise.reject(err);
    }
);


Vue.prototype.Axios = {
  // get 方法
  get: function (api, data) {


    return new Promise(function (resolve, reject) {
      const url = api;
      let token=store.state.userInfo.access_token;
      if(token){
        data.access_token=token;
      }

      axios.get(url, {params: data})
          .then(function (response) {

            resolve(response);
          }, function (err) {

            reject(err);
          });
    });
  },
  // post 方法
  post: function (api, data) {

    return new Promise(function (resolve, reject) {
      const url = api;
      let token=store.state.userInfo.access_token;
      if(token){
        data.access_token=token;
      }
      axios.post(url, qs.stringify(data))
          .then(function (response) {
            resolve(response);
          }, function (err) {
            reject(err);
          });
    });
  },

};

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

