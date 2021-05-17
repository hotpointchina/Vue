<template>
  <div id="app">
      <!-- <a-button @click="getState">State</a-button>
      <NameListPage /> -->
      <div class="sky">
            <Nav />
      </div>
            
      <router-view></router-view>
      
  </div>
</template>



<script>
import Vue from 'vue';
import Antd from 'ant-design-vue';
import Nav from './components/Nav';

import {mapState} from 'vuex';

Vue.use(Antd);
export default {
  name: 'App',
  components:{
        //导航
        Nav
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
  position: relative;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.syk{
    position: fixed;
    top: 0px; left: 0px;
    z-index: 3;
    width: 100%;
}
</style>
