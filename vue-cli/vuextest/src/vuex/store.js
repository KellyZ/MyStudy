import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state={
  count:1
}

const mutations={
  add(state){
    state.count++;
  },
  minus(state){
    state.count--;
  }
}

const getters={
  count:function (state) {
    return count=count+100;
  }
}

export default new Vuex.Store({
  state,
  mutations,
  getters
})
