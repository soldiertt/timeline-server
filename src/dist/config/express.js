"use strict";
var config_1 = require("./config");
var http = require("http");
var express = require("express");
var morgan = require("morgan");
var compress = require("compression");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var cors = require("cors");
var timeevent_srv_route_1 = require("../routes/timeevent.srv.route");
function default_1() {
    var app = express(), server = http.createServer(app);
    var appHost = process.env.NODE_IP || "localhost";
    // CORS CONFIG
    var corsOptions = {
        origin: 'http://' + appHost + ':4200'
    };
    app.use(cors(corsOptions));
    if (process.env.NODE_ENV === "development") {
        app.use(morgan("dev"));
    }
    else if (process.env.NODE_ENV === "production") {
        app.use(compress());
    }
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
    app.use(methodOverride());
    app.set("views", "./src/views");
    app.set("view engine", config_1.default().viewEngine);
    timeevent_srv_route_1.default(app);
    app.use(function errorHandler(err, req, res, next) {
        res.writeHead(500, { "Content-Type": "application/json" });
        var error = { error: err.message };
        res.end(JSON.stringify(error));
    });
    return server;
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
;
//# sourceMappingURL=express.js.map