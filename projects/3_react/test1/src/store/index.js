import {createStore}from 'redux';

let store = createStore(function(state={
    user:{
        count:0
    },
    company:{
        count:0
    }
},action){

    switch (action.type) {
      case 'addUser':
        state.user.count = state.user.count+1;
        return state;
      case 'addCompany':
        state.company.count = state.company.count+1;
        return state;  
    
      default:   // init,other branches 
        return state;
    }

  });
  
  export default store;