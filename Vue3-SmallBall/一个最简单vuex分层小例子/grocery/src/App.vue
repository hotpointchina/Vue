<template>
  <div id="app">
      <a-button @click="getState">State</a-button>
      <NameListPage />
  </div>
</template>



<script>
import Vue from 'vue';
import Antd from 'ant-design-vue';
import NameListPage from './views/NameList';

import {mapState} from 'vuex';

Vue.use(Antd);
export default {
  name: 'App',
  components:{
    NameListPage,
  },

  computed:{
    ...mapState({
      NameList: state => state.NameList.list
    }),
  },

  methods:{
    getState(){
        console.log( ' State -->> ', this.NameList );
    }
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
