 // actions
 
const actions = {
  addName( context, data ){
    console.log( 'action --> ',  data );
    context.commit( 'addName', data );
  },


}


export default actions;
