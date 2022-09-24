const { Schema, model } = require("mongoose");

const messageSchema = new Schema(
  {
    chat_log: {
      type: Schema.Types.ObjectId,
      ref: 'ChatLog',
      required: true
    },
    message: {
      type: String,
      required: true,
    },
    user_id: {
      type: Schema.Types.ObjectId,
      required: true,
    }
  },
  {
    timestamps: true,
  }
);

module.exports = model("Message", messageSchema);