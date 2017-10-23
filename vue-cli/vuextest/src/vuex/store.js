import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state={
  count:1
}

const mutations={
  add(state){
    state.count=state.count+10;
  },
  minus(state){
    state.count--;
  }
}

const getters={
  count:function (state) {
    return state.count=state.count+10;
  }
}

export default new Vuex.Store({
  state,
  mutations,
  getters
})
