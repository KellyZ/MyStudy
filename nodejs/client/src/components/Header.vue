<template>
  <v-toolbar fixed class="cyan">
    <v-toolbar-title class="mr-4">
      <span class="home" @click="navigation({name:'root'})">TabTracker</span>
    </v-toolbar-title>

    <v-toolbar-items>
      <v-btn flat :to="{name: 'song'}">
        Browser
      </v-btn>
      <v-btn flat @click="navigation({name: 'createsong'})">
        Create Song
      </v-btn>
    </v-toolbar-items>

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn flat dark @click="navigation({name:'login'})"
        v-if="!$store.state.isUserLoggedIn">
        Login
      </v-btn>
      <v-btn flat dark @click="navigation({name:'register'})"
        v-if="!$store.state.isUserLoggedIn">
        Sign Up
      </v-btn>
      <v-btn flat dark @click="logout"
        v-if="$store.state.isUserLoggedIn">
        Logout
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    navigation (route) {
      this.$router.push(route)
    },
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({name: 'root'})
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
