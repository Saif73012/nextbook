var express = require('express')
var jwt = require('jsonwebtoken')

// create router
var router = express.Router()

router.get('/', async function (req, res) {
  const userId = req.user.user
  const token = signToken(userId, true, false)
  res.send(token)
})

function signToken(userid, friend, admin) {
  console.log(userid)

  var token = jwt.sign(
    {
      user: userid,
      friend: friend,
      admin: admin
    },
    process.env.JWT_SECRET, { expiresIn: 1200 }) // default is s --> 120 equals 2 min --> other options "2 days" , "10h", "7d"

  return token
}

// export router
module.exports = router
