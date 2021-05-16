

import mutations from './mutations';
import actions from './actions'




const state = () => ({
    columns:[
        {
            title: '序号',
            dataIndex: 'sortNumber',
            key: 'sortNumber',
        },
        {
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: '年龄',
            dataIndex: 'age',
            key: 'age',
        },
    ],
    list:[],
    NationalLeaders: [
        {
            name:'李显龙',
            age:69
        },
        {
            name:'洪森',
            age:68
        },
        {
            name:'拉那烈',
            age:77
        },
        {
            name:'陈庆炎',
            age:81
        },
        {
            name:'辛格',
            age:88
        },
        {
            name:'哈尼亚',
            age:58
        },
        {
            name:'恩赫包勒德',
            age:56
        },
        {
            name:'古斯芒',
            age:74
        },
        {
            name:'卡布斯',
            age:79
        },
        {
            name:'阿巴斯',
            age:76
        },
        {
            name:'Aurora',
            age:24
        },
        {
            name:'Harris',
            age:16
        },
    ]
});
  
  
   

export default {
    namespaced: true,
    state,
    // getters,
    actions,
    mutations
}
