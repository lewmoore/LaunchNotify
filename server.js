const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const fetch = require('node-fetch')
app.set("view engine", "ejs")
app.set("views", "views")

app.get('/', function(req, res){
    fetch('https://api.spacexdata.com/v2/launches/next').then(response => response.json()).then(json => res.render('index', { json: json }))
})

let port = process.env.PORT || 8080;
app.listen(port)
console.log("You're on localhost " + port);

module.exports = app