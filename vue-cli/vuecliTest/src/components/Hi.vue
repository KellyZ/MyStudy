<template>
  <div>
    <router-view name="left" style="float:left;width:50%;height:300px;background:#ccc;"></router-view>
    <router-view name="right" style="float:left;width:50%;height:300px;background:#c0c;"></router-view>
  </div>
</template>

<script>
  export default {
    name: 'hi',
    data(){
      return {
        msg:'my name is Hi'
      }
    }
  }
</script>

<style scoped>

</style>
