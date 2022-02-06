const hash = require('../auth/hash')

const userControler = require('../controler/user')
const postControler = require('../controler/post')

// middleware for express-restify-mongoose
var userMiddleware = {

  preMiddleware: async (req, res, next) => {
    // if no token was given continue
    if (req.user === undefined) { next(); return }

    // if user is admin continue
    if (req.user.admin) { next() } else {
    // if request operates on all resources (and user is not admin), send error
      if (req.params.id === undefined) {
        return res.sendStatus(401)
      }

      // if request operates on a single resource and user has different id (and user is not admin), send error
      if (req.params.id !== req.user.user) { return res.sendStatus(401) }

      next()
    }
  },

  preCreate: async (req, res, next) => {
    if (req.body.password !== undefined) { req.body.password = await hash.generate(req.body.password) }

    next()
  },

  /* Send Error if trying to change posts array */
  preUpdate: async (req, res, next) => {
    // read the new posts array from the request
    var newPosts = req.body.posts
    try {
      // read the old posts array from the old user stored in the req body
      var oldPosts = await userControler.getUser(req.params.id)
    } catch (error) {
      console.error(error)
    }

    // if there is a new posts array and it is different from the old one, then send an error
    if (newPosts !== undefined && JSON.stringify(newPosts) !== JSON.stringify(oldPosts)) {
      res.status(400).send('Ey nicht die posts ändern!')
    }

    if (req.body.password !== undefined) { req.body.password = await hash.generate(req.body.password) }

    next()
  },

  /* save old user for deletion */
  preDelete: async (req, res, next) => {
    // go on if there is no user id defined
    if (req.params.id !== undefined) {
      try {
        // read the current user from DB
        var currentUser = await userControler.getUser(req.params.id)
      } catch (error) {
        console.error(error)
      }

      // add current user object to req, so that it could be used in the following middlewares
      req.body.oldUser = currentUser
    }

    next()
  },

  /* delete the posts referenced in posts */
  postDelete: (req, res, next) => {
    // read the old posts array from the old user stored in the req body
    var oldPosts = req.body.oldUser.posts
    // go through array and delete each post
    oldPosts.forEach(function (postId) {
      postControler.deletePost(postId)
    })

    next()
  }
}

module.exports = userMiddleware
