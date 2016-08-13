import TimeEventCtrl from "../ctrl/timeevent.srv.ctrl";

export default function (app) {
    let timeEventCtrl = new TimeEventCtrl();

    app.route("/restapi/timeevent")
        .get((req, res) => {
            timeEventCtrl.list(req, res);
        })
        .post((req, res) => {
            timeEventCtrl.create(req, res);
        });
    app.route("/restapi/timeevent/:eventId")
        .get((req, res) => {
            timeEventCtrl.read(req, res);
        })
        .put((req, res) => {
            timeEventCtrl.update(req, res);
        })
        .delete((req, res) => {
            timeEventCtrl.delete(req, res);
        });
    app.param("eventId", (req, res, next, id) => {
        timeEventCtrl.findByID(req, res, next, id);
    });
};
