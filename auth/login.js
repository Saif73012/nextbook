var express = require('express')
var jwt = require('jsonwebtoken')

const hash = require('./hash')

// load controlers
var userControler = require('../controler/user')

// create router
var router = express.Router()

router.post('/', async function (req, res) {
  // read login data from request body
  const password = req.body.password
  const mail = req.body.email
  var token

  // cheack admin login
  if (mail === 'admin@nextbook.eu') {
    if (password === 'password') {
      token = signToken(null, false, true)
      return res.send(token)
    } else return res.status(400).send('wrong password')
  }

  // get the user with the given mail
  const user = await userControler.getUserbyMail(mail)

  // error if user doesnt exist
  if (user === null) {
    return res.status(400).send('no user with this mail')
  }

  // check password
  if (await hash.compare(password, user.password)) {
    token = signToken(user._id, false, false)

    var result = {
      id: user._id,
      token: token
    }

    return res.send(result)
  } else return res.status(400).send('wrong password')
})

function signToken(userid, friend, admin) {
  var token = jwt.sign(
    {
      user: userid,
      friend: friend,
      admin: admin
    },
    process.env.JWT_SECRET, { expiresIn: 3600 })// default is s --> 120 equals 2 min --> other options "2 days" , "10h", "7d"

  return token
}

module.exports = router
