var userModel = require('../models/user')

/*  find the user with the userId in DB
    and add the postId to the posts array */
async function addPost (userId, postId) {
  try {
    await
    userModel
      .findByIdAndUpdate(userId, { $push: { posts: postId } })
      .exec()
  } catch (error) { console.error(error) }
}

/*  find the user with the userId in DB
    and remove the postId from the posts array */
async function removePost (userId, postId) {
  try {
    await
    userModel
      .findByIdAndUpdate(userId, { $pull: { posts: postId } })
      .exec()
  } catch (error) { console.error(error) }
}

async function getUser (userId) {
  // try to get the user with the given id
  try {
    return await userModel.findById(userId).exec()
  }
  // else return null
  catch (error) {
    console.error(error)
    return null
  }
}

async function getUserbyMail (userMail) {
  // try to get the user with the given mail
  try {
    return await userModel.findOne({ email: userMail }).exec()
  }
  // else return null
  catch (error) {
    console.error(error)
    return null
  }
}

exports.getUser = getUser
exports.addPost = addPost
exports.removePost = removePost
exports.getUserbyMail = getUserbyMail
