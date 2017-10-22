<template>
  <div id="app">
    <img src="./assets/logo.png"><br>

    <router-link :to="{name:'Hello'}">首页</router-link>
    <router-link :to="{name:'Hi'}">Hi页面</router-link>
    <router-link :to="{name:'Hi1',params:{username:'haha'}}">Hi1页面</router-link>
    <router-link :to="{name:'Hi2',params:{username:'hehe'}}">Hi2页面</router-link>
    <router-link :to="{name:'Params'}">Params页面</router-link>

    <router-view></router-view>

  </div>
</template>

<script>
export default {
  name: 'app'
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
</style>
