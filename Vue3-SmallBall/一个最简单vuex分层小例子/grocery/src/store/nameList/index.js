

import mutations from './mutations';
import actions from './actions'




const state = () => ({
    list:[],
    items: []
});
  
  
   

export default {
    namespaced: true,
    state,
    // getters,
    actions,
    mutations
}
