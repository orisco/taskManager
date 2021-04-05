const mongoose = require("mongoose");
const _ = require("loadash")
const UserSchema = new.mongoose.

Schema({
  email: {
    type: String,
    required: true,
    minlength: 1,
    trim: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 8
  },
  sessions: {
    token: {
      type: String,
      required: true,
    },
    expiresAt: {
      type: Number,
      required: true
    }
  }
})


// // instance methods
// UserSchema.methods.toJSON = function() {
//   const user = this;
//   const userObject = user.toObject();
// // return doc except doc and sessions
//   return _.omit(userObject, ['password', 'sessions'])
// }

// // UserSchema.