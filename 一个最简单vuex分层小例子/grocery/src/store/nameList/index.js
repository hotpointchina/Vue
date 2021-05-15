

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
        },
        {
            name:'洪森',
        },
        {
            name:'拉那烈',
        },
        {
            name:'纳丹',
        },
        {
            name:'辛格',
        },
        {
            name:'哈尼亚',
        },
        {
            name:'恩赫包勒德',
        },
        {
            name:'古斯芒',
        },
        {
            name:'卡布斯',
        },
        {
            name:'阿巴斯',
        },
        {
            name:'Aurora',
        },
        {
            name:'Harris',
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
