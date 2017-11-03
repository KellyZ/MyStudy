const AuthenticationController = require('./controllers/AuthenticationController')
const SongsController = require('./controllers/SongsController')

const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')

module.exports = (app) => {
  app.get('/status', (req, res) => {
    res.send({
      message: 'hello world'
    })
  })

  app.post('/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register)

  app.post('/login',
    AuthenticationControllerPolicy.login,
    AuthenticationController.login)

  app.get('/songs',
    SongsController.index)

  app.get('/songs/:songID',
    SongsController.show)

  app.post('/songs',
    SongsController.post)

  app.post('/song/update/:songID',
    SongsController.update)
}
