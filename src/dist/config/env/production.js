"use strict";
var config_class_1 = require("./config.class");
var dbHost = process.env.DB_HOST || "localhost";
var config = new config_class_1.default("productionSessionSecret", "mongodb://" + dbHost + ":27017/timeline", "ejs");
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = config;
//# sourceMappingURL=production.js.map