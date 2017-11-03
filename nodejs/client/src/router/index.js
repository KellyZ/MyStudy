import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Song from '@/components/Song'
import CreateSong from '@/components/SongCreate'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      component: HelloWorld
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/song',
      name: 'song',
      component: Song
    },
    {
      path: '/song/create',
      name: 'createsong',
      component: CreateSong
    },
    {
      path: '/song/edit/:songID',
      name: 'editsong',
      component: CreateSong
    }
  ]
})
