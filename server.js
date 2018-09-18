const express = require('express')
const app = express()
const bodyParser = require('body-parser')


let port = process.env.PORT || 8080;
app.listen(port)
console.log("You're on localhost " + port);

module.exports = app