import {Schema} from "mongoose";
import participantSchema from "./participant.srv.model";

let timeEventSchema = new Schema({
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
        type: [participantSchema],
        required: "Participants are required"
    }
});

timeEventSchema.set("toJSON", {
    getters: true
});

export default timeEventSchema;
