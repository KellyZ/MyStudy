<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <SongSearch />
      <Panel title="Songs">
        <!-- <div slot="content"> -->
          <div v-for="song in songs" :key="song.tile">
            {{song.title}} - {{song.artist}} - {{song.album}}
            <v-btn flat @click="navigation({name: 'editsong', params:{songID:song.id}})">
              Edit
            </v-btn>
          </div>
      </Panel>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
import SongSearch from '@/components/SongSearch'
import SongsService from '@/services/SongsService'
export default {
  components: {
    Panel,
    SongSearch
  },
  methods: {
    navigation (route) {
      this.$router.push(route)
    }
  },
  data () {
    return {
      songs: null
    }
  },
  async mounted () {
    this.songs = (await SongsService.index()).data
  },
  watch: {
    '$route.query.search': {
      immediate: true,
      async handler (value) {
        this.songs = (await SongsService.index(this.$route.query.search)).data
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
