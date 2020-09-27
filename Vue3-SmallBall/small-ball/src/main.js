import {createApp} from './renderer';
import {stage} from './canvas';
import App from './App.vue';


// console.log(stage)
/*
    createApp 是通过 vue 对外提供的 
    createRenderer (创建一个渲染器) 函数返回的 
    createApp 创建根组件函数所得到的
    vue 的 createApp 函数接收一个 【根组件】

    本练习 在 canvas/index 中导出了自己编写的 
    createApp 通过函数包裹，传递 “根组件” 

*/ 
createApp(App).mount(stage);

window.console.warn = () => {};