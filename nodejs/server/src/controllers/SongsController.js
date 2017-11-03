const {Song} = require('../models')

module.exports = {
  async index (req, res) {
    try {
      let songs = null
      const search = req.query.search
      if (search) {
        songs = await Song.findAll({
          where: {
            $or: ['title', 'artist', 'album']
              .map(key => ({
                [key]: {
                  $like: `%${search}%`
                }
              }))
          }
        })
      } else {
        songs = await Song.findAll({
          limit: 10
        })
      }
      res.send(songs)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured'
      })
    }
  },
  async post (req, res) {
    try {
      const song = await Song.create(req.body)
      res.send(song)
    } catch (err) {
      res.status(400).send({
        error: `crate song error ${err}`
      })
    }
  },
  async show (req, res) {
    try {
      // const song = await Song.findOne({
      //   where: {
      //     id: req.params.songID
      //   }
      // })
      const song = await Song.findById(req.params.songID)
      res.send(song)
    } catch (err) {
      res.status(400).send({
        error: `get song error ${err}`
      })
    }
  },
  async update (req, res) {
    try {
      const song = await Song.update(req.body, {
        where: {
          id: req.params.songID
        }
      })
      res.send(song)
    } catch (err) {
      res.status(400).send({
        error: `update song error ${err}`
      })
    }
  }
}
