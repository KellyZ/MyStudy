<template>
  <v-toolbar fixed class="cyan">
    <v-toolbar-title class="mr-4">
      <span class="home" @click="navigation({name:'root'})">TabTracker</span>
    </v-toolbar-title>

    <v-toolbar-items>
      <v-btn flat>
        Browser
      </v-btn>
    </v-toolbar-items>

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn flat dark @click="navigation({name:'login'})">
        Login
      </v-btn>
      <v-btn flat dark @click="navigation({name:'register'})">
        Sign Up
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    navigation (route) {
      this.$router.push(route)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  cursor: pointer;
}
</style>
