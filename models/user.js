// load modules
var mongoose = require('mongoose')

// add email as schema-type
require('mongoose-type-email')

// define the schema for user model
const UserSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'Du musst einen Namen angeben!']
  },
  lastName: {
    type: String
  },
  img: {
    type: String
  },
  email: {
    type: mongoose.SchemaTypes.Email,
    required: [true, 'Du musst eine E-Mail angeben'],
    unique: true
  },
  password: {
    type: String,
    minlength: [8, 'Das Passwort muss min. 8 Zeichen haben!'],
    required: true
  },
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Post'
    }
  ],
  questions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Question'
    }
  ]
})

// export model to be used in app.js
module.exports = mongoose.model('User', UserSchema)
