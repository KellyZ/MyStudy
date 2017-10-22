<template>
  <div>
    {{msg}},<p>username is {{$route.params.username}}</p>
  </div>
</template>

<script>
  export default {
    name: 'hi1',
    data(){
      return {
        msg:'my name is hi1'
      }
    }
  }
</script>

<style scoped>

</style>
