const { Schema, model } = require("mongoose");

const messageSchema = new Schema(
  {
    message: {
      type: String,
      required: true,
    }
  },
  {
    timestamps: true,
  }
);

module.exports = model("Message", messageSchema);