"use strict";
var BasicCrudCtrl = (function () {
    function BasicCrudCtrl(ObjectModel, objectName) {
        this.objectModel = ObjectModel;
        this.objectName = objectName;
    }
    BasicCrudCtrl.prototype.getErrorMessage = function (err) {
        var $ctrl = this;
        var message = "", errName;
        if (err.code) {
            switch (err.code) {
                case 11000:
                case 11001:
                    message = $ctrl.objectName + " already exists";
                    break;
                default:
                    message = "Something went wrong";
            }
        }
        else if (err.errors) {
            for (errName in err.errors) {
                if (err.errors[errName].message) {
                    message = err.errors[errName].message;
                }
            }
        }
        else {
            message = "Unknown server error";
        }
        return message;
    };
    ;
    BasicCrudCtrl.prototype.create = function (req, res) {
        var $ctrl = this;
        var object = new $ctrl.objectModel(req.body);
        object.save(function (err) {
            if (err) {
                console.log(err);
                return res.status(400).send({
                    message: $ctrl.getErrorMessage(err)
                });
            }
            else {
                res.json(object);
            }
        });
    };
    ;
    BasicCrudCtrl.prototype.list = function (req, res) {
        var $ctrl = this;
        var queryObj = {};
        $ctrl.objectModel.find(queryObj).exec(function (err, objectList) {
            if (err) {
                return res.status(400).send({
                    message: $ctrl.getErrorMessage(err)
                });
            }
            else {
                res.json(objectList);
            }
        });
    };
    ;
    BasicCrudCtrl.prototype.findByID = function (req, res, next, id) {
        var $ctrl = this;
        $ctrl.objectModel.findById(id).exec(function (err, object) {
            if (err) {
                return next(err);
            }
            if (!object) {
                return next(new Error("Failed to load " + $ctrl.objectName + " " + id));
            }
            req.object = object;
            next();
        });
    };
    ;
    BasicCrudCtrl.prototype.read = function (req, res) {
        res.json(req.object);
    };
    ;
    BasicCrudCtrl.prototype.delete = function (req, res) {
        var $ctrl = this;
        var object = req.object;
        object.remove(function (err) {
            if (err) {
                return res.status(400).send({
                    message: $ctrl.getErrorMessage(err)
                });
            }
            else {
                res.json(object);
            }
        });
    };
    ;
    return BasicCrudCtrl;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = BasicCrudCtrl;
;
//# sourceMappingURL=basic-crud.srv.ctrl.js.map