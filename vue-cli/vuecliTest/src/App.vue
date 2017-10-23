<template>
  <div id="app">
    <img src="./assets/logo.png"><br>

    <div>
      <button @click="goback">后退</button>
      <button @click="gohead">前进</button>
      <button @click="gohome">goHome</button>
    </div>

    <router-link :to="{name:'Hello'}">首页</router-link>
    <router-link :to="{name:'Home'}">首页Redict</router-link>
    <router-link :to="{name:'Hi'}">Hi页面</router-link>
    <router-link :to="{name:'Hi1',params:{username:'haha'}}">Hi1页面</router-link>
    <router-link :to="{name:'Hi2',params:{username:'hehe'}}">Hi2页面</router-link>
    <router-link to="/params/10/vue_study">Params页面</router-link>
    <router-link to="/goParams/100/good job">Go Params页面</router-link>
    <router-link to="/aliasTest/110/hahaha">Alias Params页面</router-link>

    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>

  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    goback(){
      this.$router.go(-1)
    },
    gohead(){
      this.$router.go(1)
    },
    gohome(){
      this.$router.push('/')
    }
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  .fade-enter{
    opacity: 0;
  }
  .fade-enter-active {
    transition: opacity .5s;
  }
  .fade-leave {
    opacity: 1;
  }
  .fade-leave-active {
    opacity: 0;
    transition: opacity .5s;
  }
</style>
