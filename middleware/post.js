const userControler = require('../controler/user')
const postControler = require('../controler/post')

var postMiddleware = {

  preMiddleware: async (req, res, next) => {
    // if user is admin continue
    if (req.user.admin) { next(); return }

    // set the correct owner automaticly
    req.body.owner = req.user.user

    // if its a friend and a post request, continue
    if (String(req.method) === 'POST' && req.user.friend) { next(); return }

    // if request operates on all resources (and user is not admin), send error
    if (req.params.id === undefined && req.query.query === undefined) { return res.sendStatus(401) }

    // if request operates on a single resource (via query)
    if (req.query.query !== undefined) {
      var owner = JSON.parse(req.query.query).owner
      // and if user is not owner (or admin), send error
      if (owner !== req.user.user) { return res.sendStatus(401) }
    }

    // if request operates on a single resource (via param)
    if (req.params.id !== undefined) {
      try {
      // get the post from db
        var singlePost = await postControler.getPost(req.params.id)
      } catch (error) {
        console.error(error)
      }

      // if it exists
      if (singlePost !== null) {
        // and if user is not owner (or admin), send error
        if (String(singlePost.owner) !== req.user.user) { return res.sendStatus(401) }
      }
    }

    next()
  },

  /* adds the friendToken to the Post and checks if the token was allready used and checks that owner exists */
  preCreate: async (req, res, next) => {
    try {
      // Check if the owner ID is already on the DataBase as a User ID
      var currentOwner = await postControler.checkOwner(req.body.owner)
    } catch (error) {
      console.error(error)
    }

    // if the check was false set the body to null to not create a post
    if (!currentOwner) {
      // setting body null
      req.body = null
      // send Errormessage
      return res.sendStatus(404)
    }

    if (req.user.friend) {
      var friendTokenIat = req.user.iat

      try {
        if (await postControler.checkExistence(friendTokenIat)) { return res.status(400).send('Token wurde bereits verwendet!') } else req.body.friendTokenIat = friendTokenIat
      } catch (error) {
        console.error(error)
      }
    }

    next()
  },

  /* Add the post ID to the posts array,
     of the user referenced in owner */
  postCreate: async (req, res, next) => {
    // read the created post
    const result = req.erm.result
    // extract the owner ID
    const ownerId = result.owner
    // extract the user ID
    const postId = result._id

    try {
      // add the post to the posts array of the owner
      await userControler.addPost(ownerId, postId)
    } catch (error) {
      console.error(error)
    }

    next()
  },

  /* Send Error if trying to change owner */
  preUpdate: async (req, res, next) => {
    // read the new owner from the request
    var newOwner = req.body.owner

    try {
      // read the old owner from the current post
      var oldPost = await postControler.getPost(req.params.id)
    } catch (error) {
      console.error(error)
    }

    // if there is a new owner and it is different from the old owner, then send an error
    if (newOwner !== undefined && newOwner != oldPost.owner) {
      return res.status(400).send('Ey, nicht den owner ändern!')
    }

    next()
  },

  preDelete: async (req, res, next) => {
    // go on if there is no post id defined
    if (req.params.id !== undefined) {
      try {
        // read the current post from DB
        var currentPost = await postControler.getPost(req.params.id)
        // add current post object to req, so that it could be used in the following middlewares
        req.body.oldPost = currentPost
      } catch (error) {
        console.error(error)
      }
    }

    next()
  },

  /* Remove the post ID from the posts array of the user referenced in owner */
  postDelete: async (req, res, next) => {
    // read the deleted post id from request url
    const postId = req.params.id
    // extract the owner ID from the old version of the post stored in the req.body
    const ownerId = req.body.oldPost.owner

    try {
      // remove the post of the posts array of the owner
      await userControler.removePost(ownerId, postId)
    } catch (error) {
      console.error(error)
    }
    next()
  }
}

module.exports = postMiddleware
