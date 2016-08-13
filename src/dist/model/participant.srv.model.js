"use strict";
var mongoose_1 = require("mongoose");
var participantSchema = new mongoose_1.Schema({
    firstname: {
        type: String,
        required: "Firstname is required",
        trim: true
    },
    lastname: {
        type: String,
        required: "Lastname is required",
        trim: true
    }
});
participantSchema.set("toJSON", {
    getters: true
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = participantSchema;
//# sourceMappingURL=participant.srv.model.js.map