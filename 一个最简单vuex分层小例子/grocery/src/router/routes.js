
// import home from '../views/home'

export default [
    {
        path:'/',
        component: resolve => require(['../views/home.vue'], resolve),
        // component: home,
    },
    {
        path:'/home',
        component: resolve => require(['../views/home.vue'], resolve),
        // component: home,
    },
    {
        path:'/findyou',
        component: resolve => require(['../views/FindYou.vue'], resolve),
        // component: home,
    },
    {
        path:'*',
        component: resolve => require(['../views/NotFound.vue'], resolve),
        // component: home,
    }
];
