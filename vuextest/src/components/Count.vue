<template>
  <div>
    <h2>{{msg}}</h2>
    <hr>
    <h3>{{count}} </h3>
    <button @click="add(10)">Add</button>
    <button @click="$store.commit('minus',10)">minus</button>

    <button @click="addAction">AddAction</button>
    <button @click="minusAction">minusAction</button>

  </div>
</template>

<script>
  import store from '@/vuex/store';
  import { mapState,mapMutations,mapActions } from 'vuex'
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
    },

    methods:{
      ...mapMutations(['add','minus']),
      ...mapActions(['addAction','minusAction'])
    },
    store
  }
</script>
