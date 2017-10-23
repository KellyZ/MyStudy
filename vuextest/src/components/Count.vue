<template>
  <div>
    <h2>{{msg}}</h2>
    <hr>
    <h3>{{count}} </h3>
    <button @click="add">Add</button>
    <button @click="$store.commit('minus')">minus</button>

  </div>
</template>

<script>
  import store from '@/vuex/store';
  import { mapState,mapMutations,mapGetters } from 'vuex'
  export default {
    data() {
      return {
        msg: 'Hello vuex'
      }
    },
//    computed:{
//      count:function () {
//        return this.$store.state.count
//      }
//    },

//    computed:mapState({
//      count:function (state) {
//        return state.count
//      }
//    }),

//    computed:mapState(['count']),

//    computed:{
//      ...mapState(["count"]),
//      count(){
//        return this.$store.getters.count;
//      }
//    },

    computed:{
      ...mapState(['count']),
//      count(){
//        return this.$store.getters.count;
//      }
      ...mapGetters(['count'])
    },

    methods:mapMutations(['add','minus']),
    store
  }
</script>
