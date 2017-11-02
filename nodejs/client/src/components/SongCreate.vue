<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <Panel title="Create Song">
        <!-- <div slot="content"> -->
        <v-text-field
            required
            :rules="[requried]"
            name="title"
            label="title"
            v-model="title"
          ></v-text-field>
        <br>
        <v-text-field
            name="artist"
            label="artist"
            v-model="artist"
          ></v-text-field>
        <br>
        <v-text-field
            name="album"
            label="album"
            v-model="album"
          ></v-text-field>
        <br>
        <v-btn class="cyan" @click="createSong">Create Song</v-btn>
      </Panel>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
import SongsService from '@/services/SongsService'
export default {
  components: {
    Panel
  },
  data () {
    return {
      song: {
        title: null,
        artist: null,
        album: null
      },
      requried: (value) => !!value || 'Required.'
    }
  },
  methods: {
    async createSong () {
      try {
        await SongsService.create({
          title: this.title,
          artist: this.artist,
          album: this.album
        })
        this.$router.push({name: 'song'})
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
