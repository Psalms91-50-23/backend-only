const express = require('express')
const path = require('path')
const server = express()
const todoRoutes = require('./routes/todos')


server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/todos', todoRoutes)

//if no other routes match will send default page back, put this at the end after all your routes, this below code is a wild card one
// server.get('*', (req, res) => {
    // res.sendFile(path.join(__dirname, 'public', 'index.html'))
  // })

module.exports = server