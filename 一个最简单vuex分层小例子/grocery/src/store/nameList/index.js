

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
            id:1,
            name:'李显龙',
            age:69
        },
        {
            id:2,
            name:'洪森',
            age:68
        },
        {
            id:3,
            name:'拉那烈',
            age:77
        },
        {
            id:4,
            name:'陈庆炎',
            age:81
        },
        {
            id:5,
            name:'辛格',
            age:88
        },
        {
            id:6,
            name:'哈尼亚',
            age:58
        },
        {
            id:7,
            name:'恩赫包勒德',
            age:56
        },
        {
            id:8,
            name:'古斯芒',
            age:74
        },
        {
            id:9,
            name:'卡布斯',
            age:79
        },
        {
            id:10,
            name:'阿巴斯',
            age:76
        },
        {
            id:11,
            name:'Aurora',
            age:24
        },
        {
            id:12,
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
