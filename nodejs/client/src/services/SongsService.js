import Api from '@/services/Api'

export default {
  index (key) {
    return Api().get('songs', {
      params: {
        search: key
      }
    })
  },
  create (song) {
    return Api().post('songs', song)
  },
  show (songID) {
    return Api().get('songs/' + songID)
  },
  edit (songID, song) {
    return Api().post('song/update/' + songID, song)
  }
}

// AuthenticationService.register({
//     email: 'example@gmail.com',
//     password: '123456'
// })
