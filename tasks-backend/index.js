const express = require('express')
const app = express()
const db = require('./config/db')
const consign = require('consign')

consign()
  .include('./config/passport.js')
  .then('./config/middlewares.js')
  .then('./api')
  .then('./config/routes.js')
  .into(app)

app.db = db

const PORT = 3000
const HOST = '0.0.0.0'

app.get('/', (req, res) => {
  res.status(200).send('Meu BackEnd!')
})

app.listen(PORT, HOST, () => {
  console.log('Backend executando...')
})
