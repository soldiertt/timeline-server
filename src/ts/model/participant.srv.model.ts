import {Schema} from "mongoose";

let participantSchema = new Schema({
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

export default participantSchema;
