<template>
  <div>Hello params, {{msg}}
    <p>newsId:{{$route.params.newsId}},newsTitle:<span v-text="$route.params.newsTitle"></span></p>
  </div>
</template>

<script>
  export default{
    name:'Parmas',
    data(){
      return {
        msg: 'news id'
      }
    }
  }
</script>

<style scoped>

</style>
