const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors({
  origin: 'http://160.119.142.236:52773/csp/development/save',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type'],
  credentials: true
}))

// Server code 

app.listen(3000)