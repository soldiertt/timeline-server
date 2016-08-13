"use strict";
var timeevent_srv_ctrl_1 = require("../ctrl/timeevent.srv.ctrl");
function default_1(app) {
    var timeEventCtrl = new timeevent_srv_ctrl_1.default();
    app.route("/restapi/timeevent")
        .get(function (req, res) {
        timeEventCtrl.list(req, res);
    })
        .post(function (req, res) {
        timeEventCtrl.create(req, res);
    });
    app.route("/restapi/timeevent/:eventId")
        .get(function (req, res) {
        timeEventCtrl.read(req, res);
    })
        .put(function (req, res) {
        timeEventCtrl.update(req, res);
    })
        .delete(function (req, res) {
        timeEventCtrl.delete(req, res);
    });
    app.param("eventId", function (req, res, next, id) {
        timeEventCtrl.findByID(req, res, next, id);
    });
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
;
//# sourceMappingURL=timeevent.srv.route.js.map