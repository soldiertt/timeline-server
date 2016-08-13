"use strict";
var mongoose_1 = require("mongoose");
var participant_srv_model_1 = require("./participant.srv.model");
var timeEventSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: "Title is required",
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    type: {
        type: String,
        required: "Type is required",
        enum: ["HOLIDAY", "STAGE", "OTHER"]
    },
    date: {
        type: Date,
        required: "Date is required"
    },
    participants: {
        type: [participant_srv_model_1.default],
        required: "Participants are required"
    }
});
timeEventSchema.set("toJSON", {
    getters: true
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = timeEventSchema;
//# sourceMappingURL=timeevent.srv.model.js.map