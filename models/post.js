// load modules
var mongoose = require('mongoose')

// define the schema for user model
const PostSchema = mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  selfie: {
    type: String
  },
  name: {
    type: String,
    required: [true, 'Du musst einen Namen angeben!']
  },
  city: {
    type: String
  },
  birth: {
    type: String
  },
  gender: {
    type: String
  },
  size: {
    type: Number
  },
  eyes: {
    type: String
  },
  haircolor: {
    type: String
  },
  getToKnow: {
    type: String
  },
  pet: {
    type: String
  },
  drawing: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  },
  meme: {
    type: String
  },
  friendTokenIat: {
    type: String
  },
  color:{
    type:String
  },
  food: {
    type: String
  },
  superpower: {
    type: String
  },
  smthToDieFor: {
    type: String
  },
  proud: {
    type: String
  },
  customQuestions: [{
    question: {
      type: String,
      required: [true, 'Die Frage darf nicht leer sein!']
    },
    answer: {
      type: String,
      required: [true, 'Die Antwort darf nicht leer sein!']
    }
  }]
})

// export model to be used in app.js
module.exports = mongoose.model('Post', PostSchema)
