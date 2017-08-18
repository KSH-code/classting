'use strict'
var fs
const r = (app, _fs) => {
    fs = _fs
    app.get('/', (req, res) => {
        res.render('index.html')
    })
    app.get('/users', Users)
}

function Users(req, res) {
    let s = require('./data/user_signedup.json')
    let d = require('./data/user_deleted.json')
    let data = []
    for (let i in s) {
        let dd = s[i].doc_count - d[i].doc_count
        data.push({
            key_as_string: s[i].key_as_string,
            doc_count: dd
        })
    }
    console.log({ data: data })
    res.render('users.html', { 'data': data })
}
module.exports = r