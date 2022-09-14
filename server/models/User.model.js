const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    forename: {
      type: String,
      required: true
    },
    surname: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    },
    email_address: {
      type: String,
      unique: true,
      required: true
    },
    age: {
      type: Number,
      required: true
    },
    password: {
      type: String,
      required: true,
    },
    friends_list: [{
      type: Schema.Types.ObjectId,
      ref: 'User'
    }],
    friend_requests: [{
      type: Schema.Types.ObjectId,
      ref: 'User'
    }],
    friend_invites: [{
      type: Schema.Types.ObjectId,
      ref: 'User'
    }],
    chat_list: [{
      type: Schema.Types.ObjectId,
      ref: 'ChatLog'
    }]
  },
  {
    timestamps: true,
  }
);

module.exports = model("User", userSchema);
