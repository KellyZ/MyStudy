const express = require('express')
const path = require('path')
const bodyparser = require('body-parser')
const cors = require('cors')
const passport = require('passport')
const mongoose = require('mongoose')

const users = require('./routes/users')
const dbconfig = require('./config/dbconfig')


mongoose.connect(dbconfig.database, dbconfig.options)
mongoose.connection.on('connected', () => {
  console.log('Conected to database ' + dbconfig.database)
})
mongoose.connection.on('error', (err) => {
  console.log('Database error '+err)
})

const app = express()

app.use(cors())
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyparser.json())

app.use(passport.initialize())
app.use(passport.session())

require('./config/passport')(passport)

app.use('/users', users)

const port = 3000

app.get('/', (req, res,) => {
  res.send('hello world')
})

app.listen(port, () => {
  console.log('Server started...')
})