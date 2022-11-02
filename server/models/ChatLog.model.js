const { Schema, model } = require("mongoose");

const chatLogSchema = new Schema(
    {
        user_ids: [{
            type: Schema.Types.ObjectId,
            required: true,
    }],
        chat_log: [{
            type: Schema.Types.ObjectId,
            ref: 'Message'
        }]
    },
    {
        timestamps: true,
    }
);

module.exports = model("ChatLog", chatLogSchema);