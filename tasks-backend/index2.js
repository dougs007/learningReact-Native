/**
 * Arquivo base explicando um pouco sobre o express e o bodyParser.
 */
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())

app.post('/blabla/:valor', (req, res, next) => {
    console.log('Func 0')
    next()
})

app.post('/blabla/:valor', (req, res, next) => {
    console.log('Func 1')
    res.status(200).send('Meu Backend = ' + JSON.stringify(req.body))
    next()
})

app.post('/blabla/:valor', (req, res) => {
    console.log('Func 2')
})

app.listen(3000, () => {
    console.log('Backend executando ...')
})