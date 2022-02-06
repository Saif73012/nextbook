// load modules
var mongoose = require('mongoose')

// define the schema for question model
const QuestionSchema = mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  content: {
    type: String,
    required: [true, 'Du musst eine Frage angeben!']
  }
})

// export model to be used in app.js
module.exports = mongoose.model('Question', QuestionSchema)
