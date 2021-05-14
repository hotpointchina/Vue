// mutations


const mutations = {
  addName( state, data ){
      console.log( 'mutations --> ', data );
      state.list.push( data );
  },


 }


export default mutations;
