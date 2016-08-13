import * as mongoose from "mongoose";
import BasicCrudCtrl from "./basic-crud.srv.ctrl";

export default class TimeEventCtrl extends BasicCrudCtrl {

    constructor() {
        let timeEventModel = mongoose.model("TimeEvent");
        super(timeEventModel, "TimeEvent");
    }

    update(req, res) {
        let $ctrl = this;
        let timeEvent = req.object;
        /*timeEvent.title = req.body.title;
        timeEvent.description = req.body.description;
        timeEvent.type = req.body.type;
        timeEvent.participants = req.body.participants;
        timeEvent.date = req.body.date;*/
        //timeEvent = Object.assign({}, timeEvent, req.body);
        Object.keys(req.body).forEach(function(k) {
            timeEvent[k] = req.body[k];
        });
        timeEvent.save(function (err) {
            if (err) {
                return res.status(400).send({
                    message: $ctrl.getErrorMessage(err)
                });
            } else {
                res.json(timeEvent);
            }
        });
    }

}
