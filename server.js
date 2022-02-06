// load modules
var express = require('express')
var cookieParser = require('cookie-parser')
var logger = require('morgan')
var cors = require('cors')
var mongoose = require('mongoose')
var restify = require('express-restify-mongoose')
var jwt = require('express-jwt')
var path = require('path')

// load models
var userModel = require('./models/user')
var postModel = require('./models/post')
var questionModel = require('./models/question')

// load middleware
var questionMiddleware = require('./middleware/question')
var userMiddleware = require('./middleware/user')
var postMiddleware = require('./middleware/post')

// load routes
var loginRouter = require('./auth/login')
var tokenRouter = require('./auth/token')

// load environment variables
require('dotenv').config()

// initialize express app and router
var app = express()
var router = express.Router()

// use middleware
app.use(cors())
app.use(logger('dev'))
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/api/v1', jwt({ secret: process.env.JWT_SECRET }).unless({ path: ['/login', { url: '/api/v1/user', methods: ['POST'] }] }))
app.use('/token', jwt({ secret: process.env.JWT_SECRET }))

// connect to db
mongoose.set('useUnifiedTopology', true)
mongoose.set('useNewUrlParser', true)
mongoose.set('useFindAndModify', false)
mongoose.connect(
  process.env.DB_CONNECTION,
  () => console.log('connected to DB')
)

// create rest api on models
restify.serve(router, userModel, userMiddleware)
restify.serve(router, postModel, postMiddleware)
restify.serve(router, questionModel, questionMiddleware)

// make express use the router
app.use(router)

// authentification
app.use('/login', loginRouter)
app.use('/token', tokenRouter)

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

// export app to be used in /bin/www
module.exports = app
