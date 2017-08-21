'use strict'
var fs
const r = (app, _fs) => {
    fs = _fs
    app.get('/', (req, res) => {
        res.render('index.html')
    })
    app.get('/users', Users)
    app.get('/au', au)
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

function au(req, res) {
    let _mau = require('./data/monthly-active-users.json')
    let _dau = require('./data/daily-active-users.json')
    let _wau = require('./data/weekly-active-users.json')
    let mau = [],
        dau = [],
        wau = []
    for (let i in _mau) {
        mau.push([_mau[i].key, _mau[i].doc_count])
    }
    for (let i in _wau) {
        wau.push([_wau[i].key, _wau[i].doc_count])
    }
    for (let i in _dau) {
        dau.push([_dau[i].key, _dau[i].doc_count])
    }
    let data = {}
    data.mau = mau
    data.dau = dau
    data.wau = wau
    console.log({ data: data })
    res.render('au.html', { 'data': data })
}
module.exports = r