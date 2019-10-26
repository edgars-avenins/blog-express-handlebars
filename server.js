// This is the file which defines how our server is run

// Import packages into our file
const express = require('express')
const hbs = require('express-handlebars')
const baseRoutes = require('./routes/baseRoutes')
const sprintRoutes = require('./routes/sprintRoutes')

// Set up express server
const server = express()

//Use middleware

server.engine('hbs', hbs({
    extname: 'hbs',
    defaultLayout: 'main'
}))
server.set('view engine', 'hbs')
// Serve static files
server.use(express.static('public'))


// Set up routes
server.use('/', baseRoutes)
server.use('/sprint', sprintRoutes)

// Exports our server for use elsewhere
module.exports = server