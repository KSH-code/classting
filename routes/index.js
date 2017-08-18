'use strict'
const fs = require('fs')
const r = (app) => {
    require('./get')(app, fs)
}
module.exports = r