var postModel = require('../models/post')
var userModel = require('../models/user')

async function getPost (postId) {
  // try to get the post with the given id
  try {
    return await postModel.findById(postId).exec()
  }
  // else return null
  catch (error) {
    console.error(error)
    return null
  }
}

async function checkOwner (OwnerID) {
  // try to get the post with the given id
  try {
    // console.log(OwnerID+" im try block")
    const result = await userModel.exists({ _id: OwnerID })
    // console.log(result)
    return result
  }
  // else return null
  catch (error) {
    console.error('Owner not found ' + error)
    return false
  }
}

async function deletePost (postId) {
  // try to remove the post with the given id
  try {
    return await postModel.findByIdAndRemove(postId).exec()
  } catch (error) {
    console.error(error)
  }
}

async function checkExistence (token) {
  // try to get the post with the given friendToken
  try {
    var post = await postModel.findOne({ friendTokenIat: token }).exec()
    if (post === null) { return false } else return true
  }
  // else return null
  catch (error) {
    console.error(error)
    return null
  }
}

exports.deletePost = deletePost
exports.getPost = getPost
exports.checkOwner = checkOwner
exports.checkExistence = checkExistence
