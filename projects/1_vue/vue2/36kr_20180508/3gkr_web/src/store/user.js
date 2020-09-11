export default {
    state:{
        name:'charlie',
        age:40
      },
      mutations:{
          setAge(state,arg){
              state.age= arg;
          }
      },
      actions:{
          setAge({commit},arg){
              commit('setAge',arg);
          }
      },
      getters:{},
}