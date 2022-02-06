var questionMiddleware = {

  postCreate: (req, res, next) => {
    /* TODO */
    console.log('Add the question ID to the questions array of the user referenced in owner')
    next()
  },

  preUpdate: (req, res, next) => {
    /* TODO */
    console.log('Send Error if trying to change owner')
  },

  postDelete: (req, res, next) => {
    /* TODO */
    console.log('Remove the question ID from the questions array of the user referenced in owner')
    next()
  }
}

module.exports = questionMiddleware
