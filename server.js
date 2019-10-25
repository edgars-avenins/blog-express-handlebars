// This is the file which defines how our server is run

// Import packages into our file
const express = require('express')
const hbs = require('express-handlebars')

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
server.get('/', (req, res) => {
    res.render('blog/indexBody', {})
})

// server.get('/blog', (req, res) => {
//     res.send("Blog Page")
// })

// Exports our server for use elsewhere
module.exports = server