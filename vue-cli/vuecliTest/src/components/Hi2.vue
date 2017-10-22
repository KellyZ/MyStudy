<template>
  <div>
    {{msg}},<p>username is {{$route.params.username}}</p>
  </div>
</template>

<script>
  export default {
    name: 'hi2',
    data(){
      return {
        msg:'my name is hi2'
      }
    }
  }
</script>

<style scoped>

</style>
