
import home from '../views/home'

export default [
    {
        path:'/',
        component: resolve => require(['../views/home.vue'], resolve),
        // component: home,
    }
];