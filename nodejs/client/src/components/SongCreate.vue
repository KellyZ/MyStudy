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
            v-model="song.title"
          ></v-text-field>
        <br>
        <v-text-field
            name="artist"
            label="artist"
            v-model="song.artist"
          ></v-text-field>
        <br>
        <v-text-field
            name="album"
            label="album"
            v-model="song.album"
          ></v-text-field>
        <br>
        <v-btn class="cyan" @click="createSong" v-if="!this.$store.state.route.params.songID">Create Song</v-btn>
        <v-btn class="cyan" @click="editSong" v-else>Edit Song</v-btn>
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
  async mounted () {
    const songID = this.$store.state.route.params.songID
    const song = (await SongsService.show(songID)).data
    console.log(song)
    this.song = song
  },
  methods: {
    async createSong () {
      try {
        await SongsService.create({
          title: this.song.title,
          artist: this.song.artist,
          album: this.song.album
        })
        this.$router.push({name: 'song'})
      } catch (err) {
        console.log(err)
      }
    },
    async editSong () {
      try {
        await SongsService.edit(this.$store.state.route.params.songID, {
          title: this.song.title,
          artist: this.song.artist,
          album: this.song.album
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
