"use strict";
var config_1 = require("./config");
var mongoose = require("mongoose");
var timeevent_srv_model_1 = require("../model/timeevent.srv.model");
function default_1() {
    console.log(config_1.default().db);
    var db = mongoose.connect(config_1.default().db);
    mongoose.model("TimeEvent", timeevent_srv_model_1.default);
    return db;
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
;
//# sourceMappingURL=mongoose.js.map