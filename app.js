'use strict'
const express = require('express')
const app = express()

app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')
app.engine('html', require('ejs').renderFile)

require('./routes/index')(app)

app.listen(4000, () => { console.log('start') })