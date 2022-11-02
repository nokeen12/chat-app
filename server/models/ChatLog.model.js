const { Schema, model } = require("mongoose");

const chatLogSchema = new Schema(
    {
        users: [{
            type: Schema.Types.ObjectId,
            required: true,
    }],
        chat_log: [{
            message: {
                type: String,
                required: true
            },
            sent_by: {
                type: Schema.Types.ObjectId,
                required: true
            }
        },
        {
            timestamps: true
        }]
    },
    {
        timestamps: true,
    }
);

module.exports = model("ChatLog", chatLogSchema);