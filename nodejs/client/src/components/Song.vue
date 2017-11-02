<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <Panel title="Songs">
        <!-- <div slot="content"> -->
          <div v-for="song in songs" :key="song.tile">
            {{song.title}}
            {{song.artist}}
            {{song.album}}
          </div>
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
      songs: null
    }
  },
  async mounted () {
    this.songs = (await SongsService.index()).data
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
