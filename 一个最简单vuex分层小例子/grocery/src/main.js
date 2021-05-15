import Vue from 'vue'
import 'ant-design-vue/dist/antd.css';
import store from './store';


import App from './App.vue';


Vue.config.productionTip = false;
new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
