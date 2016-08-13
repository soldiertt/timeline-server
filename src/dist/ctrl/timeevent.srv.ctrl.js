"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var mongoose = require("mongoose");
var basic_crud_srv_ctrl_1 = require("./basic-crud.srv.ctrl");
var TimeEventCtrl = (function (_super) {
    __extends(TimeEventCtrl, _super);
    function TimeEventCtrl() {
        var timeEventModel = mongoose.model("TimeEvent");
        _super.call(this, timeEventModel, "TimeEvent");
    }
    TimeEventCtrl.prototype.update = function (req, res) {
        var $ctrl = this;
        var timeEvent = req.object;
        /*timeEvent.title = req.body.title;
        timeEvent.description = req.body.description;
        timeEvent.type = req.body.type;
        timeEvent.participants = req.body.participants;
        timeEvent.date = req.body.date;*/
        //timeEvent = Object.assign({}, timeEvent, req.body);
        Object.keys(req.body).forEach(function (k) {
            timeEvent[k] = req.body[k];
        });
        timeEvent.save(function (err) {
            if (err) {
                return res.status(400).send({
                    message: $ctrl.getErrorMessage(err)
                });
            }
            else {
                res.json(timeEvent);
            }
        });
    };
    return TimeEventCtrl;
}(basic_crud_srv_ctrl_1.default));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TimeEventCtrl;
//# sourceMappingURL=timeevent.srv.ctrl.js.map