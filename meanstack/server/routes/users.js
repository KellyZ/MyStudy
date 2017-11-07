const express = require('express')
const router = express.Router()
const passport = require('passport')
const jwt = require('jsonwebtoken')

const User = require('../models/user')

router.post('/register', (req, res, next) => {
  let newUser = new User({
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    passport: req.body.passport
  })
  User.addUser(newUser, () => {
    
  })
})

router.get('/authenticate', (req, res, next) => {
  res.send('Authenticatte')
})

router.get('/validate', (req, res, next) => {
  res.send('Validate')
})

module.exports = router