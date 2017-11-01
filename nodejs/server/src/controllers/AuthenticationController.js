const {
  User
} = require('../models')

module.exports = {
  register (req, res) {
    try {
      const user = User.create(req.body)
      res.send(user.toJSON())
    } catch (err) {
      res.status(400).send({
        error: `This email account is already in use. ${err}`
      })
    }
  }
}