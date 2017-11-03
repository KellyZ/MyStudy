<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <panel title="Login">
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
          ></v-text-field>
        <br>
        <div class="error" v-text="error"></div>
        <br>
        <v-btn class="cyan" @click="login">Login</v-btn>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import Panel from '@/components/Panel'
export default {
  name: 'Login',
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
    async login () {
      try {
        console.log('click login')
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.$router.push({
          name: 'song'
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  },
  components: {
    Panel
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

</style>
