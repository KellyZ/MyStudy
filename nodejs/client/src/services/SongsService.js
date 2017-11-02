import Api from '@/services/Api'

export default {
  index () {
    return Api().get('songs')
  },
  create (song) {
    return Api().post('songs', song)
  }
}

// AuthenticationService.register({
//     email: 'example@gmail.com',
//     password: '123456'
// })
