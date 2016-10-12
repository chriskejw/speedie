// import express file
var express = require('express')
// instanciating the express server
var app = express()
// set port to listen on 3000
var port = 3000
// get page.js from routes folde
var router = express.Router()
// set all the routes
var static_routes = require('./routes/pages')
var movies_routes = require('./routes/movies')
var bodyParser = require('body-parser')
var methodOverride = require('method-override')

// MIDDLEWARE:

// assume the view engine for express is ejs
// for my server set my view engine as ejs (can be other view engines)
// res. render(index) = index.ejs inside (views folder)
app.set('view engine', 'ejs')

// capture all request, assume all the static files are in the public folder
// look for the public folder (looks for css, images, js, everything)
// express.static = doesn't change the app.js
// __dirname = will make sure that the public folder is in the same directory of the app.js
app.use(express.static(__dirname + '/public'))

// capture all request, let it filtered by body-parse package
app.use(bodyParser.urlencoded({
  extended: true
}))

// run methodOverride
app.use(methodOverride())

// add middleware to handle all static routes
app.use('/', static_routes)
app.use('/movies', movies_routes)

// telling express server to listen to the port
app.listen(port)
console.log('Server running at http://localhost:' + port + '/')
