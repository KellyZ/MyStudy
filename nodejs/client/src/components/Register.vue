<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <div class='white elevation-2'>
        <v-toolbar flat dense class='cyan'>
            <v-toolbar-title>Register</v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 pt-2 pb-2">
          <form 
            name="tab-tracker-form"
            autocomplete="off">
            <v-text-field
                name="email"
                label="email"
                v-model="email"
              ></v-text-field>
            <br>
            <v-text-field
                name="password"
                label="password"
                type="password"
                v-model="password"
                autocomplete="new-password"
              ></v-text-field>
            </form>
          <br>
          <div class="error" v-text="error"></div>
          <br>
          <v-btn class="cyan" @click="register">Register</v-btn>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  name: 'Register',
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  watch: {
    email (value) {
      // console.log('email has changed', value)
    }
  },
  methods: {
    async register () {
      try {
        console.log('click register')
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.body.error
      }
    }
  }
  // mounted () {
  //   setTimeout(() => {
  //     this.email = 'hello world'
  //   }, 1000)
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  color: red;
}
</style>
