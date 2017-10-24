import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state={
  count:1
}

const mutations={
  add(state,num){
    state.count++;
  },
  minus(state,num){
    state.count--;
  }
}

// const getters={
//   count:function (state) {
//     return state.count=state.count+10;
//   }
// }

const actions={
  addAction(context){
    context.commit("add");
  },
  minusAction(context){
    context.commit("minus");
  }
}

export default new Vuex.Store({
  state,
  mutations,
  // getters,
  actions
})
