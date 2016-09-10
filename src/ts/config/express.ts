import config             from "./config";
import * as http          from "http";
import * as express       from "express";
import * as morgan        from "morgan";
import * as compress      from "compression";
import * as bodyParser    from "body-parser";
import * as methodOverride from "method-override";
import * as cors          from "cors";
import timeEventRoute      from "../routes/timeevent.srv.route";

export default function () {
    let app = express(),
        server = http.createServer(app);

    process.env.NODE_IP = process.env.NODE_IP || "localhost";

    // CORS CONFIG
    var corsOptions = {
        origin: 'http://' + process.env.NODE_IP + ':4200'
    };
    app.use(cors(corsOptions));

    if (process.env.NODE_ENV === "development") {
        app.use(morgan("dev"));
    } else if (process.env.NODE_ENV === "production") {
        app.use(compress());
    }
    app.use(bodyParser.urlencoded({
        extended: true
    }));

    app.use(bodyParser.json());
    app.use(methodOverride());

    app.set("views", "./src/views");
    app.set("view engine", config().viewEngine);

    timeEventRoute(app);

    app.use(function errorHandler(err, req:Express.Request, res:express.Response, next) {
        res.writeHead(500, {"Content-Type": "application/json"});
        let error = {error: err.message};
        res.end(JSON.stringify(error));
    });

    return server;
};
