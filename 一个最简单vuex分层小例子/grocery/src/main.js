import Vue from 'vue'
import 'ant-design-vue/dist/antd.css';
import store from './store';
import router from './router/router'

import App from './App.vue';


Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
