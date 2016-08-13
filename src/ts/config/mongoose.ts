import config from "./config";
import * as mongoose        from "mongoose";
import timeEventSchema       from "../model/timeevent.srv.model";

export default function() {
    console.log(config().db);
    let db = mongoose.connect(config().db);
    mongoose.model("TimeEvent", timeEventSchema);
    return db;
};
