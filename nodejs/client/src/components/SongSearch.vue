<template>
  <Panel title="search" class="mb-2">
      <v-text-field 
        label="Search by song title,artist,album"
        name="search-key"
        v-model="search">

      </v-text-field>
  </Panel>
</template>

<<script>
import Panel from '@/components/Panel'
import _ from 'lodash'

export default {
  components: {
    Panel
  },
  data () {
    return {
      search: null
    }
  },
  watch: {
    search: _.debounce(async function (value) {
      const route = {name: 'song'}
      if (this.search !== '') {
        route.query = {search: this.search}
      }
      this.$router.push(route)
    }, 700),
    '$route.query.search': {
      immediate: true,
      handler (value) {
        this.search = this.$route.query.search
      }
    }
  }
}
</script>

<style scoped>

</style>


