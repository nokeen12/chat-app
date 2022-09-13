const { Schema, model } = require("mongoose");

const chatLogSchema = new Schema(
    {
        dr_id: {
            type: Schema.Types.ObjectId,
            required: true,
    },
        patient_id: {
            type: Schema.Types.ObjectId,
            required: true,
    },
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